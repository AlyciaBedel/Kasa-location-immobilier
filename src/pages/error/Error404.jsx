import React from 'react'
import './error404.scss'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <main className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="errorLink">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  )
}

export default Error404