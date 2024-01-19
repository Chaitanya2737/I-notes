import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname)
  }, [location]);
  const HandleLogout=()=>{
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NOTEBOOK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/" ? "active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 className={`nav-link ${location.pathname==="/about"?"active":""}`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
           {!localStorage.getItem("token")?<form className="d-flex" role="search">
            
              <Link className="btn btn-outline-success mx-2" to="/login" type="submit">
                Login
              </Link>
              <Link className="btn btn-outline-success" to="/signup" type="submit">
                Signup
              </Link>
            </form>:<button className="btn btn-dark" onClick={HandleLogout}>Logout</button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
