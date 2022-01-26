import {Component} from "react";
import Title from "../../components/Title";
import Box from "../../components/StageEtProjets/Box";
import '../../styles/Style.css'

export default class Certifications extends Component {
    render() {
        return <section id="certification" className="blog-mf sect-pt4 route">
            <div className="container">


                <Title title={"Certifications"}
                       subtitle={"Vous trouverez ici les certifications que j'ai passé ou que je compte passer"}/>

                <div className="row">

                    <Box img={require("./img/certifpasser.jpg")}
                         title={"Certifications passées"}
                         info={"Passées"}
                         text={"Vous trouverez ici les certifications que j'ai déjà passées."}
                         chemin={"/Passer"}/>

                    <Box img={require("./img/certifApasser.jpg")}
                         title={"Certifications/Cours à passer"}
                         info={"Non passées"}
                         text={"Vous trouverez ici les certifications ou les cours que je compte passer."}
                         chemin={"/APasser"}/>
                </div>
            </div>
        </section>

    }
}