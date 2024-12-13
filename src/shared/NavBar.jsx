import { Link as ScrollLink } from "react-scroll"
import { Link } from "react-router-dom"
import { IoMdClose } from "react-icons/io";
import { FaTiktok, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const NavBar = ({ isNavbarOpen, toggleMenu }) => {

    return (
        <div className="fixed top-0 z-30">
            <div className="z-20 flex items-center justify-between py-[1rem] px-[2rem] w-[100vw]">
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
                            <ScrollLink to={'time'} spy={true} smooth={true} offset={-50} duration={500}>
                                TIME
                            </ScrollLink>
                        </li>
                        <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300">
                            <Link to={'/burgers'}>BURGERS</Link>
                        </li>
                        <li className="cursor-pointer hover:bg-[#0a0a0a] w-full p-[.5rem] hover:translate-x-[.5rem] transition-transform duration-300"><Link to={'/'}>CONTACT US</Link></li>
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
        </div>
    )
}

export default NavBar