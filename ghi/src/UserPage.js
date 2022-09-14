import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Cookies from "universal-cookie";

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
                                <p className="card-text"><small className="text">Your Rubric Rating: {review.rubric_rating}</small></p>
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
                const url = `${process.env.REACT_APP_MONOLITH_HOST}/user/${id}/`
                const response = await fetch(url)
                if (response.ok) {
                    const user_data = await response.json()
                    setUser(user_data)
                }
            }
        }
        getUser()
    }, [id])
    return (
        <div className="card mb-3" divstyle={"max-width: 540px;"}>
        <div className="bg-danger bg-gradient">
        <div className="shadow p-4 mt-4">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={user.profile_pic} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
            </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><u>{user.username} </u></h5>
                <p className="card-text">{user.profile_description}</p>
                <p className="card-text"><small className="text">{user.id}</small></p>
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
        const url = `${process.env.REACT_APP_MONOLITH_HOST}/reviews/`;
        let submitCookie = new Cookies()
        let userId = Number(submitCookie.get("userId"))
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let review of data.Review) {
                    const detailUrl = `${process.env.REACT_APP_MONOLITH_HOST}/reviews/${review.id}/`;
                    requests.push(fetch(detailUrl));
                }
                const responses = await Promise.all(requests);
                const sampleReviews = [[], []];
                let i = 0;
                for (const reviewResponse of responses) {
                    if (reviewResponse.ok) {
                        const details = await reviewResponse.json();
                        if (details.reviewer_id.id === userId) {
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