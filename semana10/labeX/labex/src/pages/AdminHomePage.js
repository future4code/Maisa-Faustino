import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'



export default function AdminHomePage () {
  return(
    <div>
      Página de Admin
      <Link to ={'/'}>
      <button>Ir home</button>
      </Link>
    </div>
  )
}