import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Demo from '../shared/Modal';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
const BurguerDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const [productos, setProductos] = useState({});
    const getProductById = async () => {
        const response = await fetch(`https://bigburgerbackend.onrender.com/api/products/${id}`);
        const data = await response.json();
        return data.data
    }
    useEffect(() => {
        getProductById().then((product) => setProductos(product))
    },)

    const { thumbnail, title, description, price } = productos
    return (
        <div className='flex flex-col items-center justify-between h-[100vh]'>

            <div className="hidden text-white lg:flex lg:items-center lg:justify-between z-10">
                <NavBar />
            </div>

            <div>
                <Link to="/menu">
                    <div className="p-[1rem] bg-black w-screen flex items-center justify-start gap-2 text-[1rem] text-white lg:hidden">
                        <div className='flex items-center justify-center pl-[.5rem]'>
                            <IoIosArrowBack />
                        </div>
                        <div>
                            <p className='font-bold'>Menu</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-start lg:h-screen lg:mt-[7rem]">
                <div className="lg:w-1/2 flex">
                    <div className="text-white lg:block">
                        <img src={`https://bigburgerbackend.onrender.com${thumbnail}`} alt={title} />
                        <div className='hidden lg:flex lg:items-center lg:justify-center'>
                            <Demo />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[70%] flex flex-col items-center">
                    <div className="text-white flex flex-col items-center gap-4 lg:gap-8">
                        <h2 className="text-[1.5rem] font-bold md:mt-10 md:text-4xl">{title}</h2>
                        <p className="text-sm md:text-base text-center">
                            {description}
                        </p>
                        <p className='text-center font-bold'>{'$' + ' ' + price}</p>
                    </div>
                </div>
            </div>


            <div className="bg-black w-screen lg:hidden flex items-center justify-center">
                <div className='className="text-white w-screen p-2 md:p-2 flex items-center justify-center'>
                    <Demo />
                </div>

            </div>
        </div>

    )
}

export default BurguerDetail