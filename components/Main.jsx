import React from 'react'
import Categories from './Categories'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'
import Video from './Video'

const Main = () => {
  return (
    <div className='left-[64px] xl:left-[245px]'>
        <Video/>
        <LiveChannels />
        <IconBar/>
        <Categories/>
    </div>
  )
}

export default Main