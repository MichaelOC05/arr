import React, {useState} from "react";
import { Link } from 'react-router-dom';
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
        const payloadTokenUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/payload_token/`
        const fetchConfigToken = {
          method: "get",
          credentials: "include"
        }
        const tokenResponse = await fetch(payloadTokenUrl, fetchConfigToken)
        const tokenReturned = await tokenResponse.json()
        const payloadUserId = tokenReturned["id"]
        let locationUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/reviews/`       
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
        let fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig)
        const movieUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/movie_info/${movieId}/`
        const fetchConfigMovie = {
          method: "put",
        }
        await fetch(movieUrl, fetchConfigMovie)
        if (response.ok) {
            handleClose()
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


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleMovies: []
        };
    }
    
    async componentDidMount() {
        const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/movie_info/`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let movie of data.Movie_Info) {
                    const detailUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/movie_info/${movie.id}/`;
                    requests.push(fetch(detailUrl));
                }
                const responses = await Promise.all(requests);
                const sampleMovies = [];
                
                for (const reviewResponse of responses) {
                    if (reviewResponse.ok) {
                        const details = await reviewResponse.json();
                        sampleMovies.push(details);
                    } else {
                        console.error(reviewResponse);
                    }
                }
                this.setState({sampleMovies: sampleMovies});
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
            <div className="bg-danger bg-gradient">
            <div className="px-4 py-5 my-5 mt-0 text-center">
            <h6 className="display-5 fw-bold">Adaptation Accuracy</h6>
                <img src="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png" alt="" width="200" height="200" /> 
            <h6 className="display-5 fw-bold">Report!</h6>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                Find Movies and TV shows to review below!
                </p>
                <Link to="/how_to_review" className="btn btn-primary btn-lg px-4 gap-3">How to Write a Review</Link>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                </div>
            </div>
            </div>
            <div className="row-cols-1 g-4">
                {this.state.sampleMovies.map(movie => {
                    const url = "http://image.tmdb.org/t/p/original"
                    return (
                        // <div className="col">
                        
                            <div key={movie.id} className="card mb-3 w-50 mx-auto" divstyle={"max-width: 540px;"}>
                                {/* <div className="bg-primary bg-gradient"> */}
                                <div className="shadow p-4 mt-4">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={url + movie.movie_poster} className="img-fluid rounded-start" divstyle={"width:100px;height:200px;"} alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={`/movie/${movie.id}`}><u>{movie.movie_name} </u></Link>
                                        </h5>
                                        <p className="card-text">{movie.movie_synopsis}</p>
                                        <p className="card-text"><small className="text">{movie.id}</small></p>
                                        <CreateReview movie={movie} />
                                        {/* <Link to="/create_review" className="btn btn-primary btn-lg px-4 gap-3">How to Write a Review</Link> */}
                                    </div>
                                </div>
                                </div>
                                </div>
                                {/* </div> */}
                            </div> 
                              
                        // </div>
                        
                    );
                })}
                
                </div>
                </div>
            </>
        )
}
}
export default MovieList;
