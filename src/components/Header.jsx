
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <div id="header" className={`flex items-center justify-center transition-colors duration-300`}>
            <div className="mt-[8rem] flex flex-col items-center justify-center">
                <div className="text-white flex items-center justify-center">
                    <img className="slide-in-elliptic-bottom-fwd z-10 w-[17rem] h-[15rem] absolute
                    lg:w-[35rem] lg:h-[30rem]" src="/img/burgerheader2.png" alt="" />
                    <h2 className="slide-in-left font-fuente font-bold text-white text-[3.5rem]
                    lg:text-[10rem]">BIGBURGER</h2>
                </div>
                <div className="flex flex-col items-center justify-center relative top-[8rem]">
                    <p className="text-[1.5rem] text-center text-white lg:text-[2.5rem]">¿Estás para una BigBurger?</p>
                    <Link to={'/menu'}>
                        <button className="mt-[2rem] p-[1rem] bg-transparent text-white border border-white font-medium overflow-hidden relative py-3 rounded-md hover:brightness-150 active:opacity-75 outline-none duration-300 group">
                            <span className="bg-transparent shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Ver menu
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Header