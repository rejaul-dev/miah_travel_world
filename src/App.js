import React from 'react'
import Activities from './components/Activities';
import Bookings from './components/Bookings';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
   <div>
    <TopBar/>
    <Navbar/>
    <Hero/>
    <Activities/>
    <Bookings/>
    <Gallery/>
   </div>
  );
}

export default App;
