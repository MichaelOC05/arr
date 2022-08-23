from django.shortcuts import render
from .models import ReviewModel, CommentsModel, MovieInformationModel
from encoders import ModelEncoder 
from djang.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json 
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
        try: 
            reviews = content["list_of_reviews"]
            result = ReviewModel.objects.get()
            content["reviews"] = result
        except ReviewModel.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Review"}
            )
        review = reviews.objects.create(**content)
        return JsonResponse(
            review,
            encoder=ReviewModelEncoder,
            safe=False,
        )