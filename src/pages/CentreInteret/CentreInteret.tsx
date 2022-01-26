import {Component} from "react";
import Title from "../../components/Title";
import CentreInteretBox from "../../components/CentreInteret/CentreInteretBox";
import '../../styles/Style.css'

export default class CentreInteret extends Component {
    render() {
        return (
            <div>

                <div style={{marginTop: "150px"}} className="container">

                    <Title title={"CENTRE D'INTERÊT"} subtitle={"Voici les 3 piliers qui composent ma vie."}/>

                </div>
                <div className="row">
                    <CentreInteretBox
                        text={"Au début ce n'était que pour mes études, et aujourd'hui c'est ce qui compose la plupart de mon temps.Que ce soit en cours, en rentrant des cours, les week-ends... L'informatique est devenue une de mes passions (même si le niveau est encore débutant)."}
                        title={"Programmation informatique"}
                        fafa={"fa fa-laptop"}/>
                    <CentreInteretBox
                        text={"Les jeux vidéos, qui font aussi partit de mes passions, permettent de développer un bon esprit d'équipe. Je joue surtout aux jeux vidéos pour me surpasser et être le meilleur joueur, toujours s'améliorer de jour en jour comme pour l'informatique (Pratiquer pour progresser)"}
                        title={"Jeux videos"}
                        fafa={"fa fa-gamepad"}/>
                    <CentreInteretBox
                        text={"Les voyages me changent de mon quotidien et m'enrichissent personnellement. Je souhaite partir à la découverte du monde et assouvir ma soif de curiosité. J'aime me sentir étranger... C'est un plaisir de la vie dont je ne me passerai pour rien au monde !"}
                        title={"Voyages"}
                        fafa={"fa fa-plane"}/>
                </div>
            </div>
        )
    }
}