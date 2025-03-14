import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2";


function Cart() {
    const [toggleCart, setToggleCart] = useState(false)

    const [cartWithProducts, setCartWithProducts] = useState(1)

    const handleClick = () => {
        setToggleCart(!toggleCart)
    }

    return (
        <>
            {(cartWithProducts <= 0) ? null : <div className='absolute top-[5px] right-0 lg:top-[52rem]'>
                <button onClick={handleClick} className='inline-block relative cursor-pointer'>
                    <small className='absolute font-bold bottom-[5px] left-[13px] text-black rounded-[30%] lg:bottom-[12px] lg:left-[21px] lg:text-[1.5rem] lg:rounded-[10%_/_50%]'>{cartWithProducts}</small>
                    <img className='w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem]' src="/img/cartBurger/orderBurger.png" alt="" />
                </button>
            </div>
            }

            <div className={`lg:p-[1rem] absolute h-full top-0 z-30 text-white bg-black w-screen lg:w-[25%] overflow-y-scroll scrollbar-hide transition-all duration-300 ${toggleCart ? "right-0" : "-left-full"}`}>
                <div className="flex items-center justify-center m-[1.5rem]">
                    <h2 className="text-center text-gray-300 font-bold text-2xl tracking-[2px] uppercase">My Order</h2>
                </div>


                <div className="m-[.3rem] flex flex-col gap-3">
                    <div className="bg-zinc-950 rounded-[1rem] min-h-[6rem] max-h-[8rem] flex justify-around pr-3">
                        <div className="flex items-center gap-3">
                            <img className="w-[40px]" src="/img/triple.png" alt="" />
                            <div className="">
                                <small className="">Hamburguesa Triple cheddar</small>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-white w-[6rem] flex flex-col items-center gap-4">
                                <small className="text-right w-full text-[1.2rem]">$ 7000</small>
                                <div className="flex items-center justify-around border-2 w-full h-[35px] rounded-[.5rem]">
                                    <button>
                                        {(cartWithProducts <= 1) ?
                                            <HiOutlineTrash className="text-red-600" /> : "-"}</button>

                                    <small>{cartWithProducts}</small>

                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-950 min-h-[6rem] max-h-[8rem] flex justify-around pr-3">
                        <div className="flex items-center gap-3">
                            <img className="w-[40px]" src="/img/triple.png" alt="" />
                            <div className="">
                                <small className="">Hamburguesa Triple cheddar</small>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-white w-[6rem] flex flex-col items-center gap-4">
                                <small className="text-right w-full text-[1.2rem]">$ 7000</small>
                                <div className="flex items-center justify-around border-2 w-full h-[35px] rounded-[.5rem]">
                                    <button>
                                        {(cartWithProducts <= 1) ?
                                            <HiOutlineTrash className="text-red-600" /> : "-"}</button>

                                    <small>{cartWithProducts}</small>

                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-950 min-h-[6rem] max-h-[8rem] flex justify-around pr-3">
                        <div className="flex items-center gap-3">
                            <img className="w-[40px]" src="/img/triple.png" alt="" />
                            <div className="">
                                <small className="">Hamburguesa Triple cheddar</small>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-white w-[6rem] flex flex-col items-center gap-4">
                                <small className="text-right w-full text-[1.2rem]">$ 7000</small>
                                <div className="flex items-center justify-around border-2 w-full h-[35px] rounded-[.5rem]">
                                    <button>
                                        {(cartWithProducts <= 1) ?
                                            <HiOutlineTrash className="text-red-600" /> : "-"}</button>

                                    <small>{cartWithProducts}</small>

                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setToggleCart(false)}>
                    <IoMdClose className="absolute top-[1rem] right-[1rem] text-3xl text-white" />
                </button>
            </div>

        </>
    )
}

export default Cart