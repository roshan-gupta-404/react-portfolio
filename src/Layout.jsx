import React from 'react'
import { Footer, Header} from './components/Index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default Layout

// <Header/>and <Footer/> will remain same and only <Outlet/> will change.