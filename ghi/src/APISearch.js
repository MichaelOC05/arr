import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useToken } from "./TokenContext";
import { useNavigate } from "react-router-dom";


function MovieInstance(props) {
    let navigate = useNavigate()
    let movie = props.movie
    let [movieName,setMovieName] = useState()
    useEffect(() => {
        if (movie.media_type === "tv") {
            setMovieName(movie.name)
        } else {
            setMovieName(movie.original_title)
        }
    }, [movie.media_type, movie.name, movie.original_title])
    let url = props.url
    let [moviePoster,] = useState(movie.poster_path)
    let [imdbScore,] = useState(movie.vote_average)
    let [movieSynopsis,] = useState(movie.overview)
    let { token } = useToken

    async function createMovie (){
        let data = {"movie_poster": moviePoster, "movie_name": movieName, "imdb_score": imdbScore, "movie_synopsis": movieSynopsis}
        let createUrl = "http://localhost:8000/monolith/movie_info/"
        let fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        let response = await fetch(createUrl, fetchConfig)
        console.log(response)
        if (response.ok){
            let content = await response.json()
            let movieID = content["id"]
            console.log(movieID, content)
            navigate(`/movie/${movieID}`)
        }
    }
    return(
        <div key={movie.id} className="card mb-3" divstyle={"max-width: 540px;"}>
                <div className="shadow p-4 mt-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={url + movie.poster_path} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5>{movieName}</h5>
                    </div>
                    <p>{movie.overview}</p>
                    <button className="btn btn-primary" onClick={createMovie}>Select</button>
                </div>
                </div>
                </div>
                </div>
    )
}


function APISearch(props) {
    let [movieName, setMovieName] = useState("")
    let [movieList, setMovieList] = useState([])
    let [show, setShow] = useState(false)
    
    function handleChangeMovieName(event) {
        setMovieName(event.target.value)
    }

    function handleClose () {
        setShow(false)
    }

    async function submitMovieSearchButton (event){
        event.preventDefault()
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
        let fetchConfig = {
            method: "GET"
        }
        let response = await fetch(url, fetchConfig)
        let contentAPI = await response.json()
        let results = contentAPI["results"]
        let stepNumber = 10
        if (results.length === 0) {
            setShow(true)
            return
        }
        if (results.length < 10) {
            stepNumber = results.length
        }


        let tenResults = []
        for (let step = 0; step < stepNumber; step++){
            let currentMovie = results[step]
            tenResults.push(currentMovie)
        }
        setMovieList(tenResults)

    }
return (
    <>
    <div className="bg-danger bg-gradient">
    <div className="row">
    <div className="offset-3 col-6 mt-5">
    <div className="bg-light bg-gradient">
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h1>Search for Movie</h1>
        <form id="create-user-form">
            <div className="form-floating mb-3">
            <input onChange={handleChangeMovieName} placeholder="Movie Name" required type="text" name="movieName" id="MovieName" className="form-control"  />
            <label htmlFor="name">Movie Name</label>
            </div>
            <div className="mb-3">
            </div>
            <button className="btn btn-primary" onClick={submitMovieSearchButton}>Search for Movie</button>
        </form>
        </div>
    </div>
    </div>
    </div>
</div>  
    <Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Movie not found</Modal.Title> 
        </Modal.Header>
        <Modal.Body>Please try again and be specific and make sure movie is spelt right.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
<div className="bg-danger bg-gradient">
    <div className="row row-cols-1 g-4">
        {movieList.map(movie => {
            const url = "http://image.tmdb.org/t/p/original"
            return (
                <div key={movie.id}>
                    <MovieInstance movie={movie} url={url} />
                </div>
            )
        })
        }

    </div>
</div>

</>
)
}

export default APISearch