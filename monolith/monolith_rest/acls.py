import json, requests, os
from turtle import write

from monolith.monolith_rest.models import MovieInformationModel


MOVIE_KEY = os.environ["MOVIE_KEY"]
COMIC_VINE_API_KEY = os.environ["COMIC_VINE_API_KEY"]


def get_movies(movie_name,movie_director, imdb_score, movie_synopsis, imdb_id):
    url= 'https://api.themoviedb.org/3/movie/{movie_name}?api_key={MOVIE_KEY}&language=en-US'
    content = requests.get(url)
    data = json.loads(content)
    response = requests.get(url, "movie_name")
    movie = MovieInformationModel.objects.create(
        movie_director,
        imdb_score,
        movie_synopsis,
        imdb_id,
        movie_poster = list(data["poster_path"][0].keys()),
    )
    return movie

    