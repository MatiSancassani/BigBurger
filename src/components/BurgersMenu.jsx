import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const BurgersMenu = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Resetea el scroll al cargar la página
    }, []);
    return (
        <div className='h-[100vh]'>
            <div className='flex items-center justify-around z-20'>
                <Link to='/'>
                    <img src="/img/logo.png" alt="" className="w-[10rem] h-[8rem] cursor-pointer" />
                </Link>
            </div>
            <h2 className='text-[2rem] text-white text-center'>SPECIALTY SMASH BURGERS</h2>
            <div className='relative left-[-15rem]'>


                <div className='grid grid-cols-3 grid-rows-3 mx-[2rem] absolute'>
                    <div className=' col-start-1 col-end-2 row-start-1 row-end-4'>
                        <img className='w-[60rem] h-[45rem] relative top-[-5rem] z-10' src="/img/burgerheader.png" alt="" />
                    </div>
                    <div className='col-start-2 col-end-3 row-start-1 row-end-4 flex items-start mx-[3rem]'>
                        <ul className='text-white flex flex-col items-start justify-start gap-[2rem] mt-[3rem]'>
                            <li className='w-[100%]'>
                                <h3 className=''>SUROESTE</h3>
                                <p>
                                    Tocino, queso pepperjack, aguacate fresco, lechuga, tomate, cebolla, pepinillos, rociado con mostaza y chile tailandés
                                </p>
                                <div className='flex items-center justify-end '>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Tocino, queso suizo, piña asada, lechuga, tomate, rociado con salsa mayo de miel y sriracha
                                </p>
                                <div className='flex items-center justify-end '>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Macarrones con queso caseros hechos con queso cheddar y mozzarella
                                </p>
                                <div className='flex items-center justify-end '>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Tocino, queso pepperjack, jalapeños, lechuga, tomate, cebolla, pepinillos, pajitas de tortilla, salsa wasabi
                                </p>
                                <div className='flex items-center justify-end '>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Ketchup, mostaza, lechuga, tomate, cebolla y pepinillos
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-start-3 col-end-4 row-start-1 row-end-4 flex items-start mx-[3rem]'>
                        <ul className='text-white flex flex-col items-start gap-[2rem] mt-[3rem]'>
                            <li className='w-[100%]'>
                                <h3 className=''>SUROESTE</h3>
                                <p>
                                    Tocino, queso pepperjack, aguacate fresco, lechuga, tomate, cebolla, pepinillos, rociado con mostaza y chile tailandés
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Tocino, queso suizo, piña asada, lechuga, tomate, rociado con salsa mayo de miel y sriracha
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Macarrones con queso caseros hechos con queso cheddar y mozzarella
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Tocino, queso pepperjack, jalapeños, lechuga, tomate, cebolla, pepinillos, pajitas de tortilla, salsa wasabi
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li>
                            <li className='w-[100%]'>
                                <h3>Title Burger</h3>
                                <p>
                                    Ketchup, mostaza, lechuga, tomate, cebolla y pepinillos
                                </p>
                                <div className='flex items-end justify-end'>
                                    <p className='px-[2rem] mt-[1rem]'>$9000</p>
                                </div>
                            </li >
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BurgersMenu