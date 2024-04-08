import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import User from "./User/User"
import Cart from "./Cart/Cart"









const Routing=()=>{
    return(
        <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Shop" element={<Shop/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/User" element={<User/>}></Route>
           
        </Routes>
    )
}
export default Routing