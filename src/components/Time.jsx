import React from 'react'
import { GiMeat, GiHamburger } from "react-icons/gi";
import { TbClockCheck } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";

const Time = () => {
    return (
        <div className='h-[100vh]'>
            <div id='time' className='w-[auto] flex items-center justify-center'>
                <div>
                    <img id='preparationImg' className='w-[40rem] ml-[10rem]' src="/img/preparation2.png" alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-[50%] flex flex-col items-center gap-[3rem] text-white'>
                        <h2 className='text-center text-[4rem]'>TIME OF PREPARATION</h2>
                        <p className=' text-[1.5rem] w-[50rem] mb-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse reprehenderit placeat omnis repellat fugiat, aut et deserunt voluptatem, distinctio nihil corrupti reiciendis? Temporibus, quia minima veniam quibusdam ipsam soluta.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse reprehenderit placeat omnis repellat fugiat, aut et deserunt voluptatem, distinctio nihil corrupti reiciendis? Temporibus, quia minima veniam quibusdam ipsam soluta.</p>
                        <div className='flex gap-[5rem]'>
                            <div className='w-[50%] flex items-center gap-[1rem]'>
                                <GiMeat className='text-yellow-300 text-[3.3rem] flex-shrink-0' />
                                <p className='flex-grow'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse reprehenderit placeat omnis repellat fugiat
                                </p>
                            </div>

                            <div className='w-[50%]  flex items-center gap-[1rem]'>
                                <TbClockCheck className='text-yellow-300 text-[3.3rem] flex-shrink-0' />
                                <p className='flex-grow'>Lorem ipsum dolor sit, amet consecteturt</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-[5rem]'>
                            <div className='w-[50%] flex items-center gap-[1rem]'>
                                <GiHamburger className='text-yellow-300 text-[3.3rem] flex-shrink-0' />
                                <p className='flex-grow'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse reprehenderit placeat omnis repellat fugiat</p>
                            </div>
                            <div className='w-[50%] flex items-center gap-[1rem]'>
                                <MdOutlineSavings className='text-yellow-300 text-[3.3rem] flex-shrink-0' />
                                <p className='flex-grow'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse reprehenderit placeat omnis repellat fugiat</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Time