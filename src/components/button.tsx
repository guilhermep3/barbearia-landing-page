"use client"

type props = {
   label: string
}
export const Button = ({label}: props) => {

   return(
      <button className="button">{label}</button>
   )
}