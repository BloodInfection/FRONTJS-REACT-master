import {React, Component} from 'react';
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router';
import {Nav, Row, Col, Container, Button} from 'react-bootstrap';
import Cart from './Cart';
import Orders from './Orders';
import Favorite from './Favorite';
import Settings from './Settings';
import UserAPIservice from "../services/user-api.service";
import {Link} from 'react-router-dom';
import {useParams, useSearchParams} from "react-router-dom";
import { connect } from 'react-redux'


function withParams(Component) {
    return props => <Component {...props} params={useParams()} url = {useSearchParams()} />;
}

class Profile extends Component{
	constructor(props){
        super(props);
            this.state = {
            };
		this.querryCreate = this.querryCreate.bind(this);     
    }

	querryCreate(param){
		const [searchParams, setSearchParams] = this.props.url;
		setSearchParams({ linkParam: param });
	}
	render(){
		const { isLoggedIn, user } = this.props;
		const [searchParams, setSearchParams] = this.props.url;
		 let param = searchParams.get("linkParam")
		console.log(param)
	return (
	<>
	{!isLoggedIn && <Navigate replace to="/signin" />}
	{isLoggedIn && <Container>
	<Col className= "profileBlock">
		<Row>
			<Col className= "block-example  profileSidebar ">
				<div className='  roundbordersLight profilepadding'>
				<Row><Button variant = "none" className='paddingLeftNo dark' onClick={()=>{this.querryCreate("cart")}}>Корзина</Button></Row>
				<Row><Button variant = "none" className='paddingLeftNo dark' onClick={()=>{this.querryCreate("orders")}}>Заказы</Button></Row>
				<Row><Button variant = "none" className='paddingLeftNo dark' onClick={()=>{this.querryCreate("favorite")}}>Избранное</Button></Row>
				<Row><Button variant = "none" className='paddingLeftNo dark'  onClick={()=>{this.querryCreate("settings")}}>Настройки</Button></Row>
				</div>
			</Col>
			
			<Col >
				<div className='  roundbordersLight usernamePadding' >
				<Row className='displaytable smallPadding'>
					<Col className=' tablecellmiddle '>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgba(24, 49, 63, 0.96) " class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
					</Col>
					<Col className=' tablecellmiddle '>
					<h2 className="block-example  medium dark" style={{"margin-bottom":"0"}}>{user.name+" "+user.patronymic+" "+user.surname}</h2> 
					</Col>
					
				</Row>
				<Row className='displaytable smallPadding'>
					<Col className=' tablecellmiddle '>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="transparent" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
					</Col>

					<Col className=' tablecellmiddle '>
					<p className='dark'>Email: {user.email}</p>
					<p className='dark'> Номер телефона: {user.phone} </p>
					</Col>
				</Row>
				</div>
			</Col>
		</Row>

		<Row className="bigPadding">
			<div  className='  roundbordersLight paddingBottom'>
		{param === "cart" && <Cart/>}
		{param === "orders" && <Orders/>}
		{param === "favorite" && <Favorite/>}
		{param === "settings" && <Settings/>}
		</div>
		</Row>
	</Col>
	</Container>}
	
	</>
	)
	}
	}
	function mapStateToProps(state) {
		const {isLoggedIn, user}  = state.userAPIreducer;
		const {message}  = state.message;
		return {
		  isLoggedIn,
		  message,
		  user
		};
	  }
	  export default withParams(connect(mapStateToProps)(Profile));