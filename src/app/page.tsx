import Image from 'next/image'
import {HeroSection, Navbar, WorkHistory, SkillsSection, SideBar, CvSection } from '@/components'


export default function Home() {
  return (
  <main className="flex bg-accent2 h-dvh w-dvw overflow-hidden">
    {/* <HeroSection /> */}
    < SideBar />
    <CvSection />
  </main>
  )
}
