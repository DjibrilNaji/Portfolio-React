import {Component} from "react";

export default class CentreInteretBox extends Component<{ text: any, title: any, fafa: any }> {
    render() {
        let {text} = this.props;
        let {title} = this.props;
        let {fafa} = this.props;

        return <div className="col-md-4">
            <div className="service-box">
                <div className="service-ico">
                    <span className="ico-circle"><i className={fafa}/></span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">{title}
                    </h2>
                    <p className="s-description text-center">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    }
}