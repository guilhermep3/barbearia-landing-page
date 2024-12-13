"use client"


export const MobileNav = ({ isMobileNav }: any) => {

   return (
      <div className={`mobile-nav transition duration-300
         ${isMobileNav ? 'show-mobile-nav' : ''}`}>
         <a href="">Home</a>
         <a href="">About</a>
         <a href="">Services</a>
         <a href="">Barbers</a>
         <a href="">Blog</a>
         <a href="">Contact Us</a>
      </div>
   )
}