import React from 'react'
import '../Styles/Home.css'
import FirstFrame from '../help/FirstFrame';
import ThingsAbout from '../help/ThingsAbout';
import Services from '../help/Services';
import BestCounseling from '../help/BestCounseling';
import Ourservices from '../help/Ourservices';


function Home() {
  return (
    <div>
      <FirstFrame />
      <ThingsAbout />
      <Services />
      <BestCounseling />
      <Ourservices />
    </div>
  )
}

export default Home
