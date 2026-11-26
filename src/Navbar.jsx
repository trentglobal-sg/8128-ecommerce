import { useState } from "react";
// useLocation is a hook from wouter
// when we want to share data and function across multiple JS files, we use modules
// when we want to share functions across multiple components, we use hooks
// when we call it, it will return the current URL of the web browser
import { Link, useLocation } from "wouter";

export default function Navbar() {

    const [showNavbar, setShowNavBar] = useState(false);

    // get the current location (i.e the current path of the browser)
    const [location] = useLocation();

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">E-Shop</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={()=>{
                    setShowNavBar(!showNavbar)
                }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/" ? "active": ""}`} aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/products" ? "active":""}`} href="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/register" ? "active": ""}`} href="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}