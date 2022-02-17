import * as React from "react";
import {Wrapper} from "@googlemaps/react-wrapper";
import MapDisplay from "./MapDisplay";

const Map = (props) => {

    const render = (status) => {
        return <h1>{status}</h1>;
    };

    return <div>
        <Wrapper apiKey={"AIzaSyAJUPREgqqrQ7rD1F2knXBF74o2duPA2y4"} render={render}>
            <MapDisplay/>
        </Wrapper>
    </div>
};

export default Map;
