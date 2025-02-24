import {React, useState,useEffect} from 'react'
import { MapContainer, TileLayer,Marker, Polyline,useMap, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

  const pickUpIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/?size=100&id=52671&format=png&color=000000",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })
  const dropOffIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })
function Map({locations}) {
  const { pickUp, dropOff } = locations
  const [userLocation, setUserLocation] = useState([51.5074, -0.1278])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude])
      },
      (error) => {
        console.error("Error getting location:", error)
      }
    )
  }, [])

  const MapViewUpdater = ({ userLocation }) => {
    const map = useMap()
  
    useEffect(() => {
      if (userLocation) {
        map.setView(userLocation, 13)
      }
    }, [userLocation, map])
  
    return null
  }
  const userIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/?size=100&id=19326&format=png&color=000000",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32], 
  })
  return (
    <>
      <div className='md:w-3/4 border-2 border-secondary rounded-xl overflow-hidden sm:w-full'>
        <MapContainer center={userLocation}
                      zoom={13}
                      style={{height:'100vh', width:'100%'}}>
          <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

                      <Marker position={userLocation} icon={userIcon}>
                        <Popup>You are here!</Popup>
                      </Marker>
                      <MapViewUpdater userLocation={userLocation} />

                      {pickUp && <Marker position={[pickUp.lat, pickUp.lon]} icon={pickUpIcon} />}
                      {dropOff && <Marker position={[dropOff.lat, dropOff.lon]} icon={dropOffIcon} />}

                      {pickUp && dropOff &&
          <Polyline   positions={[[pickUp.lat, pickUp.lon],[dropOff.lat, dropOff.lon]]}
                      color="blue"/>}
          <AutoFitBounds locations={locations}/>
        </MapContainer>
      </div>
    </>
  )
}
const AutoFitBounds = ({ locations }) => {
  const map = useMap()

  useEffect(() => {
    if (locations.pickUp && locations.dropOff) {
      const bounds = [
        [locations.pickUp.lat, locations.pickUp.lon],
        [locations.dropOff.lat, locations.dropOff.lon],
      ]
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [locations, map])

  return null
}
export default Map