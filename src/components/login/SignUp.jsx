import { Link } from 'react-router-dom'
import { useState } from 'react'
import SignIn from './SignIn'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                userName: userName,
                email: email,
                password: password,
                confirmPassword: confirmPassword

            }

            const response = await fetch("https://bigburgerbackend-1.onrender.com/api/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Necesario si `credentials: true` en backend
                body: JSON.stringify(data)
            })
            const dataJson = await response.json();

            if (dataJson.success) {
                setRegisterSuccess(true)
            } else {
                console.log('Error en el registro:', dataJson.error);
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            {registerSuccess ? <SignIn /> : <div className='flex items-center justify-center'>
                <div className='hidden lg:h-screen lg:w-[50vw] lg:flex lg:items-center lg:justify-center'>
                    <div className=''>
                        <img src="img/login.png" alt="" />
                    </div>
                </div>
                <div className='h-screen flex items-center justify-center'>
                    <div className='text-white flex items-center flex-col justify-center lg:h-screen lg:w-[50vw] lg:items-start lg:pl-[3rem]'>
                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <h1 className='mt-2 mb-8 max-w-xl text-[32px] text-center font-bold md:text-5xl'>Ingresa tus datos para registrarte</h1>
                            </div>
                            <div className='flex flex-col gap-[3rem]'>
                                <form action="" className='flex flex-col gap-[2rem]'>

                                    <div className='relative'>
                                        <input
                                            id="userName"
                                            name="userName"
                                            type="text"
                                            onChange={() => { setUserName(event.target.value) }}
                                            placeholder=""
                                            className="border-b w-[20rem] border-gray-300 py-1 focus:border-b-2 focus:border-[#e99825] transition-colors focus:outline-none peer bg-inherit"
                                        />
                                        <label
                                            htmlFor="userName"
                                            className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
                                        >
                                            Username
                                        </label>
                                    </div>

                                    <div className='relative'>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={() => { setEmail(event.target.value) }}
                                            placeholder=""
                                            className="border-b w-[20rem] border-gray-300 py-1 focus:border-b-2 focus:border-[#e99825] transition-colors focus:outline-none peer bg-inherit"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
                                        >
                                            E-mail
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={() => { setPassword(event.target.value) }}
                                            placeholder=""
                                            className="border-b w-[20rem] border-gray-300 py-1 focus:border-b-2 focus:border-[#e99825] transition-colors focus:outline-none peer bg-inherit"
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className=''>
                                        <ul className='flex flex-col items-start justify-center text-2xs text-neutral-300 text-center'>
                                            <li className=''>
                                                {password.length >= 8 && password.length <= 12 ? <span className='text-green-400'>{'✓' + " "}</span> : <span className='text-red-400'>{'✗' + " "}</span>}
                                                <span>Debe tener entre 8 y 12 caracteres</span>
                                            </li>
                                            <li className='my-2'>
                                                {password.match(/[A-Z]/) && password.match(/[a-z]/) ? <span className='text-green-400'>{'✓' + " "}</span> : <span className='text-red-400'>{'✗' + " "}</span>}
                                                <span>Debe incluir mayúsculas y minúsculas</span>
                                            </li>
                                            <li className=''>
                                                {/[0-9]/.test(password) ? <span className='text-green-400'>{'✓' + " "}</span> : <span className='text-red-400'>{'✗' + " "}</span>}
                                                <span>Debe incluir al menos un número</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            name="passwconfirmPasswordord"
                                            type="password"
                                            onChange={() => { setConfirmPassword(event.target.value) }}
                                            placeholder=""
                                            className="border-b w-[20rem] border-gray-300 py-1 focus:border-b-2 focus:border-[#e99825] transition-colors focus:outline-none peer bg-inherit"
                                        />
                                        <label
                                            htmlFor="confirmPassword"
                                            className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
                                        >
                                            Confirm Password
                                        </label>
                                    </div>
                                    {/* {password === confirmPassword ? <span className=''>Ok</span> : <span className='text-red-400'>Las contraseñas deben ser iguales</span>} */}
                                    <div className='flex items-center justify-center'>
                                        <Link to={'/'}>
                                            <button type='submit' onClick={handleSubmit}>Continuar</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>}
        </>

    )
}

export default SignUp