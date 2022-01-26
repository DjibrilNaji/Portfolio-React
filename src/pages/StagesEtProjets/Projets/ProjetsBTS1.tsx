import {Component} from "react";
import '../../../styles/Style.css'
import Projets from "../../../components/Projets/Projets";
import TitleSP from "../../../components/StageEtProjets/TitleSP";

export default class projetsBTS1 extends Component {
    render() {
        return <div>

            <TitleSP title={"MES PROJETS DE BTS"}/>
            <Projets img={require("../Projets/projet/fish.png")}
                     style={{width: "150px", height: "200px"}}
                     nom={"Fish"}
                     nomSur={"Fish sur Frebourg.es"}
                     lienSujet={"https://frebourg.es/?s=fish"}
                     lienGit={"https://gitlab.com/Djibrilnaji/NAJI/-/tree/master/B1_Python"}
                     langage={"Fish utilise Python"}/>

            <Projets img={require("../Projets/projet/warcraft.png")}
                     style={{width: "300px", height: "200px"}}
                     nom={"Warcraft"}
                     nomSur={"Warcraft sur Frebourg.es"}
                     lienSujet={"https://frebourg.es/?s=warcraft"}
                     lienGit={"https://gitlab.com/Djibrilnaji/NAJI/-/tree/master/warcraft"}
                     langage={"Warcraft utilise SQL"}/>

            <Projets img={require("../Projets/projet/easyline.png")}
                     style={{width: "250px", height: "200px"}}
                     nom={"Easyline"}
                     nomSur={"Easyline sur Frebourg.es"}
                     lienSujet={"https://frebourg.es/?s=easyline"}
                     lienGit={"https://gitlab.com/Djibrilnaji/NAJI/-/tree/master/easyline"}
                     langage={"Easyline utilise Java et C++"}/>

        </div>
    }
}