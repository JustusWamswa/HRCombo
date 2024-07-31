# clerk_middleware.py
import requests
from django.conf import settings
from django.http import JsonResponse

class ClerkAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def verify_token(self, token):
        url = 'https://api.clerk.dev/v1/sessions/verify'
        headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json',
            'Api-Key': settings.CLERK_API_KEY
        }
        response = requests.post(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            return None

    def __call__(self, request):
        token = request.headers.get('Authorization')
        if token:
            token = token.replace('Bearer ', '')
            session = self.verify_token(token)
            if session:
                request.clerk_user = session.get('user')
            else:
                return JsonResponse({'error': 'Unauthorized'}, status=401)
        else:
            request.clerk_user = None

        response = self.get_response(request)
        return response
