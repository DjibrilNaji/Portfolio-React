import {Component} from "react";
import Title from "../../components/Title";
import Veille from "../../components/Veille/Veille";
import ExemplesVeilles from "../../components/Veille/ExemplesVeilles";
import '../../styles/Style.css'

export default class VeilleTechno extends Component {
    render() {
        return <section id="VeilleTechno" className="portfolio-mf sect-pt4 route">
            <div className="container">

                <Title title={"Veille technologique"}
                       subtitle={"Mon sujet de veille est \"L'intelligence artificielle dans les transports\""}/>

                <div className="row">
                    <Veille img={require("./img/veille-mail.JPG")}
                            text={"Je reçois les mails sur une adresse créée spécialement pour la veille"}/>
                    <Veille img={require("./img/stockageVeille.JPG")}
                            text={"Je fais un résumé de l'article choisi sur un bloc note, puis je le mets au propre"}/>
                    <Veille img={require("./img/ordiGitlab.JPG")} text={"Je le stock sur gitlab et sur ma machine"}/>

                    <hr style={{width: "100%", color: "0078FF"}}/>

                    <Title  title={"Quelques exemples"}
                           subtitle={"Mon sujet de veille est \"L'intelligence artificielle dans les transports\""}/>

                    <div className="row">

                        <ExemplesVeilles img={require("./img/urbanLoop.png")}
                                         text={"L'UrbanLoop ? Un système de transport urbain, propre et entièrement automatisé."}
                                         lien={"https://www.francebleu.fr/emissions/le-blog-de-la-mobilite/l-urbanloop-un-systeme-de-transport-urbain-propre-et-entierement-automatise"}/>
                        <ExemplesVeilles img={require("./img/reconnaissanceFaciale.png")}
                                         text={"Sécurité : faut-il adopter la reconnaissance faciale systématique dans les transports ?"}
                                         lien={"https://www.marianne.net/societe/big-brother/securite-faut-il-adopter-la-reconnaissance-faciale-systematique-dans-les-transports"}/>
                        <ExemplesVeilles img={require("./img/ivreVolant.png")}
                                         text={"Et si votre voiture vérifiait que vous n'êtes pas ivre avant de vous laisser conduire ?"}
                                         lien={"https://www.fredzone.org/voiture-verifie-ivre-4434"}/>
                        <ExemplesVeilles img={require("./img/locus.png")}
                                         text={"Flottes : quand la télématique s’allie à l’intelligence artificielle"}
                                         lien={"https://strategieslogistique.com/Flottes-quand-la-telematique-s,10896"}/>
                        <ExemplesVeilles img={require("./img/taxirail.png")}
                                         text={"Un transport ferroviaire léger sauvera les petites lignes"}
                                         lien={"https://www.usinenouvelle.com/article/mobil-idees-un-transport-ferroviaire-leger-sauvera-les-petites-lignes.N1090659"}/>
                        <ExemplesVeilles img={require("./img/roboat.png")}
                                         text={"Roboat : le bateau-taxi autonome du MIT fait ses débuts à Amsterdam"}
                                         lien={"https://www.cnetfrance.fr/news/roboat-le-bateau-taxi-autonome-du-mit-fait-ses-debuts-a-amsterdam-39931521.htm"}/>
                    </div>
                </div>
            </div>
        </section>
    }
}