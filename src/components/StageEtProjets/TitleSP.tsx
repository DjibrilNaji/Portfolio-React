import React, {Component} from "react";
import overlay from "../../pages/StagesEtProjets/Projets/overlay-bg.jpg";

export default class TitleSP extends Component<{ title: any }> {
    render() {
        let {title} = this.props;

        return (
            <div className="intro intro-single route bg-image" style={{backgroundImage: `url(${overlay})`}}>
                <div className="overlay-mf"/>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="intro-title mb-4">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}