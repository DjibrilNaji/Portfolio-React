import '../../js/main'
import test from './test.jpg'
import React, {Component} from "react";
import '../../styles/Style.css'


export default class Accueil extends Component {
    render() {
        return <div id="home" className="intro route bg-image" style={{backgroundImage: `url(${test})`}}>
            <div className="overlay-intro"/>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="intro-title mb-4">Djibril NAJI</h1>
                        <p className="intro-subtitle"><span
                            className="text-slider-items">Étudiant,BTS SIO option SLAM</span><strong
                            className="text-slider"/></p>
                    </div>
                </div>
            </div>
        </div>

    }
}
