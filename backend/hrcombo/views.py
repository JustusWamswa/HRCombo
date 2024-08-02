from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Message, JobPDF, ResumePDF, CandidatePreference
import json
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from .utils import extract_text_from_pdf

def index(request):
    return HttpResponse("HRCombo")

def protected_view(request):
    if not request.clerk_user:
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    
    # Access Clerk user data
    clerk_user = request.clerk_user
    return JsonResponse({'user': clerk_user})

@csrf_exempt
@require_POST
def add_message(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        value = Message(name=name, email=email, message=message)
        value.save()

        return JsonResponse({'status': 'success'}, status=201)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    
@csrf_exempt
@require_POST
def upload_resume(request):
    if 'file' not in request.FILES:
        return JsonResponse({'status': 'error', 'message': 'No file provided'}, status=400)
    
    file = request.FILES['file']
    file_text = extract_text_from_pdf(file)
    uploaded_by = request.user

    pdf = ResumePDF(file=file, file_text=file_text, uploaded_by=uploaded_by)
    pdf.save()

    return JsonResponse({'status': 'success', 'id': pdf.id}, status=201)


@csrf_exempt
@require_POST
def add_candidate_preference(request):
    try:
        data = json.loads(request.body)
        resume_pdf_id = data.get('resume_pdf_id')
        preferred_location = data.get('preferred_location')
        address = data.get('address')
        country = data.get('country')
        industries = data.get('industries')

        # Ensure the related ResumePDF exists
        resume_pdf = ResumePDF.objects.get(id=resume_pdf_id)
        print("resume pdf: ", resume_pdf)

        # Create and save the CandidatePreference instance
        candidate_preference = CandidatePreference(
            resume_pdf=resume_pdf,
            preferred_location=preferred_location,
            address=address,
            country=country,
            industries=industries
        )
        candidate_preference.save()

        return JsonResponse({'status': 'success'}, status=201)
    except ResumePDF.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'ResumePDF not found'}, status=400)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

