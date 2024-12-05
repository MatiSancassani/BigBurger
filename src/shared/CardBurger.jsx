import React from 'react'
import { Link } from 'react-router-dom'

const CardBurger = () => {
    return (
        <div className="w-[20rem] flex flex-col items-center justify-center rounded-xl text-white mb-[1rem] p-[0.5rem]">

            <div className="">
                <Link to={'/burger/:id'}>
                    <img className="lg:w-[20rem] lg:hover:translate-y-[-20px] lg:transition-transform lg:duration-[0.3s] lg:ease-in-out" src="/img/burgersTypes/triple.png" alt="" />
                </Link>
            </div>

            <div className="">
                <h5 className="text-[2rem] font-sans lg:text-xl text-center">
                    Triple Bacon
                </h5>
            </div>
        </div>
    )
}

export default CardBurger
