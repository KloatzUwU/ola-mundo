import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuLink({ styles }) {
  return (
    <>
      <NavLink
        className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
        to={'/'}
        end
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
        to={'/sobremim'}
        end
      >
        SobreMim
      </NavLink>
    </>
  )
}
