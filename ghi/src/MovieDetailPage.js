import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateReview(props) {
    const [show, setShow] = useState(false);
    const movie = props.movie
    const [movieId,] = useState(movie.id)
    const [baseRating, setBaseRating] = useState("")
    const [plotRating, setPlotRating] = useState("")
    const [settingRating, setSettingRating] = useState("")
    const [characterRating, setCharacterRating] = useState("")
    const [addOnRating, setAddOnRating] = useState("")
    const [removalRating, setRemovalRating] = useState("")
    const [ratingDescription, setRatingDescription] = useState("")
    // const [userId, setUserId] = useState(movie.)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const navigate = useNavigate()


    function handleBaseRating(e) {
        setBaseRating(e.target.value)
    }

    function handlePlotRating(e) {
        setPlotRating(e.target.value)
    }

    function handleSettingRating(e) {
        setSettingRating(e.target.value)
    }

    function handleCharacterRating(e) {
        setCharacterRating(e.target.value)
    }

    function handleAddOnRating(e) {
        setAddOnRating(e.target.value)
    }

    function handleRemovalRating(e) {
        setRemovalRating(e.target.value)
    }

    function handleRatingDescription(e) {
        setRatingDescription(e.target.value)
    }

    async function submitButton(event) {
        event.preventDefault();
        let locationUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/reviews/`
        const payloadTokenUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/payload_token/`
        const fetchConfigToken = {
          method: "get",
          credentials: "include"
        }
        const tokenResponse = await fetch(payloadTokenUrl, fetchConfigToken)
        const tokenReturned = await tokenResponse.json()
        const payloadUserId = tokenReturned["id"]
        let data = {
            "movie_id": movieId, 
            "base_rating": baseRating, 
            "plot_rating": plotRating, 
            "char_rating": characterRating, 
            "setting_rating": settingRating, 
            "add_on_rating": addOnRating, 
            "removal_rating": removalRating, 
            "rating_description": ratingDescription, 
            "reviewer_id": payloadUserId
            }
        console.log(data)
        let fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig)
        const movieUrl = `${process.env.REACT_APP_LOCAL_HOST}/movie_info/${movieId}/`
        const fetchConfigMovie = {
          method: "put",
        }
        const movieResponse = await fetch(movieUrl, fetchConfigMovie)
        console.log(response)
        console.log("movieResponse", movieResponse)
        if (response.ok) {
            const newReview = await response.json()
            console.log(newReview)
            handleClose()
            // navigate("/list_of_movies")
            // const cleared = {
            //     id: '',
            //     base_rating: '',
            //     plot_rating: '',
            //     char_rating: '',
            //     setting_rating: '',
            //     add_on_rating: '',
            //     removal_rating: '',
            //     rating_description: '',
            // }
            // setState(cleared)
        }
        else {
            console.log("Review not created")
        }
    }


    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create Review
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Review for {movie.movie_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handleBaseRating}>
                <Form.Label>Base Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Base Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handlePlotRating}>
                <Form.Label>Plot Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Plot Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handleSettingRating}>
                <Form.Label>Setting Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Setting Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handleCharacterRating}>
                <Form.Label>Character Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Character Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handleAddOnRating}>
                <Form.Label>Add On Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Add On Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={handleRemovalRating}>
                <Form.Label>Removal Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Removal Rating"
                  min= "1"
                  max="10"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleRatingDescription}
              >
                <Form.Label>Rating Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitButton}>
              Save Review
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

function MovieDetailPage() {
    const [movie, setMovie] = useState({})
    const { movie_id } = useParams()
    useEffect(() => {
        async function getMovie() {
                if (movie_id !== undefined) {
                    const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/movie_info/${movie_id}/`
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
                                        <p className="card-text"><strong>IMDB Score: {movie.imdb_score}</strong></p>
                                        <p className="card-text"><strong>Base Rating: {movie.base_rating}</strong></p>
                                        <p className="card-text"><strong>Rubric Rating: {movie.rubric_rating}</strong></p>
                                        <figcaption className="blockquote-footer text-black">Plot Rating: {movie.plot_rating}</figcaption>
                                        <figcaption className="blockquote-footer text-black">Character Rating: {movie.char_rating}</figcaption>
                                        <figcaption className="blockquote-footer text-black">Setting Rating: {movie.setting_rating}</figcaption>
                                        <figcaption className="blockquote-footer text-black">Removal Rating: {movie.removal_rating}</figcaption>
                                        <figcaption className="blockquote-footer text-black">Add On Rating: {movie.add_on_rating}</figcaption>
                                        <CreateReview movie={movie} />
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