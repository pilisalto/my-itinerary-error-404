import React from 'react'
import { Link } from "react-router-dom"

export default function CallToAction(props) {
  let {text, link} = props
  return (
    <div>
      <Link to={link}><button>{text}</button></Link>
    </div>
  )
}
