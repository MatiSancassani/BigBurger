import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BurguerDetail from "./components/BurguerDetail"
import Menu from "./components/Menu"
import Login from "./components/login/Login"
import LoginEmail from "./components/login/LoginEmail"
import SignIn from "./components/login/SignIn"
import SignUp from "./components/login/SignUp"
import Products from "./admin/Products"
import Additionals from "./admin/Additionals"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/burger/:id" element={<BurguerDetail />} />
        <Route path="/login-email" element={<LoginEmail />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/additionals" element={<Additionals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
