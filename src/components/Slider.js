import React from 'react';
import { Carousel } from 'react-bootstrap';
import fredperry from '../image/fp_2100x.jpg' 
import levis from '../image/levis_2100x.jpg' 
import obey from '../image/obey_2100x.jpg'
import stussy from '../image/stussy_2100x.jpg'


import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function Slider(props) {
	
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
				src = {props.image1}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>{props.caption1}</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {props.image2}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>{props.caption2}</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {props.image3}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>{props.caption3}</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item style ={{'height':'600px'}}>
				<img 
				className='d-block w-100'
				src = {props.image4}
				alt = "First slide"
				/> 
				<Carousel.Caption>
					<h3>{props.caption4}</h3>
					<Button onClick={brandsHandler} variant="long">Смотреть</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		
	
)}