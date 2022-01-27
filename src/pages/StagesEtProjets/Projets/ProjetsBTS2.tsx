import {Component} from "react";
import overlay from './overlay-bg.jpg'
import '../../../styles/Style.css'
import Projets from "../../../components/Projets/Projets";

export default class projetsBTS2 extends Component {
    render() {
        return <div>
            <div className="intro intro-single route bg-image" style={{backgroundImage: `url(${overlay})`}}>
                <div className="overlay-mf"/>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="intro-title mb-4">Mes projets de BTS</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Projets img={require("../Projets/projet/finder.png")}
                     style={{width: "150px", height: "200px"}}
                     nom={"Finder"}
                     nomSur={"Finder sur Frebourg.es"}
                     lienSujet={"https://frebourg.es/?s=finder"}
                     lienGit={"https://gitlab.com/Djibrilnaji/NAJI/-/tree/master/finder"}
                     langage={"Finder est une API qui utilise PHP, Slim, Python, Flask, JS, Express, et Django"}/>

            <Projets img={require("../Projets/projet/otelo.png")}
                     style={{width: "150px", height: "200px"}}
                     nom={"Otelo"}
                     nomSur={"Otelo sur Frebourg.es"}
                     lienSujet={"https://frebourg.es/?s=otelo"}
                     lienGit={"http://oteloprojet.herokuapp.com/accueil"}
                     langage={"Otelo utilise PHP Laravel et Chatbot"}/>

            <Projets img={require("../Projets/projet/who.png")}
                     style={{width: "150px", height: "200px"}}
                     nom={"WHO"}
                     nomSur={"Who sur SLAM2_java"}
                     lienSujet={"\"https://gitlab.com/HAUTIL-2020-2022/slam2_java\""}
                     lienGit={""}
                     langage={"Easyline utilise Java et C++"}/>

        </div>
    }
}