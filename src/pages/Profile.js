import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router';
import {Badge} from 'react-bootstrap';

export default function Profile() {
	const userApiState = useSelector(state => state.userAPIreducer)

	return (
	<>
	{!userApiState.isLoggedIn && <Navigate replace to="/signin" />}
	<Badge bg="secondary">профиль пользователя</Badge>
	</>
	)
}