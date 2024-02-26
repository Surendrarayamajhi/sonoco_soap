import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/routers';

import Aos from "aos";
import 'aos/dist/aos.css';
const Layout = () => {
  return (
   <>
    <Header />
    <main>
        <Routers />
    </main>
    <Footer />
   </>
  )
}

export default Layout;