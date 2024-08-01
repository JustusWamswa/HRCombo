from django.db import models

# Create your models here.

from django.db import models
from django.utils.timezone import now


class User(models.Model):
    ROLE_CHOICES = [
        ('candidate', 'Candidate'),
        ('hr', 'HR Personnel'),
        ('admin', 'Administrator'),
    ]

    clerk_id = models.CharField(max_length=255, unique=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
    

class JobPDF(models.Model):
    uploaded_by = models.CharField(max_length=255)
    file = models.FileField(upload_to='pdfs/')
    file_text = models.TextField(default='', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.uploaded_by
    
class ResumePDF(models.Model):
    uploaded_by = models.CharField(max_length=255)
    file = models.FileField(upload_to='pdfs/')
    file_text = models.TextField(default='', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.uploaded_by
    
class CandidatePreference(models.Model):
    resume_pdf = models.ForeignKey(ResumePDF, on_delete=models.CASCADE)
    preferred_location = models.CharField(max_length=200)
    address= models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    industries = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user
    

class JobPosting(models.Model):
    title = models.CharField(max_length=200, default=None)
    company = models.CharField(max_length=200, default=None)
    location = models.CharField(max_length=200, default=None)
    logo = models.ImageField(default=None)
    type_of_employment = models.CharField(max_length=200, default=None)
    lowest_monthly_salary_usd = models.CharField(max_length=200, default=0)
    highest_monthly_salary_usd = models.CharField(max_length=200, default=0)
    deadline = models.DateTimeField(default=now)
    job_pdf= models.ForeignKey(JobPDF, on_delete=models.CASCADE, default='job-pdf-id')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Application(models.Model):
    STATUS_CHOICES = [
        ('applied', 'Applied'),
        ('shortlisted', 'Shortlisted'),
        ('rejected', 'Rejected'),
        ('accepted', 'Accepted'),
    ]

    applicant = models.CharField(max_length=255, default='applicant')
    job_posting = models.ForeignKey(JobPosting, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Application of {self.candidate} for {self.job_posting}'



class Message(models.Model):
    name = models.TextField()
    message = models.TextField()
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Message from {self.name}'

