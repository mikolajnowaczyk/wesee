import React from "react";
// import "leaflet/dist/leaflet.css";
import "./_mapComponent.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Tooltip } from "bootstrap";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// import "leaflet/dist/leaflet.css";

// import L from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

// L.Marker.prototype.options.icon = DefaultIcon;

export const MapComponent = React.forwardRef((props, ref) => {
  const sowaCoords = [53.12287973037684, 18.001235433204815];
  const churchCoords = [53.12117084581305, 18.004615456855245];
  const hotelCoords = [53.12041774403046, 18.042553880079332];
  // const map = MapContainer({children:{}});
  // console.log("map", map);
  const hotelRef =
    "https://www.google.com/maps/dir//Hotel+Elda,+Fordo%C5%84ska+26,+85-752+Bydgoszcz/@53.124188,18.0124308,14.25z/data=!4m19!1m9!3m8!1s0x4703138a7f5f5109:0x64b1c72e67915c7d!2sHotel+Elda!5m2!4m1!1i2!8m2!3d53.1204028!4d18.0425013!4m8!1m0!1m5!1m1!1s0x4703138a7f5f5109:0x64b1c72e67915c7d!2m2!1d18.0425013!2d53.1204028!3e2";
  const churchRef =
    "https://www.google.com/maps/dir//Ko%C5%9Bci%C3%B3%C5%82+Rzymskokatolicki+pw.+%C5%9Bw.+Andrzeja+Boboli,+Pl.+Ko%C5%9Bcieleckich,+Bydgoszcz/@53.1235915,18.0087805,14.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470313bdaad3a655:0x33cee6f3e4df5ed9!2m2!1d18.0045511!2d53.1211479!3e2";
  const sowaRef =
    "https://www.google.com/maps/dir//Cukiernia+Restauracja+Winiarnia+Sowa,+Mostowa+5,+Bydgoszcz/@53.1223345,18.0083586,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470313bb8c75b405:0x64cf54d191cb34c6!2m2!1d18.0008064!2d53.1225859!3e2";
  return (
    <>
      <h2 ref={ref} style={{margin:"10px"}}>Mapy</h2>
      <MapContainer
        center={[53.12287973037684, 18.001235433204815]}
        zoom={12}
        // scrollWheelZoom={true}
        id="mapid"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={sowaCoords}>
          <Popup>
            Restauracja Sowa <br />
            ul. Mostowa 5 <br />
            <a href={sowaRef}>Sprawdź dojazd!</a>
          </Popup>
        </Marker>
        <Marker position={churchCoords}>
          <Popup keepInView={true}>
            Kościół św. Andrzeja Boboli <br />
            Pl. Kościeleckich 7 <br />
            <a href={churchRef}>Sprawdź dojazd!</a>
          </Popup>
        </Marker>
        <Marker position={hotelCoords}>
          <Popup>
            Hotel "ELDA" <br />
            ul. Fordońska 26 <br />
            <a href={hotelRef}>Sprawdź dojazd!</a>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
});
