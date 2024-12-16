"use client"

type props = {
   isMobileNav: boolean;
   handleMenuMobileClick: () => void;
}
export const MobileNav = ({ isMobileNav, handleMenuMobileClick }: props) => {

   return (
      <div className={`mobile-nav
         ${isMobileNav ? 'show-mobile-nav' : ''}`}>
         <a href="#home" onClick={handleMenuMobileClick}>Home</a>
         <a href="#about" onClick={handleMenuMobileClick}>About</a>
         <a href="#services" onClick={handleMenuMobileClick}>Services</a>
         <a href="#kids" onClick={handleMenuMobileClick}>Kids</a>
         <a href="#barbers" onClick={handleMenuMobileClick}>Barbers</a>
         <a href="#contact" onClick={handleMenuMobileClick}>Contact</a>
      </div>
   )
}