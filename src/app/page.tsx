import {HeroSection, MainSection } from '@/components'


export default function Home() {

  return (
    <main className="flex flex-col bg-bsg snap-y snap-mandatory h-screen w-screen">
      <HeroSection />
      <MainSection />

    </main>
  );
}