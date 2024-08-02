import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from ..models import ResumePDF
from ..utils import extract_text_from_pdf
from django.views.decorators.csrf import csrf_protect
import traceback

@csrf_protect
@require_POST
def create_resumepdf(request):
    try:
        data = request.POST
        uploaded_by_id = data.get('uploaded_by')
        file = request.FILES.get('file')
        file_text = extract_text_from_pdf(file)
        resumepdf = ResumePDF(uploaded_by=uploaded_by_id, file=file, file_text=file_text)
        resumepdf.save()
        return JsonResponse({'status': 'success', 'id': resumepdf.id}, status=201)
    except Exception as e:
        print(traceback.format_exc())
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_resumepdf(request, resumepdf_id):
    try:
        resumepdf = ResumePDF.objects.get(id=resumepdf_id)
        data = {
            'id': resumepdf.id,
            'uploaded_by': resumepdf.uploaded_by.id,
            'file': resumepdf.file.url,
            'file_text': resumepdf.file_text,
            'upload_date': resumepdf.upload_date,
        }
        return JsonResponse(data)
    except ResumePDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'ResumePDF not found'}, status=404)


@require_POST
def update_resumepdf(request, resumepdf_id):
    try:
        data = request.POST
        resumepdf = ResumePDF.objects.get(id=resumepdf_id)
        if 'file' in request.FILES:
            file = request.FILES.get('file')
            resumepdf.file = file
            resumepdf.file_text = extract_text_from_pdf(file)
        resumepdf.save()
        return JsonResponse({'status': 'success'})
    except ResumePDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'ResumePDF not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_resumepdf(request, resumepdf_id):
    try:
        resumepdf = ResumePDF.objects.get(id=resumepdf_id)
        resumepdf.delete()
        return JsonResponse({'status': 'success'})
    except ResumePDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'ResumePDF not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_GET
def get_resumepdfs(request):
    resumepdfs = ResumePDF.objects.all()
    resumepdfs_data = [{'id': resumepdf.id, 'uploaded_by': resumepdf.uploaded_by.id if resumepdf.uploaded_by else None, 'file': resumepdf.file.url, 'file_text': resumepdf.file_text, 'upload_date': resumepdf.upload_date} for resumepdf in resumepdfs]
    return JsonResponse(resumepdfs_data, safe=False)
