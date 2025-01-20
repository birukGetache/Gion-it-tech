import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[11.59364000, 37.39077000]}// Default coordinates [latitude, longitude]
        zoom={13} // Default zoom level
        style={{ height: '100%', width: '100%' }}
      >
        {/* Add a tile layer (map style) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add a marker */}
        <Marker position={[ 11.59364000 ,37.39077000  ]} >
          <Popup>
            Ghion <br /> It solution!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

//make it map earth is black not white
