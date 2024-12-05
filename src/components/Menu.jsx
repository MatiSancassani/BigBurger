import CardBurger from "../shared/CardBurger"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

const Menu = () => {
    return (
        <>
            <div className="bg-black text-white lg:bg-opacity-80 lg:rounded-b-[2rem] sticky top-0 flex items-center justify-around mb-[2rem] p-[1rem] z-10 lg:mx-[20rem] ">

                <div>
                    <Link to="/"><img src="/img/logo.png" alt="" className="hidden lg:block w-[4rem] h-[3rem] cursor-pointer" /></Link>
                </div>
                <div className="w-full lg:w-auto">
                    <ul className="text-[15px] flex items-center justify-start overflow-x-auto whitespace-nowrap scrollbar-hide lg:justify-center">
                        <li className="lg:hidden pb-[10px] px-[5px]"><Link to="/"><IoIosArrowBack /></Link></li>
                        <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CLASSICS</li>
                        <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BBQ</li>
                        <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">BACON</li>
                        <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">CHICKEN</li>
                        <li className="pb-[10px] px-[20px] cursor-pointer border-b-[3px] border-transparent hover:border-white">VEGAN</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center " >
                <div className="mx-[15rem]">
                    <div>
                        <h2 className="text-white">CLASSICS</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-evenly lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />

                    </div>
                    <div>
                        <h2 className="text-white">BBQ</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]">
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                    </div>
                    <div>
                        <h2 className="text-white">BACON</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]">
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                    </div>
                    <div>
                        <h2 className="text-white">CHICKEN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]">
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                        <CardBurger />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu