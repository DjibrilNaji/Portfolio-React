import {Component} from "react";
import '../../../styles/Style.css'
import TitleSP from "../../../components/StageEtProjets/TitleSP";

export default class CertifAPasser extends Component {
    render() {
        return <div>
            <TitleSP title={"MES CERTIFICATIONS A PASSER"}/>
            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="post-box">
                                <h2 style={{textAlign: "center"}}>JavaScript : la formation ULTIME :</h2>
                                <h3 style={{textAlign: "center"}}>Maîtrisez Javascript grâce au cours le plus complet
                                    sur internet !
                                    Projets, exercices, quiz, ES8 et bien d’autres !</h3>
                                <br/>
                                <div className="post-thumb">
                                    <p><img
                                        src={require("../img/certif/JS_udemy.JPG")}
                                        className="img-fluid" alt=""/></p>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6>Je suis actuellement entrain de travailler sur ce cours
                                        </h6>
                                        <br/>
                                        <br/>
                                        <h5 style={{color: "blueviolet"}}> Ce que vous apprendrez : </h5>
                                        <br/>
                                        <ul>
                                            <li>les requêtes AJAX</li>
                                            <li>Comprendre comment utiliser jQuery</li>
                                            <li>Avoir tout ce qu’il faut pour maîtriser REELLEMENT JavaScript</li>
                                            <li>Ajouter, modifier, supprimer des éléments du DOM</li>
                                            <li>Les objets de JavaScript</li>
                                            <li>Faire de la programmation orientée objet avec les objets littéraux</li>
                                            <li>Faire de la programmation orientée objet avec les fonctions
                                                constructeurs
                                            </li>
                                            <li>Faire de la programmation orientée objet avec les prototypes</li>
                                            <li>Faire de la programmation orientée objet avec les classNamees</li>
                                            <li>Styliser les éléments de la page grâce à JavaScript</li>
                                            <li>Utiliser le mode strict</li>
                                            <li>Stocker des cookies</li>
                                            <li>Stocker des fichiers (sessionStorage / localStorage)</li>
                                            <li>Utiliser les API</li>
                                            <li>Récupérer le prix du bitcoin et de n’importe quelle API</li>
                                            <li>Récupérer la position géographique de l’utilisateur avec Navigator</li>
                                            <li>Faire des tableaux</li>
                                            <li>Faire des fonctions</li>
                                            <li>Faire des closures</li>
                                            <li>Faire des fonctions fléchées</li>
                                            <li>Comprendre Visuel Studio Code</li>
                                            <li>Faire des requêtes asynchrones</li>
                                            <li>Créer des variables</li>
                                            <li>Ajouter des conditions</li>
                                            <li>Initialiser des boucles</li>
                                            <li>Utiliser les boîtes de dialogue</li>
                                            <li>Et bien plus encore</li>
                                        </ul>
                                    </p>
                                    <h6>Pour accéder à ce cours :</h6>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <a href="https://www.udemy.com/course/javascript-la-formation-ultime/"
                                                   target="_blank">JS_udemy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="post-box">
                                <h2 style={{textAlign: "center"}}>PHP et MySQL : la formation ULTIME :</h2>
                                <h3 style={{textAlign: "center"}}>Créez des sites modernes avec PHP et SQL,
                                    et concevez vos premiers projets complet dans le meilleur cours sur internet !</h3>
                                <br/>
                                <div className="post-thumb">
                                    <p style={{alignItems: "center"}}><img src={require("../img/certif/PHP_udemy.JPG")}
                                                                           className="img-fluid" alt=""/></p>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6>Je suis actuellement entrain de travailler sur cette certification</h6>
                                        <br/> <br/>                                <h5 style={{color: "blueviolet;"}}>À
                                        qui ce cours s'adresse-t-il ?</h5>
                                        <br/>
                                        <ul>
                                            <li>Les étudiants en école d'informatique</li>
                                            <li>Ceux qui veulent développer leurs carrières</li>
                                            <li>Les passionnés</li>
                                            <li>Les débutants / intermédiaires / professionnels</li>
                                        </ul>
                                        <h5 style={{color: "blueviolet;"}}>Ce que vous apprendrez :</h5>
                                        <br/>
                                        <ul>
                                            <li>Vous apprendrez à utiliser toutes les nouveautés de PHP</li>
                                            <li>Vous apprendrez à utiliser des bases de données</li>
                                            <li>Vous apprendrez à sécuriser vos données</li>
                                            <li>Vous apprendrez à envoyer des emails</li>
                                            <li>Vous apprendrez à utiliser les sessions / cookies</li>
                                            <li>Vous apprendrez à envoyer / modifier / supprimer des données</li>
                                            <li>Vous apprendrez à créer / écrire / modifier / supprimer des fichiers
                                            </li>
                                            <li>Vous apprendrez à utiliser des commentaires</li>
                                            <li>Vous apprendrez à utiliser des boucles</li>
                                            <li>Vous apprendrez à utiliser des conditions</li>
                                            <li>Vous apprendrez à faire des opérations</li>
                                            <li>Vous apprendrez à utiliser des variables</li>
                                        </ul>
                                    </p>
                                        <h6>Pour accéder à ce cours :</h6>
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    <a href="https://www.udemy.com/course/php-et-mysql-la-formation-ultime/"
                                                       target="_blank">PHP_udemy</a>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
    }