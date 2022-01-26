import React, {Component} from "react";

export default class ProgressBar extends Component<{ taille: any, title: any }> {
    render() {
        let {taille} = this.props;
        let {title} = this.props;

        return <div>
            <span>{title}</span>
            <span className="pull-right"/>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: `${taille}`}}
                     aria-valuenow={100}
                     aria-valuemin={0}
                     aria-valuemax={100}/>
            </div>
        </div>
    }
}