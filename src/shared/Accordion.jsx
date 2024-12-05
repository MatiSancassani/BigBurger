import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <div className="flex cursor-pointer px-4 py-3 md:p-0">
                    <h2 className="text-sm md:text-lg font-bold">Información nutricional</h2>
                </div>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-indigo-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className='flex items-center justify-center gap-4 m-[1rem]'>
                        <div className='flex h-24 w-[8.5rem] flex-col items-center gap-1 rounded-lg p-4 tracking-[-0.15px] shadow-elevation-down bg-white text-black'>
                            <p className="w-full text-lg font-bold">14g</p>
                            <div className='w-full text-xs *:inline'>
                                <p className='text-mcd-secondaryDarkGrey'>Grasas</p>
                                <p>
                                    <span className='text-mcd-secondaryGrey'>
                                        (26% I.D.R)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='flex h-24 w-[8.5rem] flex-col items-center gap-1 rounded-lg p-4 tracking-[-0.15px] shadow-elevation-down bg-white text-black'>
                            <p className="w-full text-lg font-bold">14g</p>
                            <div className='w-full text-xs *:inline'>
                                <p className='text-mcd-secondaryDarkGrey'>Grasas</p>
                                <p>
                                    <span className='text-mcd-secondaryGrey'>
                                        (26% I.D.R)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='flex h-24 w-[8.5rem] flex-col items-center gap-1 rounded-lg p-4 tracking-[-0.15px] shadow-elevation-down bg-white text-black'>
                            <p className="w-full text-lg font-bold">14g</p>
                            <div className='w-full text-xs *:inline'>
                                <p className='text-mcd-secondaryDarkGrey'>Grasas</p>
                                <p>
                                    <span className='text-mcd-secondaryGrey'>
                                        (26% I.D.R)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='flex h-24 w-[8.5rem] flex-col items-center gap-1 rounded-lg p-4 tracking-[-0.15px] shadow-elevation-down bg-white text-black'>
                            <p className="w-full text-lg font-bold">14g</p>
                            <div className='w-full text-xs *:inline'>
                                <p className='text-mcd-secondaryDarkGrey'>Grasas</p>
                                <p>
                                    <span className='text-mcd-secondaryGrey'>
                                        (26% I.D.R)
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="my-1 w-full table-fixed text-black">
                            <thead className="bg-[#EAEAEA] text-xs">
                                <tr>
                                    <th className="w-6/12 p-4 text-start">Información Nutricional</th>
                                    <th className="p-4 pl-0 text-start">Por Producto</th>
                                    <th className="p-4 pl-0 text-start">I.D.R%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-xs bg-white">
                                    <td className="p-4">Calorías (Kcal)</td>
                                    <td className="p-4 pl-0">289Kcal</td>
                                    <td className="p-4 pl-0">14%</td>
                                </tr>
                                <tr className="text-xs bg-[#f9f9f9]">
                                    <td className="p-4">Grasas</td>
                                    <td className="p-4 pl-0">14g</td>
                                    <td className="p-4 pl-0">26%</td>
                                </tr>
                                <tr className="text-xs bg-white">
                                    <td className="p-4">Carbohidratos Totales</td>
                                    <td className="p-4 pl-0">32g</td>
                                    <td className="p-4 pl-0">11%</td>
                                </tr>
                                <tr className="text-xs bg-[#f9f9f9]">
                                    <td className="p-4">Proteínas</td>
                                    <td className="p-4 pl-0">14g</td>
                                    <td className="p-4 pl-0">19%</td>
                                </tr>
                                <tr className="text-xs bg-white">
                                    <td className="p-4">Sodio</td>
                                    <td className="p-4 pl-0">660mg</td>
                                    <td className="p-4 pl-0">27%</td>
                                </tr>
                                <tr className="text-xs bg-[#f9f9f9]">
                                    <td className="p-4">Grasas trans</td>
                                    <td className="p-4 pl-0">0.4g</td>
                                    <td className="p-4 pl-0">0%</td>
                                </tr>
                                <tr className="text-xs bg-white">
                                    <td className="p-4">Grasas Saturadas</td>
                                    <td className="p-4 pl-0">5.95g</td>
                                    <td className="p-4 pl-0">27%</td>
                                </tr>
                                <tr className="text-xs bg-[#f9f9f9]">
                                    <td className="p-4">Fibra</td>
                                    <td className="p-4 pl-0">2.38g</td>
                                    <td className="p-4 pl-0">10%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;