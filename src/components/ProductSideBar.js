import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import  ReactDOM from 'react-dom';
import {Button, Card, Container} from 'react-bootstrap';

export default function ProductSideBar(props) {
	const userApiState = useSelector(state => state.userAPIreducer)

	

	return (
	<>
	<Container>
	<h4>LAZY OAF</h4>
	<h5>Юбка CHECKERS MIDI PINK/WHITE</h5>
	<p>Мини-юбка из хлопкового денима в «шахматную» клетку.</p>
	
	</Container>
	</>
	)
}


