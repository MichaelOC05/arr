from django.urls import path
<<<<<<< HEAD
from .views import api_reviews, api_review, api_user_token
=======
from .views import api_reviews, api_review, api_comments, api_comment, api_movieinfo, api_moviesinfo
>>>>>>> main

urlpatterns = [
    path('reviews/', api_reviews, name="list_of_reviews"),
    path("reviews/<int:pk>/", api_review, name="api_review"),
<<<<<<< HEAD
    path("api/tokens/mine/", api_user_token, name="api_user_token"),
=======
    path("comments/", api_comments, name="list_of_comments"),
    path("comments/<int:pk>/", api_comment, name="detail_comments"),
    path('movie_info/', api_movieinfo, name="list_of_movies"),
    path('movie_info/<int:pk>', api_moviesinfo, name="detail_movies"),
>>>>>>> main
]