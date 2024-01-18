import React from 'react'
import { CvSection, SideBar } from '@/components'

const MainSection = () => {
  return (
    <div className="bg-bsg flex snap-center h-screen w-screen">
        <SideBar />
        <CvSection />
    </div>
  )
}

export default MainSection