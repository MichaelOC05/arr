## APIs

*[Movie database API](https://rapidapi.com/rapidapi/api/movie-database-alternative/)


## Create a new review

* **Method**: `POST`
* **Path**: /api/reviews

Input:

```json
{
  "Title": string,
  "Rating": string,
  "Description": string
}
```

Output:

```json
{
  "imdb id": int,
  "name": string,
  "rating": float,
  "description": string,
  "poster": string
}
```