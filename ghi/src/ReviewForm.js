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
        this.handleCharRatingChange = this.handleCharRatingChange.bind(this);
        this.handleSettingRatingChange = this.handleSettingRatingChange.bind(this);
        this.handleAddOnRatingChange = this.handleAddOnRatingChange.bind(this);
        this.handleRemovalRatingChange = this.handleRemovalRatingChange.bind(this);
        this.handleRatingDescriptionChange = this.handleRatingDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.movie_name = data.movieName;
        delete data.movieName;

        const locationUrl = `http://localhost:8000/monolith/review/`
        const fecthConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fecthConfig);
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

    handleMovieNameChange(event) {
        const value = event.target.value;
        this.setState({ movie_name: value});
    }

    handleBaseRatingChange(event) {
        const value = event.target.value;
        this.setState({ base_rating: value});
    }

    handlePlotRatingChange(event) {
        const value = event.target.value;
        this.setState({ plot_rating: value});
    }

    handleCharRatingChange(event) {
        const value = event.target.value;
        this.setState({ char_rating: value});
    }

    handleSettingRatingChange(event) {
        const value = event.target.value;
        this.setState({ setting_rating: value});
    }

    handleAddOnRatingChange(event) {
        const value = event.target.value;
        this.setState({ add_on_rating: value});
    }

    handleRemovalRatingChange(event) {
        const value = event.target.value;
        this.setState({ removal_rating: value});
    }

    handleRatingDescriptionChange(event) {
        const value = event.target.value;
        this.setState({ rating_description: value});
    }

    render() {
        return (
            <div className="bg-danger bg-gradient">
            <div className="row">
            <div className="offset-3 col-6 mt-5">
              <div className="bg-light bg-gradient">
              <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h1>Create a Review</h1>
                <form onSubmit={this.handleSubmit} id="create-review-form">
                  <div className="mb-3">
                    {/* <select value={this.state.movieName} onChange={this.handleMovieNameChange} required name="movie" id="movie" className="form-select">
                      <option value="">Choose a Film/TV Show</option>
                      {this.state.reviews.map(review => {
                            return (
                            <option key={review.href} value={review.href}>
                                {review.movie_id.movie_name}
                            </option>
                            );
                        })}
                    </select> */}
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.baseRating} onChange={this.handleBaseRatingChange} placeholder="Base rating" required type="number" min="1" max="10" name="base_rating" id="base_rating" className="form-control"/>
                    <label htmlFor="base_rating">Base Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.plotRating} onChange={this.handlePlotRatingChange} placeholder="Plot Rating" required type="number" min="1" max="10" name="plot_rating" id="plot_rating" className="form-control"/>
                    <label htmlFor="plot_rating">Plot Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.charRating} onChange={this.handleCharRatingChange} placeholder="Character Rating" required type="number" min="1" max="10" name="char_rating" id="char_rating" className="form-control"/>
                    <label htmlFor="char_rating">Character Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.settingRating} onChange={this.handleSettingRatingChange} placeholder="Setting Rating" type="number" min="1" max="10" name="setting_rating" id="setting_rating" className="form-control"/>
                    <label htmlFor="setting_rating">Setting Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.addOnRating} onChange={this.handleAddOnRatingChange} placeholder="Add On Rating" type="number" min="1" max="10" name="add_on_rating" id="add_on_rating" className="form-control"/>
                    <label htmlFor="add_on_rating">Add On Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.removalRating} onChange={this.handleRemovalRatingChange} placeholder="Removal Rating" type="number" min="1" max="10" name="removal_rating" id="removal_rating" className="form-control"/>
                    <label htmlFor="removal_rating">Removal Rating</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={this.state.ratingDescription} onChange={this.handleRatingDescriptionChange} placeholder="Rating Description" type="text" name="rating_description" id="rating_description" className="form-control"/>
                    <label htmlFor="rating_description">Rating Description</label>
                  </div>
                  <button className="btn btn-primary">Review</button>
                </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      }


}



export default ReviewForm;