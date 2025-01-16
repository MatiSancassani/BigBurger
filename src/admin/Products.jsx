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
        const response = await fetch("https://bigburgerbackend.onrender.com/api/products/api/products");
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

        fetch("https://bigburgerbackend.onrender.com/api/products/api/products", {
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
            <h1>Agrega nuevos productos</h1>

            <div>
                {productos.map((p) => {
                    return (
                        <Data key={p._id}
                            title={p.title}
                            description={p.description}
                            thumbnail={p.thumbnail}
                            price={p.price} />
                    )
                })
                }
            </div>

            <div>
                <HStack wrap="wrap" gap="4">
                    <For each={["center"]}>
                        {(placement) => (
                            <DialogRoot
                                key={placement}
                                placement={placement}
                                motionPreset="slide-in-bottom"
                            >
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-green-600 rounded-[5px] p-[1rem]">Agregar nuevo producto</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Nuevo Producto</DialogTitle>
                                    </DialogHeader>
                                    <DialogBody>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="title">Título</label>
                                                <input type="text" name="title" id="title" required />
                                            </div>
                                            <div>
                                                <label htmlFor="description">Descripción</label>
                                                <input type="text" name="description" id="description" required />
                                            </div>
                                            <div>
                                                <label htmlFor="thumbnail">Imagen</label>
                                                <input type="file" name="thumbnail" id="thumbnail" accept="image/*" required />
                                            </div>
                                            <div>
                                                <label htmlFor="price">Precio</label>
                                                <input type="number" name="price" id="price" required />
                                            </div>
                                            <div>
                                                <label htmlFor="stock">Stock</label>
                                                <input type="number" name="stock" id="stock" required />
                                            </div>
                                            <div>
                                                <label htmlFor="category">Categoría</label>
                                                <select name="category" id="category" required>
                                                    <option value="">--Elige una categoría--</option>
                                                    <option value="Classic">Classic</option>
                                                    <option value="BBQ">BBQ</option>
                                                    <option value="Bacon">Bacon</option>
                                                    <option value="Chicken">Chicken</option>
                                                    <option value="Vegan">Vegan</option>
                                                </select>
                                            </div>
                                            <Button type="submit">Guardar</Button>
                                        </form>
                                    </DialogBody>
                                    <DialogFooter>
                                        <DialogActionTrigger asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogActionTrigger>
                                    </DialogFooter>
                                    <DialogCloseTrigger />
                                </DialogContent>
                            </DialogRoot>
                        )}
                    </For>
                </HStack>
            </div>
        </>
    )
}

export default Products