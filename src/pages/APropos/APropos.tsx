import React, {Component} from "react";
import ProgressBar from "../../components/APropos/ProgressBar";
import '../../styles/Style.css'

export default class APropos extends Component {
    render() {
        return <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src={require('./moi2.JPG')}
                                                     className="img-fluid rounded b-shadow-a" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p><span className="title-s">Nom : </span> <span>Djibril Naji</span></p>
                                                <p><span className="title-s">Profil : </span> <span>Etudiant</span></p>
                                                <p><span className="title-s">Email : </span>
                                                    <span>najidjibril@gmail.com</span></p>
                                                <p><span className="title-s">Téléphone : </span>
                                                    <span>07.70.41.37.85</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Compétences (Intermédiaire - BTS)</p>

                                        <ProgressBar title={"HTML"} taille={'50%'}/>
                                        <ProgressBar title={"CSS"} taille={'30%'}/>
                                        <ProgressBar title={"PHP"} taille={'30%'}/>
                                        <ProgressBar title={"JAVASCRIPT"} taille={'25%'}/>
                                        <ProgressBar title={"PYTHON"} taille={'55%'}/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                A propos
                                            </h5>
                                        </div>
                                        <p className="lead">
                                            Je m'appelle Djibril NAJI, je suis né le 08/08/2002.
                                            <br/>
                                            J'ai eu mon Baccalauréat Scientifique au lycée
                                            Jules Ferry a Conflans Saint Honorine durant l'année 2019-2020.
                                        </p>
                                        <p className="lead">
                                            Je suis actuellement en BTS SIO (Services Informatiques aux Organisations)
                                            option SLAM (Solutions Logicielles et Applications Métiers) au lycée de
                                            l'Hautil
                                            (78) pour la promotion 2020-2022.
                                        </p>
                                        <p className="lead">
                                            Je souhaite continuer dans le domaine de l'informatique.
                                            Quel métier ? Je ne sais pas encore. Cependant, je compte continuer jusqu'au
                                            bac +5
                                            minimum.
                                        </p>
                                        <a href="../../CV.pdf">Cliquez pour télécharger</a>
                                        {/*<button className="btn btn-primary"*/}
                                        {/*        onClick={() => this.fetchData('../../CV.pdf')}>Télécharger*/}
                                        {/*    mon CV*/}
                                        {/*</button>*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}