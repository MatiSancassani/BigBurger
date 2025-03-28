import { useState } from "react"
import { useEffect } from "react"
import NavBarForMenuComp from "../../shared/NavBar/NavBarForMenuComp"
import CategorySection from "./CategorySection";


const Menu = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://bigburgerbackend-1.onrender.com/api/products");
            const data = await response.json();
            setProductos(data.data);
        };

        getProduct();
    }, []);
    const categorias = ["Classic", "BBQ", "Bacon", "Chicken", "Vegan"];

    return (
        <>
            <NavBarForMenuComp />
            <div className="flex flex-col items-center justify-center mt-[4rem] lg:mt-0">
                <div className="flex flex-col">
                    {categorias.map((categoria) => (
                        <CategorySection key={categoria} category={categoria} productos={productos} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu