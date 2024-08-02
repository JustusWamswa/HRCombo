import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from ..models import CandidatePreference, ResumePDF
import traceback

@require_POST
def create_candidate_preference(request):
    try:
        data = json.loads(request.body)
        resume_pdf_id = data.get('resume_pdf_id')
        user_id = data.get('user')
        preferred_location = data.get('preferred_location')
        address = data.get('address')
        country = data.get('country')
        industries = data.get('industries')
        resume_pdf = ResumePDF.objects.get(id=resume_pdf_id)
        preference = CandidatePreference(
            resume_pdf=resume_pdf,
            user=user_id,
            preferred_location=preferred_location,
            address=address,
            country=country,
            industries=industries
        )
        preference.save()
        return JsonResponse({'status': 'success', 'id': preference.id}, status=201)
    except Exception as e:
        print(traceback.format_exc())
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_candidate_preference(request, preference_id):
    try:
        preference = CandidatePreference.objects.get(id=preference_id)
        data = {
            'id': preference.id,
            'resume_pdf': preference.resume_pdf.id,
            'user': preference.user.id,
            'preferred_location': preference.preferred_location,
            'address': preference.address,
            'country': preference.country,
            'industries': preference.industries,
            'created_at': preference.created_at,
            'updated_at': preference.updated_at,
        }
        return JsonResponse(data)
    except CandidatePreference.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'CandidatePreference not found'}, status=404)


@require_POST
def update_candidate_preference(request, preference_id):
    try:
        data = json.loads(request.body)
        preference = CandidatePreference.objects.get(id=preference_id)
        if 'resume_pdf' in data:
            resume_pdf = ResumePDF.objects.get(id=data['resume_pdf'])
            preference.resume_pdf = resume_pdf
        if 'user' in data:
            user = data['user']
            preference.user = user
        preference.preferred_location = data.get('preferred_location', preference.preferred_location)
        preference.address = data.get('address', preference.address)
        preference.country = data.get('country', preference.country)
        preference.industries = data.get('industries', preference.industries)
        preference.save()
        return JsonResponse({'status': 'success'})
    except CandidatePreference.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'CandidatePreference not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_candidate_preference(request, preference_id):
    try:
        preference = CandidatePreference.objects.get(id=preference_id)
        preference.delete()
        return JsonResponse({'status': 'success'})
    except CandidatePreference.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'CandidatePreference not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_candidate_preferences(request):
    preferences = CandidatePreference.objects.all()
    preferences_data = [{'id': preference.id, 'resume_pdf': preference.resume_pdf.id, 'user': preference.user.id, 'preferred_location': preference.preferred_location, 'address': preference.address, 'country': preference.country, 'industries': preference.industries, 'created_at': preference.created_at, 'updated_at': preference.updated_at} for preference in preferences]
    return JsonResponse(preferences_data, safe=False)
