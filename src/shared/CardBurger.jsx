import PropTypes from "prop-types";
import { useState } from 'react';
import Modal2 from './Modal2';

const CardBurger = ({ title, thumbnail, id, price, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        localStorage.setItem('ProductID', id);
    }
    return (
        <div className='flex'>
            <button onClick={handleClick} className="w-[15rem] flex flex-col items-center rounded-xl text-white mb-[1rem] gap-2">
                <div className="">
                    <h5 className="text-[1.5rem] font-sans lg:text-xl text-center">
                        {title}
                    </h5>
                </div>
                <div className="">
                    {/* <Link to={`/burger/${id}`}> */}
                    <img className="w-[10rem] lg:hover:translate-y-[-5px] lg:transition-transform lg:duration-[0.3s] lg:ease-in-out" src={`${thumbnail}`} alt={title} />
                    {/* </Link> */}
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <p>Desde {price}</p>
                </div>
            </button>
            <Modal2 className="" isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </div>
    )
}
CardBurger.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
export default CardBurger
