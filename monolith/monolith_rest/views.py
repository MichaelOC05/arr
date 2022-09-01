from urllib import response
from django.shortcuts import render
from .models import ReviewModel, CommentsModel, MovieInformationModel, UserModel
from .common.encoders import ModelEncoder 
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json 
import djwto.authentication as auth
from.acls import get_movies, get_comics
from django.contrib.auth import authenticate, login
# Create your views here.

class UserModelEncoder(ModelEncoder):
    model = UserModel
    properties = [
        "id",
        "username"
    ]


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
    encoders = {
        "reviewer_id": UserModelEncoder()
    }

class CommentsModelEncoder(ModelEncoder):
    model = CommentsModel
    properties = [
        "date_posted",
        "comment",
        "commenter_id",
    ]
    

class MovieInformationEncoder(ModelEncoder):
    model = MovieInformationModel
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
        "id",
        # "list_of_reviews",
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
            # safe = False,
        )
    else:
        content = json.loads(request.body)
        try:
            reviewer = content["reviewer_id"]
            user = UserModel.objects.get(id=reviewer)
            del content["reviewer_id"]
            content["reviewer_id"] = user
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


@require_http_methods(["GET", "POST"])
def api_comments(request):
    if request.method == "GET":
        comments = CommentsModel.objects.all()
        return JsonResponse(
            {"Comments": comments},
            encoder = CommentsModelEncoder,
            safe = False,
        )  
    else:
        content = json.loads(request.body)
        try:
            comment = CommentsModel.objects.create(**content)
            return JsonResponse(
                comment,
                encoder = CommentsModelEncoder,
                safe=False,
            )
        except CommentsModel.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Comment"}
            )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_comment(request, pk):
    if request.method == "GET":
        try:
            comment = CommentsModel.objects.get(id=pk)
            return JsonResponse(
                comment,
                encoder = CommentsModelEncoder,
                safe = False,
            )
        except CommentsModel.DoesNotExist:
            response = JsonResponse({"message": "Comment does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            comment = CommentsModel.objects.get(id=pk)
            comment.delete()
            return JsonResponse(
                comment,
                encoder = CommentsModelEncoder,
                safe=False
            )
        except CommentsModel.DoesNotExist:
            return JsonResponse({"message": "Comments does not exist"})
    else:
        try:
            content = json.loads(request.body)
            CommentsModel.objects.filter(id=pk).update(**content)
            comment = CommentsModel.objects.get(id=pk)
            return JsonResponse(
                comment,
                encoder=CommentsModelEncoder,
                safe=False,
            )
        except CommentsModel.DoesNotExist:
            response = JsonResponse({"message": "Comment does not exist"})
            response.status_code = 404
            return response 

@require_http_methods(["GET", "POST"])
def api_movieinfo(request):#This one is called MOVIE no S
    if request.method == "GET":
        movie_info = MovieInformationModel.objects.all()
        return JsonResponse(
            {"Movie_Info": movie_info},
            encoder = MovieInformationEncoder,
            safe = False,
        )
    else: 
        content = json.loads(request.body)
        try:
            movie = get_movies(content["movie_name"])
            content.update(movie)
            comic = get_comics(content["movie_name"])
            content.update(comic)
            movie_info = MovieInformationModel.objects.create(**content)
            return JsonResponse(
                movie_info,
                encoder=MovieInformationEncoder,
                safe=False,
            )
            
        except MovieInformationModel.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Movie"}
            )
@require_http_methods(["GET","DELETE", "PUT"])
def api_moviesinfo(request, pk):#This is is called MOVIES with an S
    if request.method == "GET":
        try:
            movie_info = MovieInformationModel.objects.get(id=pk)
            return JsonResponse(
                movie_info,
                encoder = MovieInformationEncoder,
                safe=False,
            )
        except MovieInformationModel.DoesNotExist:
            response = JsonResponse({"message": "Movie does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            movie_info = MovieInformationModel.objects.get(id=pk)
            movie_info.delete()
            return JsonResponse(
                movie_info,
                encoder = MovieInformationEncoder,
                safe = False,
            )
        except MovieInformationModel.DoesNotExist:
            return JsonResponse({"message": "Movie does not exist"})
    else: 
        try:
            content = json.loads(request.body)
            MovieInformationModel.objects.filter(id=pk).update(**content)
            movie_info = MovieInformationModel.objects.get(id=pk)
            return JsonResponse(
                movie_info,
                encoder=MovieInformationEncoder,
                safe=False,
            )
        except MovieInformationModel.DoesNotExist:
            response = JsonResponse({"message": "Movies Does Not Exist"})
            response.status_code=404
            return response
            



def authenticate_user(request):
    content = json.loads(request.body)
    print(content)
    username = content[0]
    password = content[1]
    user = authenticate(username=username, password=password)
    try:
        if user.is_active:
            login(request, user)
            response = JsonResponse({"Message": "User logged in"})
            return response
        elif user.is_disabled:
            return 
    except UserModel.DoesNotExist:
        response = JsonResponse({"Message": "Does not exist"})


@require_http_methods("POST")
def api_create_account(request):
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            user = UserModel.objects.create(**content)
        except UserModel.DoesNotExist:
            return JsonResponse(
                {"message": "Failed to create user"},
                status=400
            )
        return JsonResponse(
            user,
            encoder=UserModelEncoder,
            safe=False
        )

# @require_http_methods(["GET", "PUT", "DELETE"])
# def api_user_account():