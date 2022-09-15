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

<<<<<<< HEAD
#Edgars Test
class TestEmailModel(TestCase):
    def setUp(self):
        UserModel.objects.create(email="edgarhakobyan@yahoo.com")

    def test_user_exists(self):
        client = Client()
        response = client.get(reverse("user"))
        self.assertEquals(response.status_code,200)
=======

# Michael's Tests
class TestCreateMovie(TestCase):
    def setUp(self):
        MovieInformationModel.objects.create(
            movie_name="Spider-Man: Into the Spider-Verse",
	        movie_poster="/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
	        movie_director=None,
	        source_author=None,
	        imdb_score=8.4,
	        movie_synopsis="Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
	        imdb_id= "",
        )

    def test_movie_matches(self):
        movie = MovieInformationModel.objects.get(movie_name="Spider-Man: Into the Spider-Verse")
        self.assertEquals(movie, MovieInformationModel.objects.get(id=1))
>>>>>>> main
