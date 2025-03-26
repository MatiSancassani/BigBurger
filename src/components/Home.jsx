import Header from './Header'
import NavBar from '../shared/NavBar/NavBar'
import Social from './Social'
import Cart from './cart/Cart'

const Home = () => {
    const userCartId = (localStorage.getItem('UserID'));
    const cart_id = userCartId?.cart_id; // ✅ Verifica si `cart_id` existe antes de usarlo

    return (
        <>
            <NavBar />
            <Social />
            <Header />
            {cart_id && <Cart />} {/* ✅ Solo muestra el carrito si hay `cart_id` */}

        </>

    )
}

export default Home