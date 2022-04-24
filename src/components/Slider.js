import React from 'react';
import { Carousel } from 'react-bootstrap';
import fredperry from '../image/fp_2100x.jpg' 
import levis from '../image/levis_2100x.jpg' 
import obey from '../image/obey_2100x.jpg'
import stussy from '../image/stussy_2100x.jpg'


import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function Slider() {
	
	const navigate = useNavigate()
	const dispath = useDispatch()
	const userApiState = useSelector(state => state.userAPIreducer)
	const brandsHandler = () => {
		navigate("/brands");
	}



	return (
		<Carousel>
			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {levis}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>Levi's Skateboarding</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {fredperry}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>Fred Perry</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {obey}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>Obey</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {stussy}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>Stussy</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		
	
)}