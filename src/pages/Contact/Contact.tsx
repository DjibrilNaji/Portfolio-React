import {Component} from "react";
import '../../styles/Style.css'

export default class Contact extends Component {
    render() {
        return (
            <section style={{ marginTop: 250}}>
                <div className="container">
                    <div className="col-sm-12">
                        <div id="contact" className="box-shadow-full">
                            <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                    Pour entrer en contact
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead">
                                    N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez avoir
                                    plus
                                    d'informations.
                                    <br/>
                                </p>
                                <ul className="list-ico">
                                    <li><span className="ion-ios-location"/> 78570, Andresy, France</li>
                                    <li><span className="ion-ios-telephone"/> 07-70-41-37-85</li>
                                    <li><span className="ion-email"/> najidjibril@gmail.com</li>
                                </ul>
                            </div>
                            <div className="socials">
                                <ul>

                                    {/*<li><a href="https://gitlab.com/dashboard/projects" target="_blank"><span*/}
                                    {/*    className="ico-circle"><i*/}
                                    {/*    className="fa fa-gitlab"/></span></a></li>*/}
                                    <li><a href="https://github.com/DjibrilNaji" target="_blank"><span
                                        className="ico-circle"><i
                                        className="fa fa-github"/></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/djibril-naji-a400711aa/"
                                           target="_blank"><span
                                        className="ico-circle"><i className="fa fa-linkedin"/></span></a></li>
                                    <li>
                                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHVhQwkgZFqQzpkPwrlbgqvpkFtptTZgFnHJhQBwwrnJGvnrfGhhxDHHMHmqJNpsqBBbB"
                                           target="_blank"><span className="ico-circle"><i
                                            className="fa fa-envelope"/></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
