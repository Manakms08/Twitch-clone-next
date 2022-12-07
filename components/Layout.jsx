import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <div className='min-h-full w-full'>
      <Navbar/>
    <div className='pt-[0px] flex h-full w-full'>
        <SideMenu/>
        <Main/>
    </div>
    </div>
  )
}

export default Layout