import {HeroSection, MainSection, Footer } from '@/components'


export default function Home() {

  return (
    <main className="flex flex-col snap-y snap-proximity min-h-screen overflow-scroll">
      <HeroSection />
      <MainSection />
      <Footer />
    </main>
  );
}