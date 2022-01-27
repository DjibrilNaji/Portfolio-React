import {Component} from "react";
import '../../../styles/Style.css'

import TitleSP from "../../../components/StageEtProjets/TitleSP";

export default class CertifPasser extends Component {
    render() {
        return <div>
            <TitleSP title={"MES CERTIFICATIONS PASSÉES"}/>
            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <p><img src={require("../img/certif/cisco_cybersec.JPG")} className="img-fluid"
                                            alt=""
                                            style={{width: "950px", height: "550px"}}/></p>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6>Ce cours est conçu pour examiner la cybersécurité pour peu être avoir une
                                            vocation pour une
                                            spécialisation dans ce domaine ou même dans l'informatique en générale.
                                            <br/>
                                            <br/>

                                            Avec cette certification, on développe des compétences qui seront
                                            nécessaires pour :
                                            <br/>
                                        </h6>
                                    </p>
                                    <p style={{padding: "0 0 0 40px"}}>- comprendre l’importance des comportements
                                        sécurisés en ligne
                                        ;</p>
                                    <p style={{padding: "0 0 0 40px"}}>- décrire les différents types de malware et
                                        d’attaques ;</p>
                                    <p style={{padding: "0 0 0 40px"}}>- décrire les stratégies utilisées contre les
                                        attaques par les
                                        organisations.</p>

                                    <h6>Pour accéder à la page d'acceuil de cisco :</h6>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <a href="https://www.netacad.com/" target="_blank">Netacad</a>
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
                                <div className="post-thumb">
                                    <p><img src={require("../img/certif/secnum.JPG")} className="img-fluid" alt=""
                                            style={{width: "950px", height: "550px"}}/></p>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6>Voici une certification que j'ai passé l'année dernière avec ma classNamee
                                            de
                                            BTS 1.
                                            Cette certification permet de nous initier à la cybersécurité, d'approfondir
                                            nos
                                            connaissances mais aussi d'agir efficacement sur la protection de nos outils
                                            numériques</h6>
                                    </p>
                                    <br/>
                                    <br/>

                                    <h6>Pour accéder à la page d'acceuil de secnum académie :</h6>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <a href="https://secnumacademie.gouv.fr/"
                                                   target="_blank">SecNum</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="line-mf"/>

            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <p><img src={require("../img/certif/pix.JPG")} className="img-fluid" alt=""/></p>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6>
                                            Voici une certification que j'ai passé l'année dernière avec ma classNamee
                                            de
                                            BTS 2.
                                            <br/>
                                            Après avoir évalué et développé mes compétences numériques via mon profil
                                            Pix,
                                            la
                                            certification Pix me permet de les valoriser officiellement.
                                            A travers une session de certification, Pix vérifie la sincérité de notre
                                            profil
                                            et nous
                                            délivre un certificat.
                                        </h6>
                                    </p>
                                    <br/>
                                    <br/>


                                    <h6>Pour accéder à la page d'acceuil de Pix :</h6>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <a href="https://app.pix.fr/connexion" target="_blank">Pix</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="line-mf"/>

        </div>
    }
}