import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from django.utils.timezone import now
from ..models import JobPosting, JobPDF
from django.views.decorators.csrf import csrf_protect

@csrf_protect
@require_POST
def create_job_posting(request):
    try:
        data = request.POST
        title = data.get('title')
        company = data.get('company')
        location = data.get('location')
        logo = request.FILES.get('logo')
        type_of_employment = data.get('type_of_employment')
        lowest_monthly_salary_usd = data.get('lowest_monthly_salary_usd', 0.00)
        highest_monthly_salary_usd = data.get('highest_monthly_salary_usd', 0.00)
        deadline = data.get('deadline', now())
        job_pdf_id = data.get('job_pdf')
        industries = data.get('industries')
        job_pdf = JobPDF.objects.get(id=job_pdf_id)
        job_posting = JobPosting(
            title=title,
            company=company,
            location=location,
            logo=logo,
            type_of_employment=type_of_employment,
            lowest_monthly_salary_usd=lowest_monthly_salary_usd,
            highest_monthly_salary_usd=highest_monthly_salary_usd,
            deadline=deadline,
            job_pdf=job_pdf,
            industries=industries
        )
        job_posting.save()
        return JsonResponse({'status': 'success', 'id': job_posting.id}, status=201)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_job_posting(request, job_posting_id):
    try:
        job_posting = JobPosting.objects.get(id=job_posting_id)
        data = {
            'id': job_posting.id,
            'title': job_posting.title,
            'company': job_posting.company,
            'location': job_posting.location,
            'logo': job_posting.logo.url if job_posting.logo else None,
            'type_of_employment': job_posting.type_of_employment,
            'lowest_monthly_salary_usd': job_posting.lowest_monthly_salary_usd,
            'highest_monthly_salary_usd': job_posting.highest_monthly_salary_usd,
            'deadline': job_posting.deadline,
            'job_pdf': job_posting.job_pdf.id,
            'created_at': job_posting.created_at,
            'updated_at': job_posting.updated_at,
        }
        return JsonResponse(data)
    except JobPosting.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPosting not found'}, status=404)


@require_POST
def update_job_posting(request, job_posting_id):
    try:
        data = json.loads(request.body)
        job_posting = JobPosting.objects.get(id=job_posting_id)
        job_posting.title = data.get('title', job_posting.title)
        job_posting.company = data.get('company', job_posting.company)
        job_posting.location = data.get('location', job_posting.location)
        if 'logo' in request.FILES:
            job_posting.logo = request.FILES.get('logo')
        job_posting.type_of_employment = data.get('type_of_employment', job_posting.type_of_employment)
        job_posting.lowest_monthly_salary_usd = data.get('lowest_monthly_salary_usd', job_posting.lowest_monthly_salary_usd)
        job_posting.highest_monthly_salary_usd = data.get('highest_monthly_salary_usd', job_posting.highest_monthly_salary_usd)
        job_posting.deadline = data.get('deadline', job_posting.deadline)
        if 'job_pdf' in data:
            job_pdf = JobPDF.objects.get(id=data['job_pdf'])
            job_posting.job_pdf = job_pdf
        job_posting.save()
        return JsonResponse({'status': 'success'})
    except JobPosting.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPosting not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_job_posting(request, job_posting_id):
    try:
        job_posting = JobPosting.objects.get(id=job_posting_id)
        job_posting.delete()
        return JsonResponse({'status': 'success'})
    except JobPosting.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPosting not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_GET
def get_job_postings(request):
    job_postings = JobPosting.objects.all()
    job_postings_data = [{'id': job_posting.id, 'title': job_posting.title, 'company': job_posting.company, 'location': job_posting.location, 'logo': job_posting.logo.url if job_posting.logo else None, 'type_of_employment': job_posting.type_of_employment, 'lowest_monthly_salary_usd': job_posting.lowest_monthly_salary_usd, 'highest_monthly_salary_usd': job_posting.highest_monthly_salary_usd, 'deadline': job_posting.deadline, 'job_pdf': job_posting.job_pdf.id, 'created_at': job_posting.created_at, 'updated_at': job_posting.updated_at} for job_posting in job_postings]
    return JsonResponse(job_postings_data, safe=False)
