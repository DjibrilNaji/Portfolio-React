import React, {Component} from "react";

export default class Title extends Component<{ title: any, subtitle: any }> {
    render() {
        let {title} = this.props;
        let {subtitle} = this.props;

        return (<div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                {title}
                            </h3>
                            <p className="subtitle-a">
                                {subtitle}
                            </p>
                            <div className="line-mf"/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}