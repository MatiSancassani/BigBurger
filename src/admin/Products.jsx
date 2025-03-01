import React, { useEffect, useState } from 'react'
import { For, HStack } from "@chakra-ui/react"
import { Button } from "../components/ui/button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import Data from './Data'
import Swal from 'sweetalert2';

const Products = () => {
    const getProduct = async () => {
        const response = await fetch("https://bigburgerbackend.onrender.com/api/products");
        const data = await response.json();
        return data.data
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        console.log(productos.category)
        getProduct().then((product) => setProductos(product))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un FormData y agregar los campos del formulario
        const formData = new FormData(e.target);

        fetch("https://bigburgerbackend.onrender.com/api/products", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json().then((data) => {
                        Swal.fire({
                            icon: "success",
                            title: "Producto agregado",
                            showConfirmButton: true,
                        });
                    });
                } else {
                    return res.json().then((data) => {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: data.error || "Ocurrió un error",
                        });
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "info",
                    title: "Error",
                    text: error.message,
                });
            });
    };

    return (
        <>
            <div className='flex'>
                <div className='p-[1rem] border-2 w-[20%]'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center'>Agregar producto</h1>
                        <div className='w-full flex flex-col items-center gap-[2rem]'>
                            <div id="src-file1" className='flex flex-col file-select mt-[2rem]'>
                                <label htmlFor="thumbnail">Imagen</label>
                                <input className='cursor-pointer' type="file" name="thumbnail" id="thumbnail" accept="image/*" required />
                            </div>
                            <h3>Obligatorio</h3>
                            <div className='form'>
                                <input className='input' placeholder='Titulo' type="text" name="title" id="title" required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input className='input' placeholder='Descripcion' type="text" name="description" id="description" required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input className='input' placeholder='Precio' type="number" name="price" id="price" required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input className='input' placeholder='Stock' type="number" name="stock" id="stock" required />
                                <span className="input-border"></span>
                            </div>
                            <div>
                                <select name="category" id="category" required>
                                    <option value="">Elige una categoría</option>
                                    <option value="Classic">Classic</option>
                                    <option value="BBQ">BBQ</option>
                                    <option value="Bacon">Bacon</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Vegan">Vegan</option>
                                </select>
                            </div>
                            <Button type="submit">Guardar</Button>
                        </div>
                    </form>
                </div>
                <div className='border-2 h-screen w-[80%] flex items-start justify-center'>
                    <h2>Vista Previa</h2>
                </div>

            </div>
        </>
    )
}

export default Products