import React from "react";
import { Link } from 'react-router-dom';


// function MovieRows(props) {
//     const url = "http://image.tmdb.org/t/p/original"
//     return (
//         <div className="col">
//             {props.list.map(data => {
//                 console.log(data)
//                 const movie = data;
//                 return (
//                     <div key={movie.id} className="card mb-3" divstyle={"max-width: 540px;"}>
//                         <div className="bg-primary bg-gradient">
//                         <div className="shadow p-4 mt-4">
//                         <div className="row g-0">
//                             <div className="col-md-4">
//                                 <img src={url + movie.movie_poster} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
//                             </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title"><u>{movie.movie_name} </u></h5>
//                                 <p className="card-text">{movie.movie_synopsis}</p>
//                                 <p className="card-text"><small className="text">{movie.director}</small></p>
//                             </div>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                     </div> 
//                 );
//             })}
//         </div>
//     );
// }


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleMovies: []
        };
    }
    
    async componentDidMount() {
        const url = `${process.env.REACT_APP_MONOLITH_HOST}/movie_info/`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let movie of data.Movie_Info) {
                    const detailUrl = `${process.env.REACT_APP_MONOLITH_HOST}/movie_info/${movie.id}/`;
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
                console.log(sampleMovies)
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
            <div className="row row-cols-1 g-4 ">
                {this.state.sampleMovies.map(movie => {
                    const url = "http://image.tmdb.org/t/p/original"
                    return (
                        // <div className="col">
                            <div key={movie.id} className="card mb-3" divstyle={"max-width: 540px;"}>
                                {/* <div className="bg-primary bg-gradient"> */}
                                <div className="shadow p-4 mt-4">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={url + movie.movie_poster} className="img-fluid rounded-start" alt="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png"></img>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><u>{movie.movie_name} </u></h5>
                                        <p className="card-text">{movie.movie_synopsis}</p>
                                        <p className="card-text"><small className="text">{movie.movie_director}</small></p>
                                        
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
