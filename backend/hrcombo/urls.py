# urls.py
from django.urls import path
from .views import index, protected_view, add_message, upload_resume
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name='index'),
    path('api/protected/', protected_view, name='protected-view'),
    path('api/add-message/', add_message, name='add-message'),
    path('api/upload-resume-pdf/', upload_resume, name='upload-resume-pdf'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)