import {Component} from "react";

export default class ExemplesVeilles extends Component<{ img: any, text: any, lien: any }> {
    render() {
        let {img} = this.props;
        let {text} = this.props;
        let {lien} = this.props;

        return <div className="col-md-4">
            <div className="work-box">
                <a href={img} data-lightbox="gallery-mf">
                    <div className="work-img">
                        <img src={img} alt="" className="img-fluid"/>
                    </div>
                    <div className="work-content">
                        <div className="row">
                            <div className="col-sm">
                                <h2 style={{textAlign: "center"}}className="w-title">
                                    {text}
                                </h2>
                                <div className="socials">
                                    <ul>
                                        <li>
                                            <a href={lien}
                                               target="_blank"><span className="ico-circle"><i
                                                className="fa fa-google"/></span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{textAlign: "center"}} className="w-more">
                                    <span className="w-ctegory">Exemple</span> / <span
                                    className="w-date">Google Alerts</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    }
}