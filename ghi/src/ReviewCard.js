import React from "react";

function ReviewCard(props) {
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.user.name}: {props.movie.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.userscore}</h6>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}

export default ReviewCard