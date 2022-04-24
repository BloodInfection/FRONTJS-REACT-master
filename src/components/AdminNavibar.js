
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';



export default function AdminNaviBar(){
return(
    <>
    <Container>
        <Nav  className="flex-column">
            <Nav.Item><Nav.Link> <Link to="/admin/categories">Категории</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link> <Link to="/admin/brands">Бренды</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link ><Link to="/admin/products">Товары</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link ><Link to="/admin/products-final">Товары final</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link ><Link to="/admin/colors">Цвета</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link ><Link to="/admin/sizes">Размеры</Link></Nav.Link></Nav.Item>
        </Nav>
        <Outlet/>
    </Container>
    


    </>
)
}