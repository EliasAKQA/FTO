import React from "react";
import './crewCard.scss';
import Logo from "../../assets/logo/nasa-patch.png"
import { Link } from "react-router-dom";
import Url from "config";

const CrewCard = (props) => {
    return (
        <div className="container">
            <Link to={'/crew/' + props.id}>
                <div className="crew-card">
                    <figure className="crew-card__image">
                        <img src={Url.SERVER_URL + props.profileImageUrl} alt="Crew member name" />
                    </figure>
                    <div className="crew-card__text">
                        <h2>{props.name}</h2>
                        <h3>{props.role}</h3>
                        {/* <p>{props.desc}</p> */}
                        <div className="test">
                            <img className="testlogo" src={Logo} alt="" />
                            <img alt="autograph" src={Url.SERVER_URL + props.autographImageUrl} className="autograph"></img>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CrewCard;