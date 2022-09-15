from .models import ReviewModel
from .models import MovieInformationModel, UserModel
from .common.encoders import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate, login, logout
import djwto.authentication as auth
import os

# Create your views here.
s = os.environ["DJWTO_SIGNING_KEY"]


class UserModelEncoder(ModelEncoder):
    model = UserModel
    properties = [
        "id",
        "username",
        "first_name",
        "last_name",
        "email",
        "profile_picture",
        "profile_bio"
    ]


class MovieInformationEncoder(ModelEncoder):
    model = MovieInformationModel
    properties = [
        "movie_name",
        "movie_poster",
        "movie_director",
        "source_author",
        "imdb_score",
        "movie_synopsis",
        "imdb_id",
        "id",
        "rubric_rating",
        "base_rating",
        "plot_rating",
        "char_rating",
        "setting_rating",
        "removal_rating",
        "add_on_rating"
    ]


class ReviewModelEncoder(ModelEncoder):
    model = ReviewModel
    properties = [
        "movie_id",
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
        "reviewer_id": UserModelEncoder(),
        "movie_id": MovieInformationEncoder(),
    }


# class CommentsModelEncoder(ModelEncoder):
#     model = CommentsModel
#     properties = [
#         "date_posted",
#         "comment",
#         "commenter_id",
#     ]


@require_http_methods(["GET", "POST"])
def api_reviews(request):
    if request.method == "GET":
        reviews = ReviewModel.objects.all()
        return JsonResponse(
            {"Review": reviews},
            encoder=ReviewModelEncoder,
            # safe = False,
        )
    else:
        content = json.loads(request.body)
        try:
            reviewer = content["reviewer_id"]
            user = UserModel.objects.get(id=reviewer)
            del content["reviewer_id"]
            content["reviewer_id"] = user
            movie_id = content["movie_id"]
            movie = MovieInformationModel.objects.get(id=movie_id)
            del content["movie_id"]
            content["movie_id"] = movie
            review = ReviewModel.objects.create(**content)
            return JsonResponse(
                review,
                encoder=ReviewModelEncoder,
                safe=False,
            )
        except ReviewModel.DoesNotExist:
            return JsonResponse({"message": "Invalid Review"})


@require_http_methods(["GET", "DELETE", "PUT"])
def api_review(request, pk):
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
            return JsonResponse(review, encoder=ReviewModelEncoder, safe=False)
        except ReviewModel.DoesNotExist:
            response = JsonResponse({"message": "Review does not exist"})
            response.status_code = 404
            return response


# function to call to sign in might want
#  to add a way to direct the user to the home/
@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response


# @require_http_methods(["GET", "POST"])
# def api_comments(request):
#     if request.method == "GET":
#         comments = CommentsModel.objects.all()
#         return JsonResponse(
#             {"Comments": comments},
#             encoder=CommentsModelEncoder,
#             safe=False,
#         )
#     else:
#         content = json.loads(request.body)
#         try:
#             comment = CommentsModel.objects.create(**content)
#             return JsonResponse(
#                 comment,
#                 encoder=CommentsModelEncoder,
#                 safe=False,
#             )
#         except CommentsModel.DoesNotExist:
#             return JsonResponse({"message": "Invalid Comment"})


# @require_http_methods(["GET", "DELETE", "PUT"])
# def api_comment(request, pk):
#     if request.method == "GET":
#         try:
#             comment = CommentsModel.objects.get(id=pk)
#             return JsonResponse(
#                 comment,
#                 encoder=CommentsModelEncoder,
#                 safe=False,
#             )
#         except CommentsModel.DoesNotExist:
#             response = JsonResponse({"message": "Comment does not exist"})
#             response.status_code = 404
#             return response
#     elif request.method == "DELETE":
#         try:
#             comment = CommentsModel.objects.get(id=pk)
#             comment.delete()
#             return JsonResponse(comment,
#                                 encoder=CommentsModelEncoder,
#                                 safe=False)
#         except CommentsModel.DoesNotExist:
#             return JsonResponse({"message": "Comments does not exist"})
#     else:
#         try:
#             content = json.loads(request.body)
#             CommentsModel.objects.filter(id=pk).update(**content)
#             comment = CommentsModel.objects.get(id=pk)
#             return JsonResponse(
#                 comment,
#                 encoder=CommentsModelEncoder,
#                 safe=False,
#             )
#         except CommentsModel.DoesNotExist:
#             response = JsonResponse({"message": "Comment does not exist"})
#             response.status_code = 404
#             return response


@require_http_methods(["GET", "POST"])
def api_movieinfo(request):  # This one is called MOVIE no S
    if request.method == "GET":
        movie_info = MovieInformationModel.objects.all()
        return JsonResponse(
            {"Movie_Info": movie_info},
            encoder=MovieInformationEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        # movie = get_movies(content["movie_name"])# if broken remove
        # content.update(movie)# if broken remove
        try:
            movie_name = content["movie_name"]
            MovieInformationModel.objects.create(**content)
            movie_instance = MovieInformationModel.objects.get(
                movie_name=movie_name)
            return JsonResponse(
                movie_instance,
                encoder=MovieInformationEncoder,
                safe=False,
            )

        except MovieInformationModel.DoesNotExist:
            return JsonResponse({"message": "Invalid Movie"})


@require_http_methods(["GET", "DELETE", "PUT"])
def api_moviesinfo(request, pk):  # This is is called MOVIES with an S
    if request.method == "GET":
        try:
            movie_info = MovieInformationModel.objects.get(id=pk)
            return JsonResponse(
                movie_info,
                encoder=MovieInformationEncoder,
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
                encoder=MovieInformationEncoder,
                safe=False,
            )
        except MovieInformationModel.DoesNotExist:
            return JsonResponse({"message": "Movie does not exist"})
    else:
        try:
            content = {}
            movie_instance = MovieInformationModel.objects.get(id=pk)
            base_rating_count = 0
            plot_rating_count = 0
            char_rating_count = 0
            setting_rating_count = 0
            add_on_rating_count = 0
            removal_rating_count = 0
            list_of_reviews = movie_instance.review_models.all()
            length_of_reviews = len(list_of_reviews)
            for review in list_of_reviews:
                base_rating_count += review.base_rating
                plot_rating_count += review.plot_rating
                char_rating_count += review.char_rating
                setting_rating_count += review.setting_rating
                add_on_rating_count += review.add_on_rating
                removal_rating_count += review.removal_rating
            content["base_rating"] = round((base_rating_count
                                            / length_of_reviews), 1)
            content["plot_rating"] = round((plot_rating_count
                                            / length_of_reviews), 1)
            content["char_rating"] = round((char_rating_count
                                            / length_of_reviews), 1)
            content["setting_rating"] = round((setting_rating_count
                                               / length_of_reviews), 1)
            content["add_on_rating"] = round((add_on_rating_count
                                              / length_of_reviews), 1)
            content["removal_rating"] = round((removal_rating_count
                                               / length_of_reviews), 1)
            content["rubric_rating"] = round(((content["plot_rating"]
                                               + content["char_rating"]
                                               + content["setting_rating"]
                                               + content["add_on_rating"]
                                               + content["removal_rating"])
                                              / 5), 1)
            MovieInformationModel.objects.filter(id=pk).update(**content)
            movie_info = MovieInformationModel.objects.get(id=pk)
            return JsonResponse(
                movie_info,
                encoder=MovieInformationEncoder,
                safe=False,
            )
        except MovieInformationModel.DoesNotExist:
            response = JsonResponse({"message": "Movies Does Not Exist"})
            response.status_code = 404
            return response


def authenticate_user(request):
    content = json.loads(request.body)
    print(content)
    username = content[0]
    password = content[1]
    user = authenticate(username=username, password=password)
    try:
        if user.is_active:
            response = JsonResponse({"Message": "User logged in"})
            return response
        elif user.is_disabled:
            return
    except UserModel.DoesNotExist:
        response = JsonResponse({"Message": "Does not exist"})


@require_http_methods("DELETE")
def logout_view(request):
    print("hello")
    print(request)
    if request.method == "DELETE":
        logout(request)
        response = JsonResponse({"Message": "user logged out"})
        return response


@require_http_methods("POST")
def api_create_account(request):
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            user = UserModel.objects.create(**content)
        except UserModel.DoesNotExist:
            return JsonResponse(
                {"message": "Failed to create user"}, status=400)
        return JsonResponse(user, encoder=UserModelEncoder, safe=False)


@require_http_methods(["POST", "GET"])
def api_user_account(request):
    if request.method == "POST":
        content = json.loads(request.body)
        username = content["username"]
        try:
            user = UserModel.objects.get(username=username)
            return JsonResponse(
                user,
                encoder=UserModelEncoder,
                safe=False,
            )
        except UserModel.DoesNotExist:
            response = JsonResponse({"message": "Username does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            users = UserModel.objects.get(is_active=True)
            return JsonResponse(
                {"Accounts": users},
                encoder=UserModelEncoder,
                safe=False,
            )
        except UserModel.DoesNotExist:
            response = JsonResponse({"message": "Users does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "PUT", "DELETE"])
def api_user(request, pk):
    if request.method == "GET":
        try:
            user = UserModel.objects.get(id=pk)
            return JsonResponse(
                user,
                encoder=UserModelEncoder,
                safe=False,
            )
        except UserModel.DoesNotExist:
            response = JsonResponse({"message": "User does not exist"})
            response.status_code = 404
            return response
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            UserModel.objects.filter(id=pk).update(**content)
            user = UserModel.objects.get(id=pk)
            return JsonResponse(
                user,
                encoder=UserModelEncoder,
                safe=False,
            )
        except UserModel.DoesNotExist:
            response = JsonResponse({"message": "User does not exist"})
            response.status_code = 404
            return response
    else:
        pass


@auth.jwt_login_required
@require_http_methods("GET")
def get_payload_token(request):
    token_data = request.payload
    userId = token_data["user"]["id"]
    print(userId)
    if userId:
        return JsonResponse({"id": userId})
    response = JsonResponse({"token": None})
    return response
