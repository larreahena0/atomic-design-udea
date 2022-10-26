import React from 'react'
import Image from "../../atoms/image/image.jsx";
import Name from "../../atoms/name/name.jsx";
import Status from "../../atoms/status/status.jsx";
import './card.css'

const Card = ({ imgSrc, imgAlt, name, currentStatus }) => {
 return (
   <article className="card">
     <Image src={imgSrc} alt={imgAlt} />
     <Name name={name} />
     {currentStatus && <Status currentStatus={currentStatus} />}
   </article>
 )
}

export default Card