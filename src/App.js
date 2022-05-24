import Navibar from './components/Navibar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Favorite from './pages/Favorite'
import Cart from './pages/Cart'
import Search from './pages/Search'
import Home from './pages/Home'
import Brands from './pages/Brands'
import ProductPage from './pages/ProductPage'
import Orders from './pages/Orders'
import Settings from './pages/Settings'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  
  return (
   
    <>
    
    <Router>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/brands" element={<Brands/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/favorite" element={<Favorite/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/product/:id" element={<ProductPage/>}></Route>
        <Route path = "/orders" element={<Orders/>}></Route>
        
      
          
      </Routes>
    </Router>
    
   
    </>
  );
}

export default App;
