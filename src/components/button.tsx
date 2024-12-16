"use client"

type props = {
   label: string;
   scrollTo?: string;
}
export const Button = ({label, scrollTo}: props) => {

   const handleScrollTo = () => {
      const sectionScroll = document.getElementById(`${scrollTo}`)
      if(scrollTo){
         sectionScroll?.scrollIntoView({ behavior: "smooth" });
      }
   }

   return(
      <button className="button" onClick={handleScrollTo}>{label}</button>
   )
}