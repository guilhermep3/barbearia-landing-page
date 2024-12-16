"use client"
import { slideData } from "@/data/slideData";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const slideWidth = 800

export const Slider = ({currentSlide}: any) => {
   const [offset, setOffset] = useState(2);

   useEffect(()=>{
      const totalSlides = slideData.length;
      const centralSlide = Math.floor(totalSlides / 2);
      const offset = (currentSlide - centralSlide) * slideWidth * -1;
      setOffset(offset)
      console.log(offset)
   }, [currentSlide])

   return (
      <div className="slider-area"
         style={{
            marginLeft: `${offset}px`
         }}>
         {slideData.map((item, index) => (
            <div className={`slide-card ${index === currentSlide ? 'active' : 'inactive'}`} key={index}>
               <div className="barber-image" style={{background: `url('/barber/${item.img}')`}}>
                  <div className={`barber-medias ${index === currentSlide ? 'mediasActive' : ''}`}>
                     <FaFacebookF className="barber-media" title={item.medias.facebook}/>
                     <FaInstagram className="barber-media" title={item.medias.instagram}/>
                     <FaTwitter className="barber-media" title={item.medias.twitter}/>
                     <FaTiktok className="barber-media" title={item.medias.tiktok}/>
                  </div>
               </div>
               <div className="slide-card-info">
                  <p className="barber-name">{item.name}</p>
                  <p className="barber-exp">{item.exp}</p>
               </div>
            </div>
         ))}
      </div>
   )
}