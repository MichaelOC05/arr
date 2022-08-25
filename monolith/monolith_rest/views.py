from urllib import response
from django.shortcuts import render
from .models import ReviewModel, CommentsModel, MovieInformationModel
from .encoders import ModelEncoder 
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json 
import djwto.authentication as auth
# Create your views here.

class ReviewModelEncoder(ModelEncoder):
    model = ReviewModel
    properties = [
        "movie_name",
        "base_rating",
        "plot_rating",
        "char_rating",
        "setting_rating",
        "add_on_rating",
        "removal_rating",
        "rubric_rating",
        "admin_rating",
        "rating_description",
        "reviewer_id",
        "id",
    ]

class CommentsModelEncoder(ModelEncoder):
    model = CommentsModel
    properties = [
        "date_posted",
        "comment",
        "commenter_id",
    ]
    

class MovieInformationEncoder(ModelEncoder):
    model = ModelEncoder
    properties = [
        "movie_name",
        "movie_poster",
        "source_cover",
        "movie_director",
        "source_author",
        "imdb_score",
        "movie_synopsis",
        "imdb_id",
        "source_type",
        "list_of_reviews",
    ]
    encoders= {
        "list_of_reviews": ReviewModelEncoder(),
    }



@require_http_methods(["GET", "POST"])
def api_reviews(request):
    if request.method == "GET":
        reviews = ReviewModel.objects.all()
        return JsonResponse(
            {"Review": reviews},
            encoder = ReviewModelEncoder,
            safe = False,
        )
    else:
        content = json.loads(request.body)
        print(content)
        try: 
            review = ReviewModel.objects.create(**content)
            return JsonResponse(
                review,
                encoder=ReviewModelEncoder,
                safe=False,
            )
        except ReviewModel.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Review"}
            )
@require_http_methods(["GET", "DELETE", "PUT"])
def api_review(request,pk):
    if request.method == "GET":
        try:
            review = ReviewModel.objects.get(id=pk)
            return JsonResponse(
                review,
                encoder=ReviewModelEncoder,
                safe=False,
            )
        except ReviewModel.DoesNotExist:
            response = JsonResponse({"message": "Review does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            review = ReviewModel.objects.get(id=pk)
            review.delete()
            return JsonResponse(
                review,
                encoder=ReviewModelEncoder,
                safe=False,
            )
        except ReviewModel.DoesNotExist:
            return JsonResponse({"message": "Review does not exist"})
    else:
        try:
            content = json.loads(request.body)
            ReviewModel.objects.filter(id=pk).update(**content)
            review = ReviewModel.objects.get(id=pk)
            return JsonResponse(
                review,
                encoder=ReviewModelEncoder,
                safe=False
            )
        except ReviewModel.DoesNotExist:
            response = JsonResponse({"message": "Review does not exist"})
            response.status_code = 404
            return response

    
# function to call to sign in might want to add a way to direct the user to the home/
@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response