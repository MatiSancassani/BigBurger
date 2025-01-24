import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../shared/Accordion'
import { useEffect, useState } from 'react'
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Footer from '../shared/Footer';
import Demo from '../shared/Modal';
import { useParams } from 'react-router-dom';
const BurguerDetail = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const [productos, setProductos] = useState({});
    const getProductById = async () => {
        const response = await fetch(`https://bigburgerbackend.onrender.com/api/products/${id}`);
        const data = await response.json();
        return data.data
    }
    useEffect(() => {
        getProductById().then((product) => setProductos(product))
    }, [])

    const { thumbnail, title, description, price, stock, category, _id } = productos
    return (
        <div className=''>
            <div className="text-white flex items-center justify-between z-10">
                <div className="">
                    {/* BOTON HAMBURGER */}
                    <div className="bg-black fixed top-0 z-20 py-[1rem] px-[2rem] w-[100vw] hidden lg:flex lg:items-center lg:justify-between lg:h-[90px]">
                        <button onClick={toggleMenu}>
                            <div className="bg-white p-[.5rem] rounded-[30%]">
                                <div className="w-[1.5rem] h-[1.5rem] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 512 512">
                                        <path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </button>

                        <div>
                            <Link to={'/'}>
                                <img src="/img/logo.png" alt="" className="w-[8rem] cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                    {/* toggle */}



                    <div className={`fixed top-0 p-8 flex flex-col justify-between z-30 text-white bg-black min-h-screen w-screen lg:w-80 overflow-y-scroll scrollbar-hide transition-all duration-300 ${isNavbarOpen ? "left-0" : "-left-full"}`}>
                        <div className="">
                            <div className="flex items-center justify-between p-[1rem] mb-10">
                                <div>
                                    <h2 className="text-gray-300 font-bold text-2xl tracking-[2px] uppercase">BigBurger</h2>
                                </div>
                                <button onClick={toggleMenu}>
                                    <div className="border-transparent border-gray-300 rounded-[100%] cursor-pointer hover:bg-[#333] text-[1.5rem]">
                                        <IoMdClose />
                                    </div>
                                </button>
                            </div>
                            <ul className="">
                                <li>
                                    <Link to={'/'} className="flex items-center text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/menu'} className="flex items-center text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">Burgers</Link>
                                </li>
                                <li><Link to={'/'} className="flex items-center text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="">
                            <div className="cursor-pointer flex items-center gap-4 text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                                <IoSettings />
                                <p>Setting</p>
                            </div>
                            <div className="cursor-pointer flex items-center gap-4 text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                                <CiLogin />
                                <Link to={'/login'}>Sign In</Link>
                            </div>
                            <div className="cursor-pointer flex items-center gap-4 text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                                <img className="w-4 h-4 object-cover rounded-full" src="/img/user.png" alt="" />
                                <p>Invitado</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <Link to="/menu">
                <div className="p-[.5rem] fixed top-0 z-20 bg-black w-screen flex items-center justify-start text-[1rem] text-white lg:hidden">
                    <div className='m-4 flex items-center justify-center'>
                        <IoIosArrowBack />
                    </div>
                    <div>
                        <p className='font-bold'>Menu</p>
                    </div>
                </div>
            </Link>
            <div className="mt-[5rem] relative flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start lg:h-screen lg:mt-[7rem]">
                <div className="lg:w-1/2 flex flex-col items-center justify-end">
                    <img src={`https://bigburgerbackend.onrender.com${thumbnail}`} alt={title} />
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

            </div>
            <div className='hidden lg:block'>
                <Footer />
            </div>
        </div>

    )
}

export default BurguerDetail