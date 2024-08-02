# urls.py
from django.urls import path
# from .views import index, protected_view, add_message, upload_resume, add_candidate_preference
from django.conf import settings
from django.conf.urls.static import static
from .views.index_views import index
# from .views.user_views import create_user, get_user, update_user, delete_user, get_users
from .views.jobpdf_views import create_jobpdf, get_jobpdf, update_jobpdf, delete_jobpdf, get_jobpdfs
from .views.resumepdf_views import create_resumepdf, get_resumepdf, update_resumepdf, delete_resumepdf, get_resumepdfs
from .views.candidatepreference_views import create_candidate_preference, get_candidate_preference, update_candidate_preference, delete_candidate_preference, get_candidate_preferences
from .views.jobposting_views import create_job_posting, get_job_posting, update_job_posting, delete_job_posting, get_job_postings
from .views.application_views import create_application, get_application, update_application, delete_application, get_applications
from .views.message_views import create_message, get_message, update_message, delete_message, get_messages
from .views.csrf_views import get_csrf_token

urlpatterns = [
    path('', index, name='index'),
    path('api/csrf-token/', get_csrf_token, name='get_csrf_token'),

    # path('api/users/', create_user, name='create_user'),
    # path('api/users/<int:user_id>/', get_user, name='get_user'),
    # path('api/users/<int:user_id>/update/', update_user, name='update_user'),
    # path('api/users/<int:user_id>/delete/', delete_user, name='delete_user'),
    # path('api/users/list/', get_users, name='get_users'),

    path('api/jobpdfs/', create_jobpdf, name='create_jobpdf'),
    path('api/jobpdfs/<int:jobpdf_id>/', get_jobpdf, name='get_jobpdf'),
    path('api/jobpdfs/<int:jobpdf_id>/update/', update_jobpdf, name='update_jobpdf'),
    path('api/jobpdfs/<int:jobpdf_id>/delete/', delete_jobpdf, name='delete_jobpdf'),
    path('api/jobpdfs/list/', get_jobpdfs, name='get_jobpdfs'),

    path('api/resumepdfs/', create_resumepdf, name='create_resumepdf'),
    path('api/resumepdfs/<int:resumepdf_id>/', get_resumepdf, name='get_resumepdf'),
    path('api/resumepdfs/<int:resumepdf_id>/update/', update_resumepdf, name='update_resumepdf'),
    path('api/resumepdfs/<int:resumepdf_id>/delete/', delete_resumepdf, name='delete_resumepdf'),
    path('api/resumepdfs/list/', get_resumepdfs, name='get_resumepdfs'),

    path('api/preferences/', create_candidate_preference, name='create_candidate_preference'),
    path('api/preferences/<int:preference_id>/', get_candidate_preference, name='get_candidate_preference'),
    path('api/preferences/<int:preference_id>/update/', update_candidate_preference, name='update_candidate_preference'),
    path('api/preferences/<int:preference_id>/delete/', delete_candidate_preference, name='delete_candidate_preference'),
    path('api/preferences/list/', get_candidate_preferences, name='get_candidate_preferences'),

    path('api/jobpostings/', create_job_posting, name='create_job_posting'),
    path('api/jobpostings/<int:job_posting_id>/', get_job_posting, name='get_job_posting'),
    path('api/jobpostings/<int:job_posting_id>/update/', update_job_posting, name='update_job_posting'),
    path('api/jobpostings/<int:job_posting_id>/delete/', delete_job_posting, name='delete_job_posting'),
    path('api/jobpostings/list/', get_job_postings, name='get_job_postings'),

    path('api/applications/', create_application, name='create_application'),
    path('api/applications/<int:application_id>/', get_application, name='get_application'),
    path('api/applications/<int:application_id>/update/', update_application, name='update_application'),
    path('api/applications/<int:application_id>/delete/', delete_application, name='delete_application'),
    path('api/applications/list/', get_applications, name='get_applications'),

    path('api/messages/', create_message, name='create_message'),
    path('api/messages/<int:message_id>/', get_message, name='get_message'),
    path('api/messages/<int:message_id>/update/', update_message, name='update_message'),
    path('api/messages/<int:message_id>/delete/', delete_message, name='delete_message'),
    path('api/messages/list/', get_messages, name='get_messages'),
]

# urlpatterns = [
#     path('', index, name='index'),
#     path('api/protected/', protected_view, name='protected-view'),
#     path('api/add-message/', add_message, name='add-message'),
#     path('api/upload-resume-pdf/', upload_resume, name='upload-resume-pdf'),
#     path('api/add-candidate-preference/', add_candidate_preference, name='add-candidate-preference'),
# ]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)