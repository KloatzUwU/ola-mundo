import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet } from 'react-router'

export default function PaginaPadrao({children}) {
  return (
    <main>
        <Banner/>
        <Outlet/>
        {children}
    </main>
  )
}
