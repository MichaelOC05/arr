import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function MovieDetailPage() {
    const [movie, setMovie] = useState({})
    const { movie_id } = useParams()
    useEffect(() => {
        async function getMovie() {
                if (movie_id !== undefined) {
                    const url = `${process.env.REACT_APP_MONOLITH_HOST}/movie_info/${movie_id}/`
                    const response = await fetch(url)
                    if (response.ok) {
                        const movie_data = await response.json()
                        setMovie(movie_data)
                }
            }
        }
        getMovie()
    }, [movie_id])
    const url = "http://image.tmdb.org/t/p/original"
    return (
        <div>
        {movie.id ? 
            <div className="card mb-3" divstyle={"max-width: 540px;"}>
                                <div className="bg-danger bg-gradient">
                                <div className="shadow p-4 mt-4">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={url + movie.movie_poster} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {movie.movie_name} 
                                        </h5>
                                        <p className="card-text">{movie.movie_synopsis}</p>
                                        <p className="card-text"><small className="text">{movie.id}</small></p>
                                        
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div> 
         : 
            <p>Please wait for page to load</p>
        }
        </div>
    )
}

export default MovieDetailPage