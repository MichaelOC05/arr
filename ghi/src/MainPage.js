import React from "react";


function ReviewRows(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                // const movie = data.movieInformationModel;
                const review = data;
                return (
                    <div className="card mb-3" divStyle={"max-width: 540px;"}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{review.id}</h5>
                                <p className="card-text">{review.rating_description}</p>
                                <p className="card-text"><small className="text-muted">{review.movie_name}</small></p>
                            </div>
                        </div>
                        </div>
                    </div> 
                );
            })}
        </div>
    );
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleReviews: [[], [], []]
        };
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/monolith/reviews/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let review of data.Review) {
                    const detailUrl = `http://localhost:8000/monolith/reviews/${review.id}/`;
                    requests.push(fetch(detailUrl));
                }
                const responses = await Promise.all(requests);
                const sampleReviews = [[], [], []];
                let i = 0;
                for (const reviewResponse of responses) {
                    if (reviewResponse.ok) {
                        const details = await reviewResponse.json();
                        sampleReviews[i].push(details);
                        i = i + 1;
                        if (i > 2) {
                            i = 0;
                        }
                    } else {
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
            <div className="px-4 py-5 my-5 mt-0 text-center bg-danger">
            <h1 className="display-5 fw-bold">Adaptation Accuracy</h1>
                <img src="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png" width="300" height="300" /> 
            <h1 className="display-5 fw-bold">Report!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                Finally, a place where Adaptations are rated on accuracy by the viewers, for the viewers!
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                </div>
            </div>
            </div>
            <div className="container">
                <h2>Reviews from people like you...</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                {this.state.sampleReviews.map((reviewList) => {
                    console.log(this.state.sampleReviews)
                    return (
                        <ReviewRows key={reviewList.id} list={reviewList} />
                    );
                })}
                </div>
            </div>
            </>
        );
    }
}
export default MainPage;