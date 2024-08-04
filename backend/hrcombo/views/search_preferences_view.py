from django.http import JsonResponse
from ..models import CandidatePreference
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST, require_GET
import json


@csrf_protect
@require_POST
def search_preferences(request):
    data = json.loads(request.body)
    country = data.get('country')
    industry = data.get('industry')

    preferences = CandidatePreference.objects.all()

    if country:
        preferences = preferences.filter(country__icontains=country)
    if industry:
        preferences = preferences.filter(industries__icontains=industry)

    preferences_list = list(preferences.values('id', 'user', 'preferred_location', 'address', 'country', 'industries', 'created_at', 'updated_at', 'resume_pdf__uploaded_by', 'resume_pdf__file', 'resume_pdf__file_text', 'resume_pdf__upload_date'))

    return JsonResponse({'preferences': preferences_list})
