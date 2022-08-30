import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           movie_name: [],
           base_rating: '',
           plot_rating: '',
           char_rating: '',
           setting_rating: '',
           add_on_rating: '',
           removal_rating: '',
           rating_description: '', 
        };
        this.handleMovieNameChange = this.handleMovieNameChange.bind(this);
        this.handleBaseRatingChange = this.handleBaseRatingChange.bind(this);
        this.handlePlotRatingChange = this.handlePlotRatingChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.movie_name = data.movieName;
        delete data.movieName;

        const reviewUrl = `http://localhost:8000/monolith/reviews/${review.id}`
        const fecthConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(reviewUrl, fecthConfig);
        if (response.ok) {
            const newReview = await response.json()
            console.log(newReview)
            const cleared = {
                movie_name: '',
                base_rating: '',
                plot_rating: '',
                char_rating: '',
                setting_rating: '',
                add_on_rating: '',
                removal_rating: '',
                rating_description: '',
            };
            this.setState(cleared)
        }
    }



}



export default ReviewForm;