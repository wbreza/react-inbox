import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Application</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/inbox">Inbox</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;