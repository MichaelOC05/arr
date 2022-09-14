import React from "react";
import { Link } from 'react-router-dom';
import { useToken } from "./TokenContext";

function UserGreeting(props) {
    return <p>Click Below</p>;
}

function NonUserGreeting(props) {
    return <p>You need to Login or Create an Account</p>;
}

function Greeting(props) {
    let [token] = useToken()
    let isLoggedIn = token
    if (isLoggedIn !== null) {
        return <UserGreeting />
    }
    return <NonUserGreeting />
}

function HowToReview(props) {
    const [token] = useToken()
    const isLoggedIn = token

        let button;
        if (isLoggedIn !== null) {
            button = <Link to="/list_of_movies" className="btn btn-primary btn-lg px-4 gap-3">Write a Review</Link>
        } else {
            button = <Link to="/login" className="btn btn-primary btn-lg px-4 gap-3">Login</Link>
        }
        return (
            <>
                <div className="px-4 py-5 my-5 mt-0 text-center bg-danger bg-gradient">
                <h1 className="display-5 fw-bold">How To Write A Review</h1>
                    <img src="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png" alt="" width="200" height="200" /> 
                <div className="col-lg-10 mx-auto">
                    <p className="lead mb-4">
                        Welcome to the Adaptation Accuracy Report! A website designed by people who love reading books and watching their film adaptations.
                        However, we find these adaptations to be a bit...inaccurate. Our team decided that their should be a rating system for 
                        movies and TV shows based only on the accuracy of how it compares to the source material. We also believe that the best 
                        reviewers are you, the viewers, and before you write your first review...or tenth, you should learn how to use our rubric.
                    </p>
                <h3 className="h3">The Base Rating and Rubric Rating:</h3>
                    <p className="lead mb-4">
                        The Base Rating is just your gut feeling of how accurate the movie or TV show is on a scale from one to ten. This is 
                        then compared to the Rubric Rating, where you will rate five categories of the movie or TV show from one to ten and it 
                        will then be calculated into an aveage score. Our team uses the same rubric when rating, and we believe it gives a 
                        more accuarte result. These categories are listed below.
                    </p>
                <h3 className="h3">The Plot Rating:</h3>
                    <p className="lead mb-4">
                        Is the story the same? Did the story unfold the same as it did in the source material? This is where you judge the adaptations
                        as a whole. If the movie is accurate, it should unfold from plot point to plot pint in the exact same way as the source material.
                        In most cases, the adaptation is very similar to the story but has small changes like the order of events. If it differs even a 
                        little or greatly, subtract the score from ten.  
                    </p>
                <h3 className="h3">The Character Rating:</h3>
                    <p className="lead mb-4">
                        Are the personalities the identical? Is their backstory the same? Do they have similar motives? This is where you rate the adaptation 
                        on how the character compares to the original. There are many way a charcater can be changed, and this goes for the main character, the villain,
                        or even a side character. Try judging the ensemble as a whole, and then rate it on the one to ten scale.
                    </p>
                <h3 className="h3">The Setting Rating:</h3>
                    <p className="lead mb-4">
                        Does the story take place in the same location? Same time period? This is where you rate the adaptation on where the story takes place, 
                        or places depending if the story has multiple locations. Most of the time, this is almost identical to the source material. However, other 
                        times a story is brought into the present day when the story was written in the past. Maybe a location was ommited or they changed the town 
                        name. This is where you rate the adaptation on those principles from a scale from one to ten.
                    </p>
                <h3 className="h3">The Add On Rating:</h3>
                    <p className="lead mb-4">
                        Was there additional material or elements added to the adaptation that wasn't present in the source material? This can relate to anything 
                        that was listed above. Maybe the adaptaiton added a character, or maybe a new location, or even added an entirely new story element that 
                        wasn't presented in the original. Many times things are added that were not present, and this category is where you rate those new aspects.
                    </p>
                <h3 className="h3">The Removal Rating:</h3>
                    <p className="lead mb-4">
                        Was there anything from the source material that wasn't present in the adaptation? Sometimes a character is removed from the ensemble or a major 
                        aspect of the story was left out. Many aspects can be left on the cutting room floor to make sure the movie doesn't go on for too long or a part may 
                        not be a desirable part of the story. Either way, it makes the adaptation less accurate and should be considered for the, you guessed it, one to ten scale. 
                    </p>
                <h3 className="h3">You're Ready</h3>
                    <p className="lead mb-4">
                        Now you know how to use the rubric, and once you enter in the scores you can write a reasoning or opinion in the rating description section, and it will
                        be added to the overall rubric score from all the other viewers while you keep you're personal score seperate. So go on, write a review, or create an account
                        to begin being a part of the Adaptation Accuracy Report Viewer Reviewers!
                    </p>
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                    </div>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    </div>
                </div>
                </div>
            </>
        )
}

export default HowToReview;