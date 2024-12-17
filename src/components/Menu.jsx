import CardBurger from "../shared/CardBurger"
import { Link } from "react-router-dom"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import NavBar from '../shared/NavBar';
import { Link as ScrollLink } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { FaTiktok, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Menu = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (
        <>

            <div className="bg-black text-white sticky top-0 flex items-center justify-around mb-[2rem] p-[1rem] z-10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute left-[-43rem] top-[.5rem]">
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
                    </div>
                    <div className={`flex flex-col justify-between fixed top-0 z-30 text-white bg-black rounded-r-[2rem] h-screen w-[100%] overflow-hidden transition-all duration-300 lg:w-[20%] ${isNavbarOpen ? "left-0" : "-left-full"
                        }`}>
                        <div>
                            <div className="flex items-center justify-end mx-[1rem]">
                                <button onClick={toggleMenu}>
                                    <div className="mt-[2rem] border-2 rounded-[100%] p-[.5rem] cursor-pointer hover:bg-[#333]">
                                        <IoMdClose />
                                    </div>
                                </button>
                            </div>
                            <ul className="flex flex-col items-start justify-between gap-[1rem] mx-[.5rem]">

                                <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300">
                                    <Link to={'/'}>
                                        HOME
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300" >
                                    <Link to={'/'}>
                                        TIME
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300">
                                    <Link to={'/'}>BURGERS</Link>
                                </li>
                                <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300"><Link to={'/'}>CONTACT US</Link></li>
                                <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300"><Link to={'/login'}>LOGIN</Link></li>
                            </ul>
                        </div>

                        <div className="w-full p-[.5rem] mb-[2rem]">
                            <ul className="flex items-center justify-around">
                                <li className="h-[3rem] w-[3rem] flex items-center justify-center rounded-[50%] cursor-pointer bg-black hover:bg-[#333] hover:text-[1.3rem] transition-[1s]">
                                    <FaFacebookF />
                                </li>
                                <li className="h-[3rem] w-[3rem] flex items-center justify-center rounded-[50%] cursor-pointer bg-black hover:bg-[#333] hover:text-[1.3rem] transition-[1s]">
                                    <FaInstagram />

                                </li>
                                <li className="h-[3rem] w-[3rem] flex items-center justify-center rounded-[50%] cursor-pointer bg-black hover:bg-[#333] hover:text-[1.3rem] transition-[1s]">
                                    <FaTwitter />

                                </li>
                                <li className="h-[3rem] w-[3rem] flex items-center justify-center rounded-[50%] cursor-pointer bg-black hover:bg-[#333] hover:text-[1.3rem] transition-[1s]">
                                    <FaTiktok />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="text-[15px] flex items-center justify-start overflow-x-auto whitespace-nowrap scrollbar-hide lg:justify-center p-[.5rem]">
                        <li className="lg:hidden pb-[10px] px-[5px]"><Link to="/"><IoIosArrowBack /></Link></li>
                        <ScrollLink to="classics" spy={true} smooth={true} offset={-80} duration={500}>
                            <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CLASSICS</li>
                        </ScrollLink>
                        <ScrollLink to="bbq" spy={true} smooth={true} offset={-80} duration={500}>
                            <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BBQ</li>
                        </ScrollLink>
                        <ScrollLink to="bacon" spy={true} smooth={true} offset={-80} duration={500}>
                            <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BACON</li>
                        </ScrollLink>
                        <ScrollLink to="chicken" spy={true} smooth={true} offset={-80} duration={500}>
                            <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CHICKEN</li>
                        </ScrollLink>
                        <ScrollLink to="vegan" spy={true} smooth={true} offset={-80} duration={500}>
                            <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">VEGAN</li>
                        </ScrollLink>

                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-around " >
                <div className="mx-[15rem]">
                    <div>
                        <h2 id="classics" className="text-white">CLASSICS</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">

                        <CardBurger img="/img/burgersTypes/boomcheddar.png" title="Boom Cheddar" />
                        <CardBurger img="/img/burgersTypes/cuartoxl.png" title="Cuarto XL" />
                        <CardBurger img="/img/burgersTypes/triple.png" title="Cuarto XL" />
                        <CardBurger img="/img/burgersTypes/doblehuevo.png" title="Dibu Doble Huevo" />

                    </div>
                    <div>
                        <h2 id="bbq" className="text-white">BBQ</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        <CardBurger img="/img/burgersTypes/onion.png" title="Onion" />
                        <CardBurger img="/img/burgersTypes/oklahoma.png" title="" />
                        <CardBurger img="/img/burgersTypes/huevo.png" title="" />
                    </div>
                    <div>
                        <h2 id="bacon" className="text-white">BACON</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        <CardBurger img="/img/burgersTypes/tastybacon.png" title="Tasty Bacon" />
                        <CardBurger img="/img/burgersTypes/cheesebacondoble.png" title="Bacon Doble" />
                    </div>
                    <div>
                        <h2 id="chicken" className="text-white">CHICKEN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        <CardBurger img="/img/burgersTypes/paltapollo.png" title="Pollo & Palta" />
                        <CardBurger img="/img/burgersTypes/pollocrispy.png" title="Pollo Crispy" />
                        <CardBurger img="/img/burgersTypes/polloxl.png" title="Pollo XL" />
                    </div>
                    <div>
                        <h2 id="vegan" className="text-white">VEGAN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        <CardBurger img="/img/burgersTypes/veggie.png" title="Veggie" />
                        <CardBurger img="/img/burgersTypes/veggiecheese.png" title="Veggie Cheese" />
                        <CardBurger img="/img/burgersTypes/Palta.png" title="Palta" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu