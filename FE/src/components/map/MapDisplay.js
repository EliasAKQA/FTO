import React, {useEffect, useRef, useState} from 'react';
import "./mapDisplay.scss";
import axios from "axios";
import icon from "assets/satellite.png";

const MapDisplay = (props) => {
    const ref = useRef(null);
    const [map, setMap] = useState();
    const [location, setLocation] = useState(null);
    const [allMarkers, setAllMarkers] = useState([]);
    // default map location in europe
    const uluru = {lat: 53.0000, lng: 9.0000};

    function updateMap() {
        axios.get("http://api.open-notify.org/iss-now.json").then((res) => {
            if (map) {
                // props.func({
                //     'lon': res.data.iss_position.longitude,
                //     'lan': res.data.iss_position.latitude,
                //     'timestamp': res.data.timestamp
                // });
                setLocation(res.data.iss_position);
                let position = {
                    lat: parseFloat(res.data.iss_position.latitude),
                    lng: parseFloat(res.data.iss_position.longitude)
                }

                map.setOptions({
                    center: position
                })

                const marker = new window.google.maps.Marker({
                    position: position,
                    map,
                    title: "Location of ISS",
                    icon: icon,
                });

                setAllMarkers((prev) => {
                    prev.forEach(mark => mark.setMap(null))
                    return [marker];
                })
            }
        })
    }

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: uluru,
                zoom: 1,
                fullscreenControl: true,
                clickableIcons: true,
                mapTypeId: "satellite",
                minZoom: 1
            }));
        }

        // update map immediately
        updateMap();
        // update map every 5 seconds, with an initial delay of 5 seconds.
        let id = setInterval(updateMap, 5000);

        return () => {
            // Prevent memory leak.
            clearInterval(id);
        }
    }, [ref, map]);

    return <div>
        {location == null ? <h3>Loading location of ISS</h3> : ""}
        <div>
            <div className={"map"} ref={ref}/>
        </div>
    </div>
};

export default MapDisplay;
