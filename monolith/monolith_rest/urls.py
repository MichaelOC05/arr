from django.urls import path
from .views import api_reviews, api_review

urlpatterns = [
    path('reviews/', api_reviews, name="list_of_reviews"),
    path("reviews/<int:pk>/", api_review, name="api_review")
]