import React from 'react'
import { Link } from 'react-router-dom'
import Email from './Inputs/Email'
import Password from './Inputs/Password'
import ConfirmPassword from './Inputs/ConfirmPassword'

const SignUp = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='hidden lg:h-screen lg:w-[50vw] lg:flex lg:items-center lg:justify-center'>
                <div className=''>
                    <img src="img/login.png" alt="" />
                </div>
            </div>
            <div className='h-screen flex'>
                <div className=' text-white flex items-center flex-col justify-center lg:h-screen lg:w-[50vw] lg:items-start lg:pl-[3rem]'>
                    <div>
                        <h1 className='mt-2 max-w-xl text-[32px] font-bold md:text-5xl'>Tus datos</h1>
                    </div>
                    <div>
                        <h3 className='mt-8 mb-[2rem] text-sm md:text-lg'>Ingresa tus datos para registrarte</h3>
                    </div>
                    <div className='flex flex-col gap-[3rem]'>
                        <div className=''>
                            <Email />
                        </div>
                        <div className=''>
                            <Password />
                            <ul className='mb-2 text-2xs text-neutral-300'>
                                <li className='mt-2 flex flex-row items-center gap-2'>
                                    <span>Debe tener entre 8 y 12 caracteres</span>
                                </li>
                                <li className='my-2 flex flex-row items-center gap-2'>
                                    <span>Debe incluir mayúsculas y minúsculas</span>
                                </li>
                                <li className='flex flex-row items-center gap-2'>
                                    <span>Debe incluir al menos un número y un carácter especial</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ConfirmPassword />
                        </div>
                    </div>
                    <div className='mt-[2rem]'>
                        <Link to={'/'}>
                            <button>Continuar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp