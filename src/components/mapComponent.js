import React from "react";
import "./_mapComponent.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// export const Info = React.forwardRef((props, ref) => (

export const MapComponent = React.forwardRef((props, ref) => {
  const sowaCoords = [53.12287973037684, 18.001235433204815];
  const churchCoords = [53.12117084581305, 18.004615456855245];
  const hotelCoords = [53.12041774403046, 18.042553880079332];
  return (
    <>
      <h2 ref={ref}>Mapy</h2>
      <MapContainer
        center={[53.12287973037684, 18.001235433204815]}
        zoom={12}
        scrollWheelZoom={false}
        id="mapid"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={sowaCoords}>
          <Popup>
            Restauracja Sowa <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={churchCoords}>
          <Popup>
            Kościół <br /> Tutaj odbędzie się ślub najfajniejszej Ani i
            najfajniejszego Mikołaja.
          </Popup>
        </Marker>
        <Marker position={hotelCoords}>
          <Popup>
            Hotel <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
});
