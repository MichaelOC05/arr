from urllib import response
from django.test import TestCase, Client
from django.urls import reverse
from .models import MovieInformationModel


# Create your tests here.
class TestMovieView(TestCase):
    def setUp(self):
        MovieInformationModel.objects.create(movie_name="Spiderman")

    def test_list_movies(self):
        client = Client()
        response = client.get(reverse("list_of_movies"))
        self.assertEquals(response.status_code, 200)
