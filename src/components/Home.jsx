import React from 'react'
import Header from './Header'
import NavBar from '../shared/NavBar'
import Social from './Social'
// import Footer from '../shared/Footer'
import { useState } from 'react'

const Home = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <NavBar isNavbarOpen={isNavbarOpen} toggleMenu={toggleMenu} />
            <Social />
            <div id='home'>
                <Header isNavbarOpen={isNavbarOpen} />
            </div>
            {/* <Footer /> */}
        </>

    )
}

export default Home