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





export default function MapComponent( {markers=[]} ) {
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
  
      <p  className="d4 title-animation font-semibold  text-center capitalize ">Interstate removalist helps you find the best removalists near you</p>
      <SectionText className=" lg:w-[80%] text-center "  text="Find trusted local removalists to make your move simple and stress-free. Whether you’re relocating just a few streets away or shifting to a nearby suburb, moving always comes with its challenges. By booking your removalist through Interstate, you can be confident of receiving professional service and care, helping you settle into your new home faster and with peace of mind." />
      
    </div>
      <div className="  lg:w-[70%]  h-[70vh]  mx-auto " >
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
