import React from 'react'
import { CvSection, SideBar } from '@/components'

const MainSection = () => {
  return (
    <div className="bg-bgDarkBlue flex flex-col snap-center h-screen w-screen md:flex-row overflow-x-hidden" >
        <SideBar />
        <CvSection />
    </div>
  )
}

export default MainSection