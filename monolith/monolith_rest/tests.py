from django.test import TestCase, Client
from django.urls import reverse
from .models import MovieInformationModel, ReviewModel, UserModel


# Kurt's test
class TestMovieView(TestCase):
    def setUp(self):
        MovieInformationModel.objects.create(movie_name="Spiderman")

    def test_list_movies(self):
        client = Client()
        response = client.get(reverse("list_of_movies"))
        self.assertEquals(response.status_code, 200)

#Jack Feiner's Tests
class TestReviewModel(TestCase):
    def setUp(self):
        movie = MovieInformationModel.objects.create(movie_name="Spiderman")
        UserModel.objects.create(username="Bobo", password="13579", email="bob@1234.com", first_name="Bob", last_name="Obo")
        user = UserModel.objects.get(username="Bobo")
        ReviewModel.objects.create(
            movie_id=movie,
            base_rating="9",
            plot_rating="7",
            char_rating="8",
            setting_rating="10",
            add_on_rating="9",
            removal_rating="8",
            rating_description="meh",
            reviewer_id=user
            )

    def test_review_exits(self):
        client = Client()
        response = client.get(reverse("list_of_reviews"))
        self.assertEquals(response.status_code, 200)

#Gios Test        
class TestUserModel(TestCase):
    def setUp(self):
        UserModel.objects.create(first_name="gio")

    def test_user_exists(self):
        client = Client()
        response = client.get(reverse("user"))
        self.assertEquals(response.status_code,200)

#Edgars Test
class TestEmailModel(TestCase):
    def setUp(self):
        UserModel.objects.create(email="edgarhakobyan@yahoo.com")

    def test_user_exists(self):
        client = Client()
        response = client.get(reverse("user"))
        self.assertEquals(response.status_code,200)
