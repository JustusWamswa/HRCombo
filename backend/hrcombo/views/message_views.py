import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from ..models import Message
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie

# @ensure_csrf_cookie
@csrf_protect
@require_POST
def create_message(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message_content = data.get('message')
        message = Message(name=name, email=email, message=message_content)
        message.save()
        return JsonResponse({'status': 'success', 'id': message.id}, status=201)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@require_GET
def get_message(request, message_id):
    try:
        message = Message.objects.get(id=message_id)
        data = {
            'id': message.id,
            'name': message.name,
            'email': message.email,
            'message': message.message,
            'created_at': message.created_at,
            'updated_at': message.updated_at,
        }
        return JsonResponse(data)
    except Message.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Message not found'}, status=404)


@require_POST
def update_message(request, message_id):
    try:
        data = json.loads(request.body)
        message = Message.objects.get(id=message_id)
        message.name = data.get('name', message.name)
        message.email = data.get('email', message.email)
        message.message = data.get('message', message.message)
        message.save()
        return JsonResponse({'status': 'success'})
    except Message.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Message not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_POST
def delete_message(request, message_id):
    try:
        message = Message.objects.get(id=message_id)
        message.delete()
        return JsonResponse({'status': 'success'})
    except Message.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Message not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@require_GET
def get_messages(request):
    messages = Message.objects.all()
    messages_data = [{'id': message.id, 'name': message.name, 'email': message.email, 'message': message.message, 'created_at': message.created_at, 'updated_at': message.updated_at} for message in messages]
    return JsonResponse(messages_data, safe=False)
