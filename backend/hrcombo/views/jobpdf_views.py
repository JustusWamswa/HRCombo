import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from ..models import JobPDF
from ..utils import extract_text_from_pdf
from django.views.decorators.csrf import csrf_protect
import traceback

@csrf_protect
@require_POST
def create_jobpdf(request):
    try:
        data = request.POST
        uploaded_by_id = data.get('uploaded_by')
        file = request.FILES.get('file')
        print(file, uploaded_by_id)
        file_text = extract_text_from_pdf(file)
        jobpdf = JobPDF(uploaded_by=uploaded_by_id, file=file, file_text=file_text)
        jobpdf.save()
        return JsonResponse({'status': 'success', 'id': jobpdf.id}, status=201)
    except Exception as e:
        print(traceback.format_exc())
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_jobpdf(request, jobpdf_id):
    try:
        jobpdf = JobPDF.objects.get(id=jobpdf_id)
        data = {
            'id': jobpdf.id,
            'uploaded_by': jobpdf.uploaded_by.id,
            'file': jobpdf.file.url,
            'file_text': jobpdf.file_text,
            'upload_date': jobpdf.upload_date,
        }
        return JsonResponse(data)
    except JobPDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPDF not found'}, status=404)


@require_POST
def update_jobpdf(request, jobpdf_id):
    try:
        data = request.POST
        jobpdf = JobPDF.objects.get(id=jobpdf_id)
        if 'file' in request.FILES:
            file = request.FILES.get('file')
            jobpdf.file = file
            jobpdf.file_text = extract_text_from_pdf(file)
        jobpdf.save()
        return JsonResponse({'status': 'success'})
    except JobPDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPDF not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_jobpdf(request, jobpdf_id):
    try:
        jobpdf = JobPDF.objects.get(id=jobpdf_id)
        jobpdf.delete()
        return JsonResponse({'status': 'success'})
    except JobPDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'JobPDF not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_jobpdfs(request):
    jobpdfs = JobPDF.objects.all()
    jobpdfs_data = [{'id': jobpdf.id, 'uploaded_by': jobpdf.uploaded_by.id if jobpdf.uploaded_by else None, 'file': jobpdf.file.url, 'file_text': jobpdf.file_text, 'upload_date': jobpdf.upload_date} for jobpdf in jobpdfs]
    return JsonResponse(jobpdfs_data, safe=False)