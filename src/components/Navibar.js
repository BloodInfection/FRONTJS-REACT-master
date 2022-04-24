import React from 'react';
import {Navbar, Nav, Container, Dropdown, /*Button, ButtonGroup*/} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../actions/user-api.action';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link{
	color:  #fff;
	text-decoration: none;
	&:hover {
		color: rgba(255, 255, 255, 0.445);
	}
	&:active {
		color: rgba(255, 255, 255, 0.445);
	}
}

.dropdown-item {
	color: black;
	&:hover {
		color: black;
	}
	&:active {
		background-color: white;
	}

}

`


export default function NaviBar() {
	const navigate = useNavigate()
	const dispath = useDispatch()
	const userApiState = useSelector(state => state.userAPIreducer)

	const logoutHandler = () => {
		dispath(logout());
	}
	const siginHandler = () => {
		navigate("/signin");
	}
	const singupHandler = () => {
		navigate("/signup");
	}
	const profileHandler = () => {
		navigate("/profile");
	}
	const cartHandler = () => {
		navigate("/cart");
	}
	const favoriteHandler = () => {
		navigate("/favorite");
	}

	

	
	
	return (
	<>
	<Styles>
		<Navbar sticky="top" collapseOnSelect expand="lg" >
			<Container>
				<Navbar.Brand><Link to="/">Wearell</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto" >
						
						<Nav.Link><Link to="/categories">Женское</Link></Nav.Link>
						<Nav.Link><Link to="/categories">Мужское</Link></Nav.Link>
						<Nav.Link><Link to="/brands">Бренды</Link></Nav.Link>
					</Nav>
					<Nav>
						
					<Nav.Link><Link to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/></svg></Link></Nav.Link></Nav>
					<Nav.Link><Link to="/admin">Тест админ пейджа</Link></Nav.Link>
					<Nav.Link><Link to="/product">Тест продукт пейджа</Link></Nav.Link>
					{!userApiState.isLoggedIn &&(
					<Nav>
						<Dropdown>
  							<Dropdown.Toggle variant="flat" id="dropdown-basic">
    							Авторизация
  							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={siginHandler}>Вход</Dropdown.Item>
								<Dropdown.Item onClick={singupHandler}>Регистрация</Dropdown.Item>
  							</Dropdown.Menu>
						</Dropdown>
						
					</Nav>)}
					{userApiState.isLoggedIn &&(
					<Nav>
						<Dropdown>
  							<Dropdown.Toggle variant="light" id="dropdown-basic">
								{userApiState.user.name}
  							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={profileHandler}>Профиль</Dropdown.Item>
								<Dropdown.Item onClick={logoutHandler}>Выход</Dropdown.Item>
							</Dropdown.Menu>

						</Dropdown>
						<Nav.Link><Link to="/favorite"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></Link></Nav.Link>
						<Nav.Link><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></Link></Nav.Link>
					</Nav>)}
					
					

				</Navbar.Collapse>
			</Container>
		</Navbar>
		</Styles>
	</>
)}