import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='hidden lg:h-screen lg:w-[50vw] lg:flex lg:items-center lg:justify-center'>
                <div className=''>
                    <img src="img/login.png" alt="" />
                </div>
            </div>
            <div className='h-screen flex items-center justify-center'>
                <div className=' text-white flex items-center flex-col justify-center lg:h-screen lg:w-[50vw] lg:items-start lg:pl-[3rem]'>
                    <div>
                        <h1 className='w-[22rem] lg:w-96 max-w-xl text-[29px] font-bold md:max-w-[34rem] lg:text-5xl mb-[3rem]'>Te damos la Bienvenida a BigBurger</h1>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold  mb-[2rem]'>Inicia sesión</h3>
                    </div>
                    <div className='flex flex-col gap-[2rem] items-start'>
                        <div className='w-[20rem] cursor-pointer flex items-center p-[1rem] lg:w-[25rem] hover:bg-black hover:bg-opacity-50 rounded border border-neutral-400 font-bold '>
                            <div className='pr-[1rem]'>
                                <FcGoogle />
                            </div>
                            <div className='text-[.875rem]'>
                                Continuar con Google
                            </div>
                        </div>
                        <div className='w-[20rem] cursor-pointer flex items-center p-[1rem] lg:w-[25rem] hover:bg-black hover:bg-opacity-50 rounded border border-neutral-400 font-bold'>
                            <div className='pr-[1rem] text-[#1877f2]'>
                                <FaFacebook />
                            </div>
                            <div className='text-[.875rem]'>
                                Continuar con Facebook
                            </div>
                        </div>
                        <div className='w-[20rem] cursor-pointer flex items-center p-[1rem] lg:w-[25rem] hover:bg-black hover:bg-opacity-50 rounded border border-neutral-400 font-bold'>
                            <div className='pr-[1rem]'>
                                <FaApple />
                            </div>
                            <div className='text-[.875rem]'>
                                Continuar con Apple
                            </div>
                        </div>
                        <Link to='/login-email'>
                            <div className='w-[20rem] cursor-pointer flex items-center p-[1rem] lg:w-[25rem] mb-[5rem] hover:bg-black hover:bg-opacity-50 rounded border border-neutral-400 font-bold'>
                                <div className='pr-[1rem] text-white'>
                                    <TfiEmail />
                                </div>
                                <div className='text-[.875rem]'>
                                    Continuar con correo electronico
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link to='/'>
                        <div className='flex items-center justify-center gap-[.5rem] cursor-pointer hover:underline text-sm'>
                            <p >Continuar como invitado</p>
                            <RiArrowRightLine />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login