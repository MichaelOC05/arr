from django.urls import path
from .views import api_reviews

urlpatterns = [
    path('reviews/', api_reviews, name="list_of_reviews"),
]