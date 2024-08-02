from djongo import models
from django.utils.timezone import now
    

class JobPDF(models.Model):
    uploaded_by = models.CharField(max_length=200, default=None)
    file = models.FileField(upload_to='pdfs/')
    file_text = models.TextField(default='', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.upload_date} - Job PDF'
    
class ResumePDF(models.Model):
    uploaded_by = models.CharField(max_length=200, default='')
    file = models.FileField(upload_to='pdfs/')
    file_text = models.TextField(default='', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.upload_date} - Resume PDF'
    
class CandidatePreference(models.Model):
    resume_pdf = models.ForeignKey(ResumePDF, on_delete=models.CASCADE)
    user = models.CharField(max_length=200, default=None)
    preferred_location = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    industries = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} - Preferences'
    

class JobPosting(models.Model):
    title = models.CharField(max_length=200, default=None)
    company = models.CharField(max_length=200, default=None)
    location = models.CharField(max_length=200, default=None)
    industries = models.CharField(max_length=200, default=None)
    logo = models.ImageField(default=None)
    type_of_employment = models.CharField(max_length=200, default=None)
    lowest_monthly_salary_usd = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    highest_monthly_salary_usd = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    deadline = models.DateTimeField(default=now)
    job_pdf = models.ForeignKey(JobPDF, on_delete=models.CASCADE, related_name='job_postings')
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

    applicant = models.CharField(max_length=200, default=None)
    job_posting = models.ForeignKey(JobPosting, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.created_at


class Message(models.Model):
    name = models.CharField(max_length=255)
    message = models.TextField()
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Message from {self.name}'
