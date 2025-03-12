import { useEffect, useState } from 'react'
import { Button } from "../components/ui/button"
import Swal from 'sweetalert2';
import NavBarToggle from '../shared/NavBar/NavBarToggle';
import NavBar from '../shared/NavBar/NavBar';

const Products = () => {
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [stock, setStock] = useState(null);
    const [category, setCategory] = useState(null);
    const getProduct = async () => {
        const response = await fetch("https://bigburgerbackend-1.onrender.com/api/products");
        const data = await response.json();
        return data.data
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProduct().then((product) => setProductos(product))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un FormData y agregar los campos del formulario
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());


        fetch("https://bigburgerbackend-1.onrender.com/api/products", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObject),
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
            <NavBar />
            <div className='flex items-center justify-center'>
                <div className='w-full p-[1rem] lg:w-[35%]'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center font-bold text-[1.2rem]'>Agregar producto</h1>
                        <div className='flex flex-col items-center gap-[2rem]'>
                            <div id="src-file1" className='flex flex-col file-select mt-[2rem] '>
                                <label htmlFor="thumbnail">Imagen</label>
                                <input
                                    className='cursor-pointer'
                                    type="file" name="thumbnail"
                                    id="thumbnail"
                                    onChange={(e) => setThumbnail(e.target.files[0])}
                                    accept="image/*"
                                    required />
                            </div>
                            <h3>Obligatorio</h3>
                            <div className='form'>
                                <input
                                    className='input'
                                    placeholder='Titulo'
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    name="title"
                                    id="title"
                                    required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input
                                    className='input'
                                    placeholder='Descripcion'
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text"
                                    name="description"
                                    id="description"
                                    required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input className='input'
                                    placeholder='Precio'
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    name="price"
                                    id="price"
                                    required />
                                <span className="input-border"></span>
                            </div>
                            <div className='form'>
                                <input className='input'
                                    placeholder='Stock'
                                    onChange={(e) => setStock(e.target.value)}
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    required />
                                <span className="input-border"></span>
                            </div>
                            <div>
                                <select name="category" id="category" required onChange={(e) => setCategory(e.target.value)}>
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
                <div className='hidden w-[65%] lg:flex lg:flex-col lg:items-center lg:justify-center'>
                    <div className='flex flex-col items-center justify-center gap-[1rem]'>
                        {thumbnail ? (
                            <img src={URL.createObjectURL(thumbnail)} alt="Vista previa" />
                        ) : (
                            <p>Seleccione una imagen</p>
                        )}
                        <h5 className='text-[2rem] font-sans lg:text-xl text-center'>
                            {title ? title : "Titulo:"}
                        </h5>
                        <p className='text-[2rem] font-sans lg:text-xl text-center'>
                            {description ? description : "Descripcion:"}

                        </p>
                        <p className='text-[2rem] font-sans lg:text-xl text-center'>
                            {price ? ('$ ' + price) : `$ 0.00`}

                        </p>
                        <p className='text-[2rem] font-sans lg:text-xl text-center'>
                            {stock ? stock : "Cantidad:"}

                        </p>
                        <p className='text-[2rem] font-sans lg:text-xl text-center'>
                            {category ? category : "Seleccione una categoria"}

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products