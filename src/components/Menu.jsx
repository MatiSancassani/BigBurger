import CardBurger from "../shared/CardBurger"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
    return (
        <>
            <div className="bg-black text-white lg:bg-opacity-80 lg:rounded-b-[2rem] sticky top-0 flex items-center justify-around mb-[2rem] p-[1rem] z-10 lg:mx-[20rem] ">

                <div>
                    <Link to="/"><img src="/img/logo.png" alt="" className="hidden lg:block w-[4rem] h-[3rem] cursor-pointer" /></Link>
                </div>
                <div className="w-full lg:w-auto m-0">
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
                        <CardBurger img="/img/burgersTypes/" title="" />
                        <CardBurger img="/img/burgersTypes/" title="" />
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