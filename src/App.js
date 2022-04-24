import Navibar from './components/Navibar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Favorite from './pages/Favorite'
import Search from './pages/Search'
import Home from './pages/Home'
import {Brands} from './pages/Brands'
import ProductPage from './pages/ProductPage'

import AdminCategories from './pages/AdminCategories'
import AdminBrands from './pages/AdminBrands'
import AdminProducts from './pages/AdminProducts'
import AdminProductsFinal from './pages/AdminProducts-Final'
import AdminColors from './pages/AdminColors'
import AdminSizes from './pages/AdminSizes'
import AdminHome from './pages/AdminHome'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/*style="position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;"*/

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
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        
        <Route path="/admin" element={<AdminHome/>}></Route>
          
          <Route path="/admin/categories" element={<AdminCategories/>}></Route>
          <Route path="/admin/brands" element={<AdminBrands/>}></Route>
          <Route path="/admin/products" element={<AdminProducts/>}></Route>
          <Route path="/admin/colors" element={<AdminColors/>}></Route>
          <Route path="/admin/products-final" element={<AdminProductsFinal/>}></Route>
          <Route path="/admin/sizes" element={<AdminSizes/>}></Route>
          
       
        
        
       
        
        
    
      </Routes>

     

    </Router>
    <Footer style ={{'position': 'absolute', 'left': '0','bottom': '0','width': '100%','height': '80px'}}/>
    </>
  );
}

export default App;
