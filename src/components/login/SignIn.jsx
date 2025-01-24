import React from 'react'
import Email from './Inputs/Email'
import Password from './Inputs/Password'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='hidden lg:h-screen lg:w-[50vw] lg:flex lg:items-center lg:justify-center'>
                <div className=''>
                    <img src="img/login.png" alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className=' text-white flex items-center flex-col justify-center lg:h-screen lg:w-[50vw] lg:items-start lg:pl-[3rem]'>
                    <div className=''>
                        <h1 className='text-center max-w-xl text-[32px] font-bold md:text-5xl'>¡Qué alegría verte de nuevo por aquí!</h1>
                    </div>
                    <div>
                        <h3 className='mt-8 mb-[2rem] text-sm md:text-lg'>Ingresa tus datos</h3>
                    </div>
                    <div className='flex flex-col gap-[3rem]'>
                        <div className=''>
                            <Email />
                        </div>
                        <div className=''>
                            <div>
                                <Password />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[2rem]'>
                        <Link to='/'>
                            <button>Continuar</button>
                        </Link>
                    </div>
                    <div>
                        <p className='mt-[2rem]'>¿No tienes una cuenta?
                            <Link to='/signUp'>
                                <span className='text-[#e99825]'> Registrate</span>
                            </Link>
                        </p>
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn