#!/usr/bin/env python
"""Single-file Django application."""
import os
import sys

import dj_database_url
from django.conf import settings


DEBUG = os.environ.get("DEBUG", False)
ROOT_URLCONF = "paxful.urls"
SECRET_KEY = os.environ.get("DJANGO_SECRET", "dummy")
ALLOWED_HOSTS = ["127.0.0.1", "localhost"]
INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.auth",
    "corsheaders",
    "paxful",
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]
DATABASES = {"default": dj_database_url.config(default="sqlite:///db.sqlite3")}
TIME_ZONE = "UTC"
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {"console": {"class": "logging.StreamHandler"}},
    "loggers": {"django": {"handlers": ["console"], "level": "INFO"}},
}
CORS_ORIGIN_WHITELIST = ('http://127.0.0.1:3000', 'http://localhost:3000')


if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    if not settings.configured:
        settings.configure(**locals())

    execute_from_command_line(sys.argv)
