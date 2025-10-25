"use client";
import "leaflet/dist/leaflet.css";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import dynamic from "next/dynamic";
const MapContainer = dynamic(()=>import("react-leaflet").then((mod)=>mod.MapContainer),{ssr:false,})
const TileLayer = dynamic(()=>import('react-leaflet').then((mod)=>mod.TileLayer),{ssr:false,})
const Marker = dynamic(()=>import('react-leaflet').then((mod)=>mod.Marker),{ssr:false,})
const Popup = dynamic(()=>import('react-leaflet').then((mod)=>mod.Popup),{ssr:false,})
import { useMemo } from "react";





export default function MapComponent( {markers=[
    { id: 1, position: [-33.8688, 151.2093], name: "Sydney", color: "#ff5733" }, 
    { id: 2, position: [-37.8136, 144.9631], name: "Melbourne", color: "#3498db" },
    { id: 3, position: [-27.4698, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 4, position: [-27.7898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 5, position: [-27.5898, 153.0251], name: "Brisbane", color: "#2ecc71" },
    { id: 6, position: [-27.4748, 153.0251], name: "Brisbane", color: "#2ecc71" },
  ]} ) {
  const customIcon = useMemo(()=>{
  if(typeof window !==undefined){
    const L = require('leaflet')
    return L.icon({
  iconUrl: "/img/svg/logogram[1].svg", // relative to public folder
  iconSize: [40, 40], // change size if needed
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // where the popup opens relative to iconAnchor
});
  }
  return null;
},[])


  return (
<section className="sp60px bg-white-4  " >
  <div className="container" >
    <div className=" w-full place-items-center mb-10 " >
  
      <p  className="d4  font-semibold  text-center capitalize ">Your Move, Matched With the Right Team</p>
      <SectionText className=" lg:w-[80%] text-center "  text="Customers across Australia trust Interstate Removalists to find reliable and safe removalists nearby. You’ll get proper service and care from the first box packed to the last box unpacked at your place. Whether you’re relocating within your suburb, across the city, or interstate, you can book the right mover to make relocation simple and hassle-free." />
      
    </div>
      <div className="  lg:w-[90%]  h-[80vh]  mx-auto " >
      <MapContainer
        center={[-33.8688, 151.2093]} // Sydney by default
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex:0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
</div>
</section>
  );
}
