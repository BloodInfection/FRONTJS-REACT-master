import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {Badge, Container} from 'react-bootstrap';

export default function  Favorite() {
	const userApiState = useSelector(state => state.userAPIreducer)

	return (
	<>
	<Badge bg="secondary">избранное пользователя</Badge>
	{!userApiState.isLoggedIn && (
		<Container><Link to="/signin">войдите</Link> чтобы увидеть свое избранное</Container>
		)}
	</>
	)
}