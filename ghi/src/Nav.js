import { NavLink } from "react-router-dom";
import { useToken } from "./TokenContext"
import { useState, useEffect } from "react";


function Nav() {
    let [token, , logout] = useToken()
    const [userId, setUserId] = useState()
    useEffect(() => {
        async function getUserId () {
            const payloadTokenUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/payload_token/`
                const fetchConfigToken = {
                  method: "get",
                  credentials: "include"
                }
            const tokenResponse = await fetch(payloadTokenUrl, fetchConfigToken)
            const tokenReturned = await tokenResponse.json()
            const payloadUserId = tokenReturned["id"]
            setUserId(payloadUserId)
        }
    }, [userId])
    async function logOutButton(event) {
        event.preventDefault()
        await logout()
        
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png" alt="" height="75" width="" ></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/list_of_movies">Movies</NavLink>
                    </li>
                    {token === null ? (
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                    </li>
                    ) : (
                    <>
                    <li className="nav-item">
                        <NavLink  className="nav-link"  aria-current="page" to="/APISearch">Search for Movie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={`/user/${userId}`}>My Page</NavLink>
                    </li>
                    <li className="nav-item" onClick={logOutButton}>
                        <NavLink  className="nav-link"  aria-current="page" to="">Log out</NavLink>
                    </li>
                    </>
                    )}
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Reviews" aria-label="Search" />
                <button className="btn btn-outline-primary me-2" type="submit">Search</button> 
            </form>
            </div>
            </div>
            </nav>
        </header>
    );
}

export default Nav;