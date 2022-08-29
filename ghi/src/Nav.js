import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="https://i.ibb.co/cJkH3nF/Untitled-Artwork.png" height="75" width="" ></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="">Reviews</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="">Log out</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Reviews" aria-label="Search" />
                <button className="btn btn-outline-success me-2" type="submit">Search</button>
                
            </form>
            </div>
            </div>
            </nav>
        </header>
    );
}

export default Nav;