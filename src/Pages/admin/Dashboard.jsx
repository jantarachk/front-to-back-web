import React, { useState } from "react";
import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

function Dashboard() {

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <div>
      <MapContainer 
        className="h-[100vh]"
        center={[13, 100]} 
        zoom={7} 
        scrollWheelZoom={false}>

          <LayersControl>
            <LayersControl.BaseLayer name="OSM" checked>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="World_Imagery">
                  <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
            </LayersControl.BaseLayer>
          </LayersControl>
        
          <LocationMarker />

        <Marker position={[13, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[10, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}

export default Dashboard;
