import PropTypes from "prop-types";
import CardBurger from "./CardBurger";

const CategorySection = ({ category, productos }) => {
    const filteredProducts = productos.filter((p) => p.category === category);

    return (
        <div>
            <h2 id={category.toLowerCase()} className="text-white p-[2rem] text-[1.5rem] font-bold">
                {category.toUpperCase()}
            </h2>
            <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
          lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                {filteredProducts.map((p) => (
                    <CardBurger
                        key={p._id}
                        id={p._id}
                        title={p.title}
                        description={p.description}
                        thumbnail={p.thumbnail}
                        price={p.price}
                    />
                ))}
            </div>
        </div>
    );
};

CategorySection.propTypes = {
    category: PropTypes.string.isRequired,  // Debe ser un string, no un array
    productos: PropTypes.arrayOf(           // Debe ser un array de objetos
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CategorySection;