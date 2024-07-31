from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def index(request):
    return HttpResponse("HRCombo")

def protected_view(request):
    if not request.clerk_user:
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    
    # Access Clerk user data
    clerk_user = request.clerk_user
    return JsonResponse({'user': clerk_user})