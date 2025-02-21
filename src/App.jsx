// src/App.jsx
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Donations from './components/Donations';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <UpcomingEvents />
      <Gallery />
      <Location />
      <Donations />
      <Footer />
    </Box>
  );
}

export default App;