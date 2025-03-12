import { useState } from 'react'
import { Button } from "../components/ui/button"
import Swal from 'sweetalert2';
import NavBar from '../shared/NavBar/NavBar';
const Additionals = () => {
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        const addAditional = {
            thumbnail: thumbnail,
            title: title,
            price: price,
            category: category
        }

        // Crear un FormData y agregar los campos del formulario
        // const formData = new FormData(e.target);
        // const formObject = Object.fromEntries(formData.entries());

        fetch("https://bigburgerbackend-1.onrender.com/api/additionals", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Necesario si `credentials: true` en backend
            body: JSON.stringify(addAditional),
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
                        <h1 className='text-center font-bold text-[1.2rem]'>Agregar un adicional</h1>
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
                            <h3>Campos Obligatorios</h3>
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
                                <input className='input'
                                    placeholder='Precio'
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    name="price"
                                    id="price"
                                    required />
                                <span className="input-border"></span>
                            </div>
                            <div>
                                <select name="category" id="category" required onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Elige una categoría</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="agregados">Agregados</option>
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
                            {price ? ('$ ' + price) : `$ 0.00`}

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
export default Additionals