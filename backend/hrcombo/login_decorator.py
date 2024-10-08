from django.http import JsonResponse

def login_required(view_func):
    def _wrapped_view_func(request, *args, **kwargs):
        if not request.user:
            return JsonResponse({'detail': 'Authentication required'}, status=401)
        return view_func(request, *args, **kwargs)
    return _wrapped_view_func
