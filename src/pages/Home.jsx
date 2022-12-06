import React from 'react'
import Connect from '../components/connect/Connect'
import HeroSection from '../components/heroSection/HeroSection'
import NewLetter from '../components/newletter/NewLetter'
import OperatingNode from '../components/operatingNode/OperatingNode'
import Oppertunity from '../components/oppertunity/Oppertunity'
import Pacakge from '../components/pacakge/Package'
import Teams from '../components/team/Teams'

const Home = () => {
  return (
    <>
    
    <HeroSection />
      <OperatingNode />
      <Connect />
      <Oppertunity />
      <Pacakge />
      <Teams />
      <NewLetter />
      </>
  )
}

export default Home