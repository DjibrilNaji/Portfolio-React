import {Component} from "react";
import Title from "../../components/Title";
import Box from "../../components/StageEtProjets/Box";
import '../../styles/Style.css'

export default class StagesEtProjets extends Component {
    render() {
        return (
            <section id="blog" className="blog-mf sect-pt4 route">
                <div className="container">

                    <Title title={"Stages et projets"}
                           subtitle={"Vous trouverez ici les stages et les projets effectués durant mes 2 années de BTS"}/>

                    <div className="row">
                        <Box img={require('./img/projet.png')}
                             title={"PROJETS BTS 1ère année"}
                             info={"1ère année"}
                             text={"Vous trouverez ici les projets que j'ai pu faire en première année de BTS SIO"}
                             chemin={"/ProjetsBTS1"}/>

                        <Box img={require("./img/stage.png")}
                             title={"MES STAGES"}
                             info={"Stages"}
                             text={"Vous trouverez ici les 2 stages que j'ai pu faire lors de mes 2 années de BTS SIO"}
                             chemin={"/Stages"}/>

                        <Box img={require("./img/projet2.jpg")}
                             title={"PROJETS BTS 2ème année"}
                             info={"2ème année"}
                             text={"Vous trouverez ici les projets que j'ai pu faire en deuxième année de BTS SIO"}
                             chemin={"/ProjetsBTS2"}/>
                    </div>
                </div>
            </section>
        )
    }
}