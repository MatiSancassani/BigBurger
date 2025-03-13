import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import BurgersModal from '../shared/Modal';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
const BurguerDetail = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/products/${id}`);
                const data = await response.json();
                setProductos(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) {
            getProductById();
        }
    }, [id]); // <- Se ejecutará solo cuando `id` cambie

    localStorage.setItem('Product', JSON.stringify(productos))
    const { thumbnail, title, description, price } = productos
    return (
        <div className='flex flex-col items-center'>

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

            <div className="flex flex-col items-center justify-center mt-[1.5rem]">
                <div className="">
                    <h2 className="text-center text-[1.5rem] font-bold">{title}</h2>
                    <div className="text-white">
                        <img className='w-[30rem]' src={`https://bigburgerbackend-1.onrender.com${thumbnail}`} alt={title} />
                    </div>
                </div>

                <div className="">
                    <div className="text-white flex flex-col items-center gap-2">

                        <p className='text-left font-bold'>{'$' + ' ' + price}</p>
                        <p className="">{description}</p>
                    </div>
                </div>

                <div className='mt-[3rem]'>
                    <BurgersModal />
                </div>
            </div>
        </div>

    )
}

export default BurguerDetail