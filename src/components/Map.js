import {React, useState,useEffect} from 'react'
import { MapContainer, TileLayer,Marker, Polyline,useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })
function Map({locations}) {
  const { pickUp, dropOff } = locations
  const [userLocation, setUserLocation] = useState([54.9784, -1.6174])

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
  return (
    <>
      <div className='md:w-3/4 border-2 border-secondary rounded-xl overflow-hidden sm:w-full'>
        <MapContainer center={userLocation}
                      zoom={13}
                      style={{height:'100vh', width:'100%'}}>
          <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

                      {pickUp && <Marker position={[pickUp.lat, pickUp.lon]} icon={customIcon} />}
                      {dropOff && <Marker position={[dropOff.lat, dropOff.lon]} icon={customIcon} />}

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