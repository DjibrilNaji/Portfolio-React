import {Component} from "react";
import overlay from './overlay-bg.jpg'
import '../../../styles/Style.css'

export default class Stages extends Component {
    render() {
        return <div>
            <div className="intro intro-single route bg-image" style={{backgroundImage: `url(${overlay})`}}>
            <div className="overlay-mf"/>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h2 className="intro-title mb-4">Mes stages</h2>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog-wrapper sect-pt4" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="post-box">
                            <div className="post-thumb">
                                <img src={require("../img/API.jpg")} className="img-fluid" alt=""/>
                            </div>
                            <div className="post-meta">
                                <h1 className="article-title">Stage passé en première année de BTS SIO </h1>
                                <ul>
                                    <li>
                                        <span className="ion-ios-person"/>
                                        <a href="https://www.linkedin.com/in/saad-hssaini/" target="_blank">Saad
                                            Hssaini</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="article-content">
                                <p>
                                    Lors de mon stage, j'avais la possibilité de choisir mes horaires, tant que
                                    j'atteignais mes objectifs.
                                    <p>
                                        Les objectifs lors de mon stage étaient :
                                        <br/>
                                        - le développement d’une API REST avec une base de donnée, un framework ( Spring
                                        )
                                        et avec les pratiques clean code comme TDD (API est un acronyme anglais qui
                                        signifie
                                        « Application Programming Interface », que l'on traduit par interface de
                                        programmation d'application)
                                        <br/>
                                        - puis en fonction de mon avancée nous irons au développement d’un front end
                                        avec un
                                        framework ( react ou angular )
                                        <br/>
                                        <i>Ce qui n'a pas pu se faire, car peu de temps</i>
                                    </p>
                                    Tout cela pour me former et m’amener à devenir autonome pour que je puisse réaliser
                                    des besoins
                                    métier sans aide à la fin du stage
                                </p>
                                <p>
                                    <strong>
                                        Voici un lien vers mon GitLab où j'ai quelques images des outils que j'utilisais
                                        ainsi que le code de l'API :
                                    </strong>
                                    <div className="post-meta">
                                        <a href="https://gitlab.com/Djibrilnaji/NAJI/-/tree/master/AP/TravauxStage"
                                           target="_blank" style={{color: "blue"}}>Mon Gitlab</a>
                                    </div>
                                    <br/>
                                </p>

                                <blockquote className="blockquote">
                                    <p className="mb-0">Voici le mail envoyé à mon professeur par le gérant de
                                        l'entreprise où j'ai effectué mon stage.</p>
                                </blockquote>

                                <p>
                                    {/*<i>*/}
                                    'Monsieur,
                                </p>

                                <p><i>
                                    J’ai eu l’occasion de superviser le travail de Djibril NAJI lors de son stage dans
                                    le cadre de son cursus BTS SIO, pour une durée de 6 semaines du 25 mai au 03 juillet
                                    2021.
                                    <br/>
                                    Cette période a été l’occasion pour Djibril de travailler, durant une grande partie
                                    de
                                    son stage, en autonomie.
                                    <br/>
                                    Le travail de Djibril m’a aussi permis de juger de ses qualités de futur développeur
                                    au sein
                                    d’un environnement professionnel.
                                    <br/>
                                    Djibril a su s’adapter rapidement à l’environnement très spécifique du travail en
                                    distanciel.
                                    <br/>
                                    J'ai pu rapidement estimer sa rigueur et sa motivation qui ont fait de lui un
                                    stagiaire efficace.
                                    De plus, j'ai apprécié son assiduité et sa ponctualité aux rendez-vous quotidiens,
                                    prévus par Skype, afin de faire un point sur les difficultés rencontrées et de
                                    travailler sur les
                                    différentes solutions ensemble.
                                    <br/>
                                    Toutes ces raisons me font croire que Djibril sera un élément moteur d’un BTS 2 dans
                                    lequel il
                                    s’intégrera rapidement au sein d’équipes de travail, mais aussi au sein de la vie
                                    d’un groupe
                                    d’étudiants curieux et motivés
                                    <br/>

                                    Djibril avait pour objectif de réaliser une api pour la gestion d'une Todo liste,
                                    que j'utiliserai dans mes formations d'étudiants futurs comme exercices
                                    (comme chez openclassroom, mes étudiants développeurs devront apprendre à utiliser
                                    une api,
                                    celle développée par Djibril).
                                    <br/>
                                    Pour cela il a dû monter en compétences sur le framework Spring,
                                    mongodb une base de données non relationnel et les standards api rest.
                                    Il a dû mettre en place son environnement de développement (comme intelj, mongo,
                                    postman).
                                    <br/>
                                    Je ne doute pas des capacités de Djibril qui feront de lui, j’en suis sûr, un élève
                                    brillant.
                                    <br/>
                                    <br/>
                                    Saad HSSAINI
                                    <br/>
                                    Gérant'
                                </i>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

    }
}