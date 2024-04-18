"use client";

import React, { useEffect, useState }  from 'react'
import { GoogleMap,  MarkerF,  useJsApiLoader } from '@react-google-maps/api'
import Data from "../app/Dashbord/Data"
import { user } from '@nextui-org/react';
import { get, set } from 'mongoose';
import { Users } from 'lucide-react';

const containerStyle = {
  width:  '100%',
  height: `auto`,
};



function GooglesMaps() {
  const [userlocation, setuserlocation] = useState(null);
  const [Userdata, setUserdata] = useState(Data.Userdata);
  // ...

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude; 
        const longitude = position.coords.longitude;
        setuserlocation({ coords: { longitude, latitude } });
      });
    };

    getUserLocation(); 
  }, []);


  const options = {
    mapId: '7c166c8f9b4ad3e',
  }

  const center = {
    longitude: userlocation?.coords.longitude,
    latitude: userlocation?.coords.latitude,
  };
  console.log(center);

    // ... rest of the position array

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS
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
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={{ lat: center.latitude, lng: center.longitude }}
        options={options}

      >
       
          <MarkerF
            clickable={true}
            draggable={true}
            position={{  lat: center.latitude, lng: center.longitude}}
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
            position={""}
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