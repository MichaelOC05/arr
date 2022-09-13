import os
import json
import requests


MOVIE_KEY = os.environ["MOVIE_KEY"]


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


# def get_comics(movie_name):
#     url = (
#         "https://comicvine.gamespot.com/api/search/?api_key="
#         + COMIC_VINE_API_KEY
#         + "&format=json&sort=name:asc&resources=issue&query="
#         + movie_name
#     )
#     headers = {"User-Agent": "My User Agent 1.0"}
#     response = requests.get(url, headers=headers)
#     content = json.loads(response.content)
#     try:
#         return {
#             "source_cover": content["results"][0]["image"][
#                 "original_url"
#             ]  # grabs image comic book cover
#         }
#     except (KeyError, IndexError):
#         return {"source_author": None, "source_cover": None}
