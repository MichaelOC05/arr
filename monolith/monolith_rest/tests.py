from django.test import TestCase, Client
from django.urls import reverse
from .models import MovieInformationModel, UserModel


# Create your tests here.
class TestMovieView(TestCase):
    def setUp(self):
        MovieInformationModel.objects.create(movie_name="Spiderman")

    def test_list_movies(self):
        client = Client()
        response = client.get(reverse("list_of_movies"))
        self.assertEquals(response.status_code, 200)


class TestUserModel(TestCase):
    def setUp(self):
        UserModel.objects.create(first_name="gio")

    def test_user_exists(self):
        client = Client()
        response = client.get(reverse("user"))
        self.assertEquals(response.status_code,200)