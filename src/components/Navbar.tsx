import React, {Component} from "react";
import '../styles/Style.css'
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav style={{backgroundColor: "#000000"}} className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a  className="navbar-brand js-scroll" href="/">Portfolio</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarDefault"
                            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">

                            <NavLink to={"/"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll">Accueil</a>
                                </li>
                            </NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? 'underlineNavbar' : 'underlineNavbar'
                            } end to={"/APropos"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll"> A Propos</a>
                                </li>
                            </NavLink>

                            <NavLink to={"/CentreInteret"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll"> Centre d'interêt</a>
                                </li>
                            </NavLink>

                            <NavLink to={"/Veille"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll">Veille</a>
                                </li>
                            </NavLink>

                            <NavLink to={"/StagesEtProjets"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll"> Stages et Projets</a>
                                </li>
                            </NavLink>

                            <NavLink to={"/Certifications"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll"> Certifications </a>
                                </li>
                            </NavLink>

                            <NavLink to={"/Contact"}>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll"> Contact</a>
                                </li>
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </nav>

        )
    }
}

