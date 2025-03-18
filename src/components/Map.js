import { React, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const pickUpIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=52671&format=png&color=000000", //icons8
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const dropOffIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const carIcon = new L.Icon({
  iconUrl:
    "https://img.icons8.com/?size=100&id=AmvvpYN8jrzG&format=png&color=000000",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
function Map({locations,startRide, setStartRide,setCarPosition,carPosition,setShowRating,}) {
  const { pickUp, dropOff } = locations;
  const [userLocation, setUserLocation] = useState([51.5074, -0.1278]);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  const MapViewUpdater = ({ userLocation }) => {
    const map = useMap();

    useEffect(() => {
      if (userLocation) {
        map.setView(userLocation, 13);
      }
    }, [userLocation, map]);

    return null;
  };
  const userIcon = new L.Icon({
    iconUrl:
      "https://img.icons8.com/?size=100&id=19326&format=png&color=000000",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    if (startRide && pickUp && dropOff) {
      setCarPosition([pickUp.lat, pickUp.lon]);
      setMoving(true);
    }
  }, [startRide, pickUp, dropOff, setCarPosition]);

  useEffect(() => {
    if (moving && pickUp && dropOff) {
      const steps = 50;
      let step = 0;
      const startLat = parseFloat(pickUp.lat);
      const startLon = parseFloat(pickUp.lon);
      const endLat = parseFloat(dropOff.lat);
      const endLon = parseFloat(dropOff.lon);

      const latStep = (endLat - startLat) / steps;
      const lonStep = (endLon - startLon) / steps;

      const interval = setInterval(() => {
        step++;

        const newLat = (startLat + latStep * step).toFixed(6);
        const newLon = (startLon + lonStep * step).toFixed(6);

        setCarPosition([parseFloat(newLat), parseFloat(newLon)]);

        if (step === Math.floor(steps / 2)) {
          alert("Your ride has arrived at pickup! 🚖");
        }

        if (step === steps) {
          alert("You have reached your destination! 🎉 Ride completed.");
          clearInterval(interval);
          setMoving(false);
          setStartRide(false);
          setTimeout(() => {
            setShowRating(true);
          }, 1000);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [moving, pickUp, dropOff, setCarPosition, setShowRating, setStartRide]);
  return (
    <>
      <div className="relative h-full lg:w-3/4 border-2 border-secondary rounded-xl overflow-hidden sm:w-full">
        <MapContainer
          center={userLocation}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
          whenCreated={(map) => map.setView(userLocation, 13)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here!</Popup>
          </Marker>
          <MapViewUpdater userLocation={userLocation} />

          {pickUp && (
            <Marker position={[pickUp.lat, pickUp.lon]} icon={pickUpIcon} />
          )}
          {dropOff && (
            <Marker position={[dropOff.lat, dropOff.lon]} icon={dropOffIcon} />
          )}

          {pickUp && dropOff && (
            <Polyline
              positions={[
                [pickUp.lat, pickUp.lon],
                [dropOff.lat, dropOff.lon],
              ]}
              color="blue"
            />
          )}

          {carPosition && <Marker position={carPosition} icon={carIcon} />}
          <AutoFitBounds
            userLocation={userLocation}
            pickUp={pickUp}
            dropOff={dropOff}
          />
        </MapContainer>
      </div>
    </>
  );
}
const AutoFitBounds = ({ pickUp, dropOff, userLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (pickUp && dropOff) {
      const bounds = [
        [pickUp.lat, pickUp.lon],
        [dropOff.lat, dropOff.lon],
      ];
      if (userLocation) {
        bounds.push([userLocation[0], userLocation[1]]);
      }
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (userLocation) {
      map.setView(userLocation, 13);
    }
  }, [userLocation, pickUp, dropOff, map]);

  return null;
};

export default Map;
