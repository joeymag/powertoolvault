"use client";

import React, { useEffect, useState }  from 'react'
import { GoogleMap,  MarkerF,  useJsApiLoader } from '@react-google-maps/api'
import Data from "../app/Dashbord/Data"
import { set } from 'mongoose';

const containerStyle = {
  width:  '100%',
  height: `auto`,
};
//51.65568015754571, -0.2700700027106776
const center = {
  lat: 51.65568015754590,
  lng: -0.2700700027106799
};


function GooglesMaps() {
  const [userlocation, setuserlocation] = useState([]);
  const [Userdata, setUserdata] = useState(Data.Userdata);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setuserlocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  console.log(userlocation);

  const options = {
    mapId: '7c166c8f9b4ad3e',
  }

  const position = [
    {
      lat: 51.65701152036001,
      lng: -0.27193473325311135
    },
    // ... rest of the position array
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC8wJzl21T3a6J5cprcc9MnMQE4zuo1wVQ"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={center}
        options={options}

      >
       
          <MarkerF
            clickable={true}
            draggable={true}
            position={"[userlocation.coords.latitude, userlocation.coords.longitude]"}
            icon={{
              url: "https://img.icons8.com/color/48/000000/marker.png",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        
      
       

        {Userdata.map((id) => (
          <MarkerF
            clickable={true}
            draggable={true}
            key={id}
            position={Userdata}
            icon={{
              url: "https://img.icons8.com/color/48/van.png",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        ))}
      </GoogleMap>
  ) : <></>
}

export default GooglesMaps