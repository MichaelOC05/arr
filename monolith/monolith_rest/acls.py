import json
import requests
from dotenv import load_dotenv



def get_movies():
    url = "https://api.themoviedb.org/3/movie/76341?api_key={MOVIE_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)




def get_comics():
    url = "https://comicvine.gamespot.com/api/url/issues/?api_key={COMIC_VINE_API_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)
