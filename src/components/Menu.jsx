import CardBurger from "../shared/CardBurger"
import { Link } from "react-router-dom"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react"

const Menu = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const getProduct = async () => {
        const response = await fetch("https://bigburgerbackend.onrender.com/api/products/api/products");
        const data = await response.json();
        return data.data

    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProduct().then((product) => setProductos(product))
    }, [])

    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (
        <>
            <div className="bg-black text-white sticky top-0 flex items-center justify-around mb-[2rem] p-[1rem] z-10">
                <div className="w-full lg:w-auto relative flex items-center justify-center">
                    <div className="absolute left-[-43rem] top-[-.1rem]">
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
                    <div className={`p-8 flex flex-col justify-between fixed top-0 z-30 text-white bg-black min-h-screen w-screen lg:w-80 overflow-y-scroll scrollbar-hide transition-all duration-300 ${isNavbarOpen ? "left-0" : "-left-full"}`}>
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
                                    <Link to={'/'} className="flex items-center text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                                        Time
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'} className="flex items-center text-gray-300 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">Burgers</Link>
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
                    <ul className="text-[15px] flex items-center justify-start overflow-x-auto whitespace-nowrap scrollbar-hide lg:justify-center">
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
                        {productos.map((p) => {
                            if (p.category === "Classic") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="bbq" className="text-white">BBQ</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "BBQ") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="bacon" className="text-white">BACON</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Bacon") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="chicken" className="text-white">CHICKEN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Chicken") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="vegan" className="text-white">VEGAN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Vegan") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu