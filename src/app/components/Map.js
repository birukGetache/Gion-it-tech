"use client"
// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MapComponent = () => {
  const position = [11.5993, 37.3737]; // Example coordinates (latitude, longitude)

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: '100%', width: '100%' , zIndex:"5" }}
      scrollWheelZoom={false} // Disable zoom on scroll
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Gion BiT
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
