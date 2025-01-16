import { For, HStack } from "@chakra-ui/react"
import { IoIosArrowForward } from "react-icons/io";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import { useState } from "react";
import handleButtonClick from "../shared/Alert";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Modal2 = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState({});
    const getProductById = async () => {
        const response = await fetch(`https://bigburgerbackend.onrender.com/api/products/${id}`);
        const data = await response.json();
        return data.data
    }
    useEffect(() => {
        getProductById().then((product) => setProductos(product))
    }, [])

    const { thumbnail, title, description, price, stock, category, _id } = productos
    const [count, setCount] = useState(1);

    const handleSuma = () => {
        setCount(count + 1);
    }

    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const precio = 12000

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
                            <div className="w-full cursor-pointer flex items-center justify-between gap-[1.5rem] p-[.5rem]">
                                <div className="flex items-center justify-center gap-[1rem]">
                                    <div>
                                        <img className="w-[60px]" src={`https://bigburgerbackend.onrender.com/api/products${thumbnail}`} alt={title} />
                                    </div>
                                    <div>
                                        <h3>Triple Bacon Grande</h3>
                                        <p>$12000</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center text-[1.3rem]">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="lg:w-[80vw] lg:max-w-[1000px] lg:h-auto lg:max-h-[80vh] h-screen">
                            <DialogBody className="mt-[3rem]">

                                <div className="flex items-center justify-center gap-[3rem]">

                                    <div className="hidden lg:block">
                                        <img className="w-[50rem]" src={`https://bigburgerbackend.onrender.com/api/products${thumbnail}`} alt={title} />
                                    </div>

                                    <div className="overflow-auto max-h-[600px] scrollbar-hide">
                                        <div className="mx-[1rem]">
                                            <div className="flex flex-col gap-[1rem]">
                                                <h2 className="text-[20px]">Combo Grande Triple Bacon</h2>
                                                <p className="text-[14px]">$12000</p>
                                                <p className="text-[14px]">Medallón a base de plantas a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga. Acompañado con papas king, gaseosa king y juguete de la licencia que esté en stock o disponible, imagen de carácter ilustrativa.</p>
                                            </div>
                                            <div className="flex items-center justify-between py-[2rem]">
                                                <div className="flex items-center justify-center">
                                                    <p>Cantidad: {count}</p>
                                                </div>
                                                <div className="flex gap-[1rem]">
                                                    <button onClick={handleResta}>-</button>
                                                    <button onClick={handleSuma}>+</button>
                                                </div>
                                            </div>
                                            <p>Adiccionales</p>
                                            <div className="flex flex-col my-[1rem] gap-[.3rem]">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        {/* <CheckBox /> */}
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>Papas Fritas con Cheddar</p>
                                                            <small>+ $ 2,500.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/papascheddar.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        {/* <CheckBox /> */}
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>Papas Fritas Cheddar con Bacon</p>
                                                            <small>+ $ 2,800.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/papascheddarbacon.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>Aros de cebolla con Cheddar</p>
                                                            <small>+ $ 2,000.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/aroscebolla.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Bebida</p>
                                            <div className="flex flex-col my-[1rem] gap-[.3rem]">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        {/* <CheckBox /> */}
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>CocaCola 500ml</p>
                                                            <small>+ $ 2,000.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/cocacola.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        {/* <CheckBox /> */}
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>Fanta 500ml</p>
                                                            <small>+ $ 2,000.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/fanta.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-start gap-[1rem]">
                                                        {/* <CheckBox /> */}
                                                        <input type="checkbox" />
                                                        <div>
                                                            <p>Pepsi 500ml</p>
                                                            <small>+ $ 1,800.00</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-[60px]" src="/img/add/pepsi.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sticky bottom-0 py-[12px] px-[24px] w-full rounded-[34px] bg-black text-white text-[20px]">

                                            <button className="flex items-center justify-between w-full"
                                                onClick={() => handleButtonClick({ precio, count })}>
                                                <p>Agregar</p>
                                                <p>${precio * count}</p>
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

export default Modal2