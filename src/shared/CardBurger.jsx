import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const CardBurger = ({ title, thumbnail, id }) => {
    return (
        <div className="min-h-[20rem] w-[20rem] flex flex-col items-center justify-between rounded-xl text-white mb-[1rem] p-[0.5rem]">
            <div className="">
                <Link to={`/burger/${id}`}>
                    <img className="lg:w-[20rem] lg:hover:translate-y-[-5px] lg:transition-transform lg:duration-[0.3s] lg:ease-in-out" src={`https://bigburgerbackend-1.onrender.com${thumbnail}`} alt={title} />
                </Link>
            </div>
            <div className="">
                <h5 className="text-[2rem] font-sans lg:text-xl text-center">
                    {title}
                </h5>
            </div>
        </div>
    )
}
CardBurger.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
export default CardBurger
