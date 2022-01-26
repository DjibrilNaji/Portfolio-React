import {Component} from "react";

export default class Box extends Component<{ img: any, title: any, info: any, text: any, chemin: any }> {
    render() {
        let {img} = this.props;
        let {title} = this.props;
        let {info} = this.props;
        let {text} = this.props;
        let {chemin} = this.props;


        return <div className="col-md-4">
            <div className="card card-blog">
                <div className="card-img">
                    <a href={chemin}><img src={img} alt=""
                                                className="img-fluid"/></a>
                </div>
                <div className="card-body">
                <div className="card-category-box">
                        <div className="card-category">
                            <h6 className="category">{info}</h6>
                        </div>
                    </div>
                    <h3 style={{textAlign: "center"}} className="card-title"><a href={chemin}>
                        {title}
                    </a></h3>
                    <p style={{textAlign: "center"}} className="card-description">
                        {text}
                    </p>
                </div>
                <div style={{textAlign: "center"}}className="card-footer">
                    <div className="post-author">
                        {/*<a href="#">*/}
                            <span className="author">Djibril Naji</span>
                        {/*</a>*/}
                    </div>
                    <div className="post-date">
                        {/*<span className="ion-ios-clock-outline"/> 10 min*/}
                    </div>
                </div>
            </div>
        </div>
    }
}