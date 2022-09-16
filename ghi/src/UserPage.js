import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UpdateUser(props) {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({})
    const {id} = useParams()
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [profilePicture, setProfilePicture] = useState(user.profile_picture)
    const [profileBio, setProfileBio] = useState(user.profile_bio)
    const [payloadUserId, setPayloadUserId] = useState()
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function autofill() {
            const payloadTokenUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/payload_token/`
            const fetchConfigToken = {
              method: "get",
              credentials: "include"
            }
            const tokenResponse = await fetch(payloadTokenUrl, fetchConfigToken)
            const tokenReturned = await tokenResponse.json()
            const payloadUserId = tokenReturned["id"]
            setPayloadUserId(payloadUserId)
            if (id !== undefined) {
                const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/user/${id}/`
                const response = await fetch(url)
                if (response.ok) {
                    const user_data = await response.json()
                    setUser(user_data)
                }
            }
        }
        autofill()
    }, [id, user])

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleProfilePicture(e) {
        setProfilePicture(e.target.value)
    }

    function handleProfileBio(e) {
        setProfileBio(e.target.value)
    }

    async function submitButton(event) {
        event.preventDefault();
        let locationUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/user/${id}`
        let data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "profile_picture": profilePicture,
            "profile_bio": profileBio, 
        }
        let fetchConfigUser = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const userResponse = await fetch(locationUrl, fetchConfigUser)
        console.log("user", userResponse)
        if (userResponse.ok) {
            const updateProfile = await userResponse.json()
            console.log(updateProfile)
            if (id !== undefined) {
                const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/user/${id}/`
                const response = await fetch(url)
                if (response.ok) {
                    const user_data = await response.json()             
                    setUser(user_data)
                }
            }
            handleClose()
        }
        else {
            console.log("profile not updated")
        }
    }
    if (user.id == payloadUserId) {
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Update My Profile
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>All Fields Must Be Filled</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleFirstName}
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" defaultValue={user.first_name}/>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleLastName}
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" defaultValue={user.last_name}/>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleEmail}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" defaultValue={user.email}/>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleProfilePicture}
              >
                <Form.Label>Profile Picture URL</Form.Label>
                <Form.Control as="textarea" defaultValue={user.profile_picture}/>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                onChange={handleProfileBio}
              >
                <Form.Label>Your Bio</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={user.profile_bio}/>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitButton}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
    }
}

function ReviewRows(props) {
    const url = "http://image.tmdb.org/t/p/original"
    return (
        <div className="col">
            {props.list.map(data => {
                const review = data;
                return (
                    <div key={review.id} className="card mb-3" divstyle={"max-width: 540px;"}>
                        <div className="bg-primary bg-gradient">
                        <div className="shadow p-4 mt-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={url + review.movie_id.movie_poster} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><u>{review.movie_id.movie_name} </u></h5>
                                <p className="card-text">{review.rating_description}</p>
                                <p className="card-text"><small className="text">Your Base Rating: {review.base_rating}</small></p>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div> 
                );
            })}
        </div>
    );
}

function UserInformation(props) {
    const [user, setUser] = useState({})
    const {id} = useParams()
    useEffect(() => {
        async function getUser() {
            if (id !== undefined) {
                const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/user/${id}/`
                const response = await fetch(url)
                if (response.ok) {
                    const user_data = await response.json()
                    setUser(user_data)
                }
            }
        }
        getUser()
    }, [id,])
    return (
        <div className="card mb-3" divstyle={"max-width: 540px;"}>
        <div className="bg-danger bg-gradient">
        <div className="shadow p-4 mt-4">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={user.profile_picture} className="img-fluid rounded-start" alt="Your Profile Pic Can Be Here"></img>
            </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><u>{user.username} </u></h5>
                <p className="card-text">My Name: {user.first_name} {user.last_name}</p>
                <p className="card-text">My Email: {user.email}</p>
                <p className="card-text">{user.profile_bio}</p>
                <p className="card-text"><small className="text">User ID: {user.id}</small></p>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    )
    
}

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleReviews: [[], []]
        };
    }

    async componentDidMount() {
        const payloadTokenUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/payload_token/`
                const fetchConfigToken = {
                  method: "get",
                  credentials: "include"
                }
            const tokenResponse = await fetch(payloadTokenUrl, fetchConfigToken)
            const tokenReturned = await tokenResponse.json()
            const payloadUserId = tokenReturned["id"]
        const url = `${process.env.REACT_APP_LOCAL_HOST}monolith/reviews/`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let review of data.Review) {
                    const detailUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/reviews/${review.id}/`;
                    requests.push(fetch(detailUrl));
                }
                const responses = await Promise.all(requests);
                const sampleReviews = [[], []];
                let i = 0;
                for (const reviewResponse of responses) {
                    if (reviewResponse.ok) {
                        const details = await reviewResponse.json();
                        if (details.reviewer_id.id === payloadUserId) {
                        sampleReviews[i].push(details);
                        i = i + 1;
                        if (i > 1) {
                            i = 0;
                        }
                    }} else {
                        console.error(reviewResponse);
                    }
                }
                this.setState({sampleReviews: sampleReviews});
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
            <UserInformation />
            <div className="d-grid gap-2 col-6 mx-auto">
            <UpdateUser />
            </div>
            <div className="container">
                <h2>Your Reviews</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                {this.state.sampleReviews.map((reviewList, index) => {
                    return (
                        <ReviewRows key={index} list={reviewList} />
                    );
                })}
                </div>
            </div>
            </>
        );
    }
}
export default UserPage;