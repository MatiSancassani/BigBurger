import Home from "./components/Home"
import BurgersMenu from "./components/BurgersMenu"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BurguerDetail from "./components/BurguerDetail"
// import Footer from "./shared/Footer"
import Menu from "./components/Menu"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/burgers" element={<BurgersMenu />} />
        <Route path="/burger/:id" element={<BurguerDetail />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
