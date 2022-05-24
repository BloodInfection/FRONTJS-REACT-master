import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import  ReactDOM from 'react-dom';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Product(props) {
	const userApiState = useSelector(state => state.userAPIreducer)
	let navigate = useNavigate();
	const redirectToProductPage = (itemId) => {
		navigate("/product/"+ itemId)
	}
	return (
	<>
	<Card style={{ width: '16.5rem' , margin: '20px'}}data-testid="product-card"> 
  		<Card.Img variant="top" className = "cursorlink" src={props.url } onClick={()=>{redirectToProductPage(props.id)}} />
  		<Card.Body className='displaytable'>
    		<div className='tablecellbottom centertext'>
			<Card.Title>{props.name}</Card.Title>
			<Card.Text>
				<h6 className='medium'>{props.price} руб.</h6>
			</Card.Text>
			<Button variant="flat centertext" style={{'width': '90%'}} onClick={()=>{redirectToProductPage(props.id)}}>Подробнее</Button>
			
			</div>
  		</Card.Body>
	</Card>
	</>
	)
}