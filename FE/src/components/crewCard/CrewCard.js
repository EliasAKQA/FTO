import React from "react";
import './crewCard.scss';
import { Link } from "react-router-dom";
import Url from "config";

const CrewCard = (props) => {
    return (
        <div>
            <Link to={'/crew/' + props.name}>
                <div className="crew-card">
                    <figure className="crew-card__image">
                        <img src={Url.SERVER_URL + props.profileImageUrl} alt="Crew member name" />
                    </figure>
                    <div className="crew-card__text">
                        <h2>{props.name}</h2>
                        <h3>{props.title}</h3>
                        {/* <p>{props.desc}</p> */}
                        <img alt="autograph" src={Url.SERVER_URL + props.autographImageUrl} className="autograph"></img>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CrewCard;