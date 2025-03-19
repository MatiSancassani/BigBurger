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
import { toast, ToastContainer, Zoom } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import '../../src/index.css'
import SuccessIcon from "./SuccessIcon ";


const BurgersModal = () => {
    const ayuda = JSON.parse(localStorage.getItem('Product'));
    const handleAddToCart = () => {
        toast.success('Listo! Agregado al carrito', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            closeButton: false,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            icon: <SuccessIcon />,
        });
        console.log(orderData)
    }

    const { thumbnail, title, description, price } = ayuda
    const { id } = useParams();


    const [productos, setProductos] = useState({});
    const [additionals, setAdditionals] = useState([]);
    const [selectedBurger, setSelectedBurger] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [selectedDrink, setSelectedDrink] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const handleFeatureChange = (featureId) => {
        if (selectedFeatures.includes(featureId)) {
            // Si el adicional ya está seleccionado, lo elimina
            setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
        } else {
            // Si el adicional no está seleccionado, lo agrega
            setSelectedFeatures([...selectedFeatures, featureId]);
        }
    };

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


    // Encontrar el adicional seleccionado
    const selectedOption = additionals.find(additional => additional._id === selectedBurger);
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
        price * count +
        selectedFeatures.reduce((acc, featureId) => {
            const feature = additionals.find((a) => a._id === featureId);
            return acc + (feature ? feature.price : 0);
        }, 0) +
        (selectedAddDrink ? selectedAddDrink.price : 0) +
        (selectedOption ? selectedOption.price : 0);


    const orderData = {
        quantity: count,
        additionals: [
            selectedBurger ? { id: selectedBurger, quantity: 1 } : null,
            ...selectedFeatures.map((id) => ({ id, quantity: 1 })),
            selectedDrink ? { id: selectedDrink, quantity: 1 } : null,
        ].filter(Boolean),
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

                                            <div className="flex items-center justify-center gap-[1rem]">
                                                {additionals.map((a) => {
                                                    if (a.category === 'combo') {
                                                        return (
                                                            <div key={a._id} className="cursor-pointer flex flex-col items-center justify-center">
                                                                <label className="flex flex-col items-center cursor-pointer">
                                                                    <input
                                                                        type="radio"
                                                                        name="burgerType"
                                                                        value={a._id}
                                                                        checked={selectedBurger === a._id}
                                                                        onChange={() => setSelectedBurger(a._id)}
                                                                        className="hidden"
                                                                    />
                                                                    <img
                                                                        className={`w-[2.5rem] h-[2.5rem] ${selectedBurger === a._id ? "brightness-50" : ""
                                                                            }`}
                                                                        src={a.thumbnail}
                                                                        alt={a.title}
                                                                    />
                                                                </label>
                                                            </div>
                                                        )
                                                    }

                                                })}
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
                                                                        type="checkbox"
                                                                        id={`feature-${a._id}`}
                                                                        name="features"
                                                                        checked={selectedFeatures.includes(a._id)}
                                                                        onChange={() => handleFeatureChange(a._id)}
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
                                            <button
                                                className="flex items-center justify-between w-full"
                                                onClick={handleAddToCart}>
                                                <p>Agregar</p>
                                                <p>${totalPrice}</p>
                                            </button>
                                            <ToastContainer />
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