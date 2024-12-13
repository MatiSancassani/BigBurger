import Swal from 'sweetalert2';

const handleButtonClick = ({ count, precio }) => {
    Swal.fire({
        title: 'Confirmación',
        text: `¿Quieres agregar el producto por $${precio * count}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, agregar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            // Acción al confirmar
            Swal.fire('¡Agregado!', 'El producto ha sido agregado al carrito.', 'success');
        }
    });
};

export default handleButtonClick