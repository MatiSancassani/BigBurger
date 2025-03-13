import CardBurger from "../shared/CardBurger"
import { useState } from "react"
import { useEffect } from "react"
import NavBarForMenuComp from "../shared/NavBar/NavBarForMenuComp"

const Menu = () => {
    const getProduct = async () => {
        const response = await fetch("https://bigburgerbackend-1.onrender.com/api/products");
        const data = await response.json();
        return data.data

    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProduct().then((product) => setProductos(product))
    }, [])

    return (
        <>
            <NavBarForMenuComp />
            <div className="flex flex-col items-center justify-around " >
                <div className="mx-[15rem]">
                    <div>
                        <h2 id="classics" className="text-white">CLASSICS</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Classic") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="bbq" className="text-white">BBQ</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "BBQ") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="bacon" className="text-white">BACON</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Bacon") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="chicken" className="text-white">CHICKEN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Chicken") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                    <div>
                        <h2 id="vegan" className="text-white">VEGAN</h2>
                    </div>
                    <div className="flex items-center justify-evenly gap-[1rem] flex-wrap mb-[2rem]
                lg:items-center lg:justify-start lg:gap-[1rem] lg:flex-wrap lg:mb-[2rem]">
                        {productos.map((p) => {
                            if (p.category === "Vegan") {

                                return (
                                    <CardBurger key={p._id}
                                        id={p._id}
                                        title={p.title}
                                        description={p.description}
                                        thumbnail={p.thumbnail}
                                        price={p.price}
                                        category={p.category} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu