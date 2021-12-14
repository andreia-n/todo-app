import React from "react"
import "./about.css"
import img from "../../../assests/pink-panther.jpg"
const About = () => {
  return (
    <div className='about'>
      <div className='aboutText'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam erat
          odio, placerat et felis ut, semper scelerisque felis. Pellentesque
          urna lectus, dignissim et lectus sed, tempus tempus magna. Sed nec
          lobortis eros.{" "}
        </p>
      </div>
      <div className='aboutImg'>
        <img src={img} alt='Pink Panther' />
      </div>
    </div>
  )
}

export default About
