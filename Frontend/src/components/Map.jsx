import { CircularProgress } from "@mui/material";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { Pin } from "lucide-react";
import { useState } from "react";

export default function MapContainer({ pickupLocation, dropLocation }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;
  const [mapError, setMapError] = useState(false);

  if (!apiKey) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <CircularProgress size="5rem" sx={{ color: "#ffee58" }} />
      </div>
    );
  }

  const center = {
    lat: 23.0225,
    lng: 72.5714,
  };

  const handleMapError = () => {
    setMapError(true);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-[500px] w-full rounded-lg shadow-lg">
        {mapError ? (
          <div className="flex justify-center items-center h-full">
            <p>Failed to load the map.</p>
          </div>
        ) : (
          <Map
            mapId={mapId}
            center={center}
            zoom={12}
            onError={handleMapError}
            draggable={true}
            fullscreenControl={false}
            streetViewControl={false}
            zoomControl={false}
            mapTypeControl={false}
            scaleControl={false}  
          >
            {pickupLocation && pickupLocation.lat && pickupLocation.lng && (
              <AdvancedMarker position={pickupLocation} />
            )}
            {dropLocation && dropLocation.lat && dropLocation.lng && (
              <AdvancedMarker position={dropLocation} />
            )}
          </Map>
        )}
      </div>
    </APIProvider>
  );
}
