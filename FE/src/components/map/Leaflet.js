import React, {useEffect, useRef, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from "axios";
import L from 'leaflet';
import issIcon from "assets/satellite.png";



const Leaflet = (props) => {
    
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    
    function updateMap(){
        axios.get("http://api.open-notify.org/iss-now.json").then(res=>{
            props.func({
                'lat': res.data.iss_position.latitude,
                'lng': res.data.iss_position.longitude,
                'timestamp': res.data.timestamp
            });
            console.log(`lat: ${lat}, lng: ${lng}`);
            setLat(res.data.iss_position.latitude);
            setLng(res.data.iss_position.longitude);
        })
    }
    useEffect(()=>{
        const id = setInterval(updateMap, 3000);

        return(()=>{
            clearInterval(id);
        })
    })

    const Iss = L.icon({
        iconUrl: issIcon,
        iconSize: [64, 64],
        iconAnchor:[32, 32],
        popupAnchor: [0, 32]

    })
    return (
        <div>
        {lat == null ? <h3>Loading location of ISS</h3> : (

            <MapContainer center={[lat, lng]} zoom={5}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={Iss}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )}

            </div>
    )
};
export default Leaflet;