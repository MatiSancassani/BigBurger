import NavBarToggle from "./NavBarToggle"
import { IoIosArrowBack } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"

const NavBarForMenuComp = () => {
    return (
        <div className="sticky top-0 z-30">
            <div className="bg-black text-white flex items-center justify-between mb-[2rem] h-[90px] z-10">

                <div className="lg:w-full flex items-center justify-between lg:px-[1.5rem]">
                    <div className="hidden lg:block">
                        <NavBarToggle />
                    </div>

                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-screen">
                        <ul className="text-[15px] px-[.5rem] flex items-center justify-between lg:justify-center">
                            <li className="lg:hidden px-[5px]"><Link to="/"><IoIosArrowBack /></Link></li>
                            <ScrollLink to="classics" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className="px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CLASSICS</li>
                            </ScrollLink>
                            <ScrollLink to="bbq" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className="px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BBQ</li>
                            </ScrollLink>
                            <ScrollLink to="bacon" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className="px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BACON</li>
                            </ScrollLink>
                            <ScrollLink to="chicken" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className="px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CHICKEN</li>
                            </ScrollLink>
                            <ScrollLink to="vegan" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className="px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">VEGAN</li>
                            </ScrollLink>
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <Link to={'/'}>
                            <img src="/img/logo.png" alt="" className="w-[8rem] cursor-pointer" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBarForMenuComp