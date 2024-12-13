import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../shared/Accordion'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../shared/Footer';
import Demo from '../shared/Modal';
import NavBar from '../shared/NavBar';
const BurguerDetail = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Resetea el scroll al cargar la página
    }, []);
    return (
        <div className=''>
            <div className='hidden lg:block'>
                <NavBar isNavbarOpen={isNavbarOpen} toggleMenu={toggleMenu} />
            </div>
            <Link to="/menu">
                <div className="fixed top-0 z-20 bg-black w-screen flex items-center justify-start text-[1rem] text-white lg:hidden">
                    <div className='m-4'>
                        <IoIosArrowBack />
                    </div>
                    <div>
                        <p className='font-bold'>Menu</p>
                    </div>
                </div>
            </Link>
            <div className="relative h-screen flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start lg:pt-[8rem]">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-end">
                    <img
                        id="preparationImg"
                        className="mb-[5rem] lg:mb-0"
                        src="/img/burgersTypes/cuartoxl.png"
                        alt="Hamburguesa"
                    />
                    <div className="hidden text-white lg:block">
                        <Demo />
                    </div>

                </div>

                {/* Descripción */}
                <div className="w-full lg:w-[40%] px-4 mx-[10rem]">
                    <div className="text-white">
                        <h2 className="my-2 text-start text-2xl font-bold md:mt-10 md:text-4xl">Hamburguesa con queso</h2>
                        <p className="my-4 text-sm md:text-base">
                            El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.
                        </p>
                        <div className="hidden lg:block">
                            <h2 className="mb-4 text-lg font-bold md:text-3xl">Más Información</h2>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>
            {/* Botón fijo */}
            <div className="fixed bottom-0 bg-black w-screen lg:hidden flex items-center justify-center">
                {/* <button className="text-white w-screen p-2 md:p-2 flex items-center justify-center"> */}
                <div className='className="text-white w-screen p-2 md:p-2 flex items-center justify-center'>
                    <Demo />
                </div>
                {/* </button> */}
            </div>
            <div className='hidden lg:block'>
                <Footer />
            </div>
        </div>

    )
}

export default BurguerDetail