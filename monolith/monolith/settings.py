"""
Django settings for monolith project.

Generated by 'django-admin startproject' using Django 4.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

import dj_database_url
from datetime import datetime, timedelta
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%(jq7#xi1t^qcrz8mkxtqdk(9tbjq#6u5=rkg-q0mj)+72#mp*'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = not os.environ.get("DEBUG")
DEBUG = False

ALLOWED_HOSTS = [
    ".localhost",
    "127.0.0.1",
    "[::1]",
    os.environ.get("DEPLOYED_HOST", "localhost"),
    "adaptation-accuracy.herokuapp.com",
    "https://adaptation-accuracy.herokuapp.com"
]

AUTH_USER_MODEL = "monolith_rest.UserModel"

# Application definition

INSTALLED_APPS = [
    'monolith_rest.apps.MonolithRestConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "djwto",
    "corsheaders",
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8000",
    "https://adaptation-accuracy.herokuapp.com",
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://loclhost:8000",
    os.environ.get("CORS_HOST", "http://localhost:3001"),
    "https://adaptation-accuracy.herokuapp.com",
]
CORS_ALLOW_CREDENTIALS = True

ROOT_URLCONF = 'monolith.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'monolith.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES = {}
DATABASES["default"] = dj_database_url.config()

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# code for JWT
DJWTO_MODE = "TWO-COOKIES"
DJWTO_CSRF = False
DJWTO_ACCESS_TOKEN_LIFETIME = timedelta(days=1)

# Your DEBUG value MUST be False in production
DJWTO_SAME_SITE = "LAX" if DEBUG else "NONE"