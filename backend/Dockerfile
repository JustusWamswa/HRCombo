# Use the official Python image from the Docker Hub.
FROM python:3.11

# Set environment variables.
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory.
WORKDIR /app

# Install dependencies.
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Install NLTK data
RUN python -m nltk.downloader punkt averaged_perceptron_tagger stopwords

# Copy project.
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port the app runs on.
EXPOSE 8000

# Start Gunicorn server.
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
