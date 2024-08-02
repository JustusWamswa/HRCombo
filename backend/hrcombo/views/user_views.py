# import json
# from django.http import JsonResponse
# from django.views.decorators.http import require_POST, require_http_methods, require_GET
# from ..models import User


# @require_POST
# def create_user(request):
#     try:
#         data = json.loads(request.body)
#         clerk_id = data.get('clerk_id')
#         role = data.get('role')
#         email = data.get('email')
#         user = User(clerk_id=clerk_id, role=role, email=email)
#         user.save()
#         return JsonResponse({'status': 'success', 'id': user.id}, status=201)
#     except Exception as e:
#         return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

# @require_http_methods(["GET"])
# def get_user(request, user_id):
#     try:
#         user = User.objects.get(id=user_id)
#         data = {
#             'id': user.id,
#             'clerk_id': user.clerk_id,
#             'role': user.role,
#             'email': user.email,
#             'created_at': user.created_at,
#             'updated_at': user.updated_at,
#         }
#         return JsonResponse(data)
#     except User.DoesNotExist:
#         return JsonResponse({'status': 'error', 'message': 'User not found'}, status=404)


# @require_POST
# def update_user(request, user_id):
#     try:
#         data = json.loads(request.body)
#         user = User.objects.get(id=user_id)
#         user.role = data.get('role', user.role)
#         user.email = data.get('email', user.email)
#         user.save()
#         return JsonResponse({'status': 'success'})
#     except User.DoesNotExist:
#         return JsonResponse({'status': 'error', 'message': 'User not found'}, status=404)
#     except Exception as e:
#         return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


# @require_POST
# def delete_user(request, user_id):
#     try:
#         user = User.objects.get(id=user_id)
#         user.delete()
#         return JsonResponse({'status': 'success'})
#     except User.DoesNotExist:
#         return JsonResponse({'status': 'error', 'message': 'User not found'}, status=404)
#     except Exception as e:
#         return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

# @require_GET
# def get_users(request):
#     users = User.objects.all()
#     users_data = [{'id': user.id, 'email': user.email, 'role': user.role, 'clerk_id': user.clerk_id} for user in users]
#     return JsonResponse(users_data, safe=False)