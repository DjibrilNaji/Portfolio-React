import {Component} from "react";

export default class Projets extends Component<{ img: any, nom: any, nomSur: any, lienSujet: any, lienGit: any, langage: any, style: any }> {

    render() {
        let {img} = this.props;
        let {nom} = this.props;
        let {nomSur} = this.props;
        let {lienSujet} = this.props;
        let {lienGit} = this.props;
        let {langage} = this.props;
        let {style} = this.props;

        return <div>
            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="post-box">
                                <div className="post-thumb">
                                    <p style={{textAlign: "center"}}><img src={img} className="img-fluid" alt=""
                                                                          style={style}/></p>
                                </div>
                                <div className="post-meta">
                                    <h1 className="article-title">Projet {nom}</h1>
                                    <ul>
                                        <li>
                                            <a href={lienGit}
                                               target="_blank">{nom} sur Github</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-meta">
                                    <h1 className="article-title">Sujet projet {nom}</h1>
                                    <ul>
                                        <li>
                                            <a href={lienSujet} target="_blank">{nomSur}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="article-content">
                                    <p>
                                        <h6 style={{textAlign: "center"}}>{langage}</h6></p>
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