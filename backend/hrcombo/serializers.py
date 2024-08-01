from rest_framework import serializers
from .models import JobPDF

class PDFSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPDF
        fields = '__all__'