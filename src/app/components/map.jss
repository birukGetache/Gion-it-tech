import React, { useEffect } from "react";

const GooglePlacesAutocomplete = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 11.595, lng: 37.3908 },
        zoom: 16,
        mapTypeId: "hybrid", // Use 'hybrid' for satellite imagery with labels
      });

      const input = document.getElementById("pac-input");
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log(
            "No details available for the input: '" + place.name + "'"
          );
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        new window.google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });
      });
    };

    const loadGoogleMapsScript = () => {
      if (!window.loadingGoogleApi) {
        // Store the promise to ensure script is only loaded once
        window.loadingGoogleApi = new Promise((resolve, reject) => {
          const existingScript = document.querySelector(
            `script[src*="https://maps.googleapis.com/maps/api/js"]`
          );

          if (!existingScript) {
            const googleMapsScript = document.createElement("script");
            googleMapsScript.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSy3KKjt_C6-YWFSmiBk2pqY7myZWSu_pjdY&libraries=geometry,places&callback=initMap`;
            googleMapsScript.async = true;
            googleMapsScript.defer = true;

            googleMapsScript.onload = resolve;
            googleMapsScript.onerror = reject;

            window.initMap = initMap; // Attach the callback to the global scope
            document.head.appendChild(googleMapsScript);
          } else if (window.google && window.google.maps) {
            resolve(); // Script is already loaded
          }
        });
      }

      // Use the stored promise to initialize the map
      window.loadingGoogleApi.then(() => {
        if (window.google && window.google.maps) {
          initMap();
        }
      });
    };

    loadGoogleMapsScript();

    return () => {
      // Clean up global callback on unmount if needed
      delete window.initMap;
    };
  }, []);

  return (
    <div>
      <input
        id="pac-input"
        type="text"
        placeholder="Search for a place"
        style={{
          marginTop: "10px",
          width: "300px",
          padding: "5px",
          fontSize: "14px",
          display: "none",
        }}
      />
      <div
        id="map"
        style={{
          height: "400px",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default GooglePlacesAutocomplete;
