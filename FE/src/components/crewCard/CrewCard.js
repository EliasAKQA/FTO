import React from "react";
import './crewCard.scss';
import { Link } from "react-router-dom";
import autograph from "../../assets/autograph.png";
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos laudantium illum porro, blanditiis deleniti qui temporibus est, consequatur modi, atque eum quo veritatis iste tempore magnam. Adipisci, est eligendi.</p>
                        <img alt="autograph" src={autograph} className="autograph"></img>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CrewCard;