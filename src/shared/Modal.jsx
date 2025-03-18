import { For, HStack } from "@chakra-ui/react"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger,
} from "../components/ui/dialog"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import handleButtonClick from "../shared/Alert";

const BurgersModal = () => {
    const ayuda = JSON.parse(localStorage.getItem('Product'));

    const { thumbnail, title, description, price } = ayuda
    const { id } = useParams();


    const [productos, setProductos] = useState({});
    const [additionals, setAdditionals] = useState([]);
    const [selectedBurger, setSelectedBurger] = useState("simple");
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [selectedDrink, setSelectedDrink] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/products/${id}`);
                const data = await response.json();
                setProductos(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) fetchProduct();
    }, [id]);
    useEffect(() => {
        const fetchAdditional = async () => {
            try {
                const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/additionals`);
                const data = await response.json();
                setAdditionals(data.data);
            } catch (error) {
                console.error("Error fetching additionals:", error);
            }
        };

        fetchAdditional();
    }, []);


    const options = [
        { id: "simple", price: 1500, label: "Simple", img: "/img/burgertype/simple.png" },
        { id: "doble", price: 2000, label: "Doble", img: "/img/burgertype/doble.png" },
        { id: "triple", price: 2500, label: "Triple", img: "/img/burgertype/triple.png" },
    ];

    // Encontrar el adicional seleccionado
    const selectedOption = options.find(option => option.id === selectedBurger);
    const selectedAdditional = additionals.find(additional => additional._id === selectedFeature);
    const selectedAddDrink = additionals.find(additional => additional._id === selectedDrink);

    // Calcular el total sumando el adicional seleccionado

    const [count, setCount] = useState(1);
    const handleSuma = () => {
        setCount(count + 1);
    }

    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const totalPrice =
        (price * count) +
        (selectedAdditional ? selectedAdditional.price : 0) +
        (selectedAddDrink ? selectedAddDrink.price : 0) +
        (selectedOption ? selectedOption.price : 0);


    const orderData = {
        burger: selectedBurger,
        quantity: count,
        additional: selectedFeature,
        drink: selectedDrink,
        totalPrice: totalPrice,
    };


    return (
        <HStack wrap="wrap" gap="4">
            <For each={["center"]}>
                {(placement) => (
                    <DialogRoot
                        key={placement}
                        placement={placement}
                        motionPreset="slide-in-bottom"
                    >
                        <DialogTrigger asChild>
                            <div className="cursor-pointer">
                                Arma tu burger
                            </div>
                        </DialogTrigger>
                        <DialogContent className="lg:w-[80vw] lg:max-w-[1000px] lg:h-auto lg:max-h-[80vh] h-screen bg-black opacity-95">
                            <DialogBody className="mt-[3rem]">

                                <div className="flex items-center justify-center gap-[3rem]">

                                    <div className="hidden lg:block">
                                        <img className="w-[30rem]" src={`${thumbnail}`} alt={title} />
                                    </div>

                                    <div className="overflow-auto max-h-[600px] scrollbar-hide">

                                        <div className="mx-[1rem] flex flex-col gap-[2rem]">

                                            <div className="flex flex-col items-center gap-[1rem]">
                                                <h2 className="text-[20px] font-bold">{'Burger' + ' ' + title}</h2>
                                                <img className="lg:hidden w-[10rem]" src={`${thumbnail}`} alt={title} />
                                                <p className="text-[14px]">$ {price}</p>
                                                <p className="text-[14px]">{description}</p>

                                            </div>

                                            <div>
                                                <ul className="flex items-center justify-center gap-[1rem]">
                                                    {options.map((option) => (
                                                        <li key={option.id} className="cursor-pointer flex flex-col items-center justify-center">
                                                            <label className="flex flex-col items-center cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="burgerType"
                                                                    value={option.id}
                                                                    checked={selectedBurger === option.id}
                                                                    onChange={() => setSelectedBurger(option.id)}
                                                                    className="hidden"
                                                                />
                                                                <img
                                                                    className={`w-[2.5rem] h-[2.5rem] ${selectedBurger === option.id ? "brightness-50" : ""
                                                                        }`}
                                                                    src={option.img}
                                                                    alt={option.label}
                                                                />
                                                                <small>{option.label}</small>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                    <p>Cantidad: {count}</p>
                                                </div>
                                                <div className="flex gap-[1rem] p-[1rem]">
                                                    <button className="bg-zinc-900 rounded-[10%_/_50%] w-[40px] h-[40px]" onClick={handleResta}>-</button>
                                                    <button className="bg-zinc-900 rounded-[10%_/_50%] w-[40px] h-[40px]" onClick={handleSuma}>+</button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">Adicionales</p>
                                                <small>(Seleccionar 1)</small>
                                            </div>
                                            <div className="flex flex-col my-[1rem] gap-[1rem] p-[.5rem]">
                                                {additionals.map((a) => {
                                                    if (a.category === 'agregados') {
                                                        return (
                                                            <div key={a._id} className="flex items-center justify-between">
                                                                <div className="flex items-center justify-start gap-[1rem]">
                                                                    <input
                                                                        type="radio"
                                                                        id={`feature-${a._id}`}
                                                                        name="features"
                                                                        checked={selectedFeature === a._id}
                                                                        onChange={() => setSelectedFeature(a._id)}
                                                                    />
                                                                    <label htmlFor={`feature-${a._id}`}>
                                                                        <div>
                                                                            <p className="">{a.title}</p>
                                                                            <small>+ $ {a.price}</small>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <img className="w-[60px] lg:ml-[1rem]" src={`${a.thumbnail}`} alt={a.title} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">Bebida</p>
                                                <small>(Seleccionar 1)</small>
                                            </div>

                                            <div className="flex flex-col my-[1rem] gap-[1rem] p-[.5rem]">
                                                {additionals.map((additional) => {
                                                    if (additional.category === 'bebidas') {
                                                        return (
                                                            <div key={additional._id} className="flex items-center justify-between">
                                                                <div className="flex items-center justify-start gap-[1rem]">
                                                                    <input
                                                                        type="radio"
                                                                        id={`drink-${additional._id}`}
                                                                        name="drink"
                                                                        checked={selectedDrink === additional._id}
                                                                        onChange={() => setSelectedDrink(additional._id)}
                                                                    />
                                                                    <label htmlFor={`drink-${additional._id}`}>
                                                                        <div>
                                                                            <p>{additional.title}</p>
                                                                            <small>+ $ {additional.price}</small>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="">
                                                                    <img className="w-[35px]" src={`${additional.thumbnail}`} alt={additional.title} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })}
                                            </div>
                                        </div>

                                        <div className="sticky bottom-0 py-[12px] px-[24px] w-full rounded-[34px] bg-black text-white text-[20px]">

                                            <button className="flex items-center justify-between w-full"
                                                onClick={() => handleButtonClick({ totalPrice, orderData })}>
                                                <p>Agregar</p>
                                                <p>${totalPrice}</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogCloseTrigger />
                        </DialogContent>
                    </DialogRoot>
                )}
            </For>
        </HStack>
    )
}

export default BurgersModal