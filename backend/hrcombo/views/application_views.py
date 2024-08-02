import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from ..models import Application, JobPosting


@require_POST
def create_application(request):
    try:
        data = json.loads(request.body)
        applicant_id = data.get('applicant')
        job_posting_id = data.get('job_posting')
        status = data.get('status')
        job_posting = JobPosting.objects.get(id=job_posting_id)
        application = Application(applicant_id=applicant_id, job_posting=job_posting, status=status)
        application.save()
        return JsonResponse({'status': 'success', 'id': application.id}, status=201)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_application(request, application_id):
    try:
        application = Application.objects.get(id=application_id)
        data = {
            'id': application.id,
            'applicant': application.applicant.id,
            'job_posting': application.job_posting.id,
            'status': application.status,
            'created_at': application.created_at,
            'updated_at': application.updated_at,
        }
        return JsonResponse(data)
    except Application.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Application not found'}, status=404)


@require_POST
def update_application(request, application_id):
    try:
        data = json.loads(request.body)
        application = Application.objects.get(id=application_id)
        if 'applicant' in data:
            applicant = data['applicant']
            application.applicant = applicant
        if 'job_posting' in data:
            job_posting = JobPosting.objects.get(id=data['job_posting'])
            application.job_posting = job_posting
        application.status = data.get('status', application.status)
        application.save()
        return JsonResponse({'status': 'success'})
    except Application.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Application not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_application(request, application_id):
    try:
        application = Application.objects.get(id=application_id)
        application.delete()
        return JsonResponse({'status': 'success'})
    except Application.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Application not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_GET
def get_applications(request):
    applications = Application.objects.all()
    applications_data = [{'id': application.id, 'applicant': application.applicant.id, 'job_posting': application.job_posting.id, 'status': application.status, 'created_at': application.created_at, 'updated_at': application.updated_at} for application in applications]
    return JsonResponse(applications_data, safe=False)
