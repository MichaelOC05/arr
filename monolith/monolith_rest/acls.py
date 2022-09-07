
import os
import json
import requests


import json, requests, os
from turtle import write

from monolith.monolith_rest.views import MovieInformationEncoder

# from .models import MovieInformationModel



MOVIE_KEY = os.environ["MOVIE_KEY"]
COMIC_VINE_API_KEY = os.environ["COMIC_VINE_API_KEY"]


def get_movies(movie_name):
    url = (
        "https://api.themoviedb.org/3/search/multi?api_key="
        + MOVIE_KEY
        + "&language=en-US&query="
        + movie_name
        + "&page=1&include_adult=false"
    )
    response = requests.get(url)
    content = json.loads(response.content)
    try:
        return {
            "movie_poster": content["results"][0]["poster_path"],
            "movie_synopsis": content["results"][0]["overview"],
            "imdb_score": content["results"][0]["vote_average"],
        }
    except (KeyError, IndexError):
        return {"movie_poster": None,
                "movie_synopsis": None,
                "imdb_score": None}


def get_comics(movie_name):
    url = (
        "https://comicvine.gamespot.com/api/search/?api_key="
        + COMIC_VINE_API_KEY
        + "&format=json&sort=name:asc&resources=issue&query="
        + movie_name
    )
    headers = {"User-Agent": "My User Agent 1.0"}



def get_movies(movie_name,movie_director, imdb_score, movie_synopsis, imdb_id):
    url= 'https://api.themoviedb.org/3/movie/{movie_name}?api_key={MOVIE_KEY}&language=en-US'
    content = requests.get(url)
    data = json.loads(content)
    response = requests.get(url, "movie_name")
    movie = MovieInformationEncoder.objects.create(
        movie_director,
        imdb_score,
        movie_synopsis,
        imdb_id,
        movie_poster = list(data["poster_path"][0].keys()),
    )
    return movie

    

def get_comics(movie_name):
    response = requests.get(url, headers=headers)
    print(response, "!!!!!!!!!!!!!!!")

    response = requests.get(url, headers=headers)

    content = json.loads(response.content)
    try:
        return {
            "source_cover": content["results"][0]["image"][
                "original_url"
            ]  # grabs image comic book cover

    # print(response, "!!!!!!!!!!!!!!!")

    content = json.loads(response.content)
    print(content)
    try: 
        return {"source_author": content["results"][0]["creators"],#grabs source author 
        "source_cover": content["results"][0]["image"]["icon_url"]#grabs image comic book cover

        }
    except (KeyError, IndexError):
        return {"source_author": None, "source_cover": None}
