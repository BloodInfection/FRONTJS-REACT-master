import React from 'react';
import {Badge, Dropdown, FormControl, InputGroup, DropdownButton, Col, Row} from 'react-bootstrap';
import {useSearchParams } from "react-router-dom";
import Product from '../components/Product'
//import Feed from '../components/Feed'
import styled from 'styled-components';
import productStussy from '../image/product_stussy_bluegray.webp'


export default function Categories() {
	
	const Styles = styled.div`
	.input-group {
		margin: 10px;
    	justify-content: center;
	}
	
	.dropdown-item {
		color: black;
		&:hover {
			color: black;
		}
		&:active {
			background-color: rgba(255, 255, 255, 0.445);
		}
	
	}
	
	
	`
	
	
	const [searchParams, setSearchParams] = useSearchParams();
	let category = searchParams.get("category");
	let brand = searchParams.get("brand");
	searchParams.append("size", "43 RUS")
	
	
	
	return (

		<>
	
		<Badge bg="secondary">Страница категорий c категорией = {category} и брендом = {brand}</Badge>
		<Styles >
	
		<InputGroup className="mr-3" >
			<DropdownButton 
				variant="long"
				title="Бренд"
				id="input-group-dropdown-1"
			>
				<Dropdown.Item href="#">Levi`s</Dropdown.Item>
				<Dropdown.Item href="#">Stussy</Dropdown.Item>
				<Dropdown.Item href="#">Obey</Dropdown.Item>
				<Dropdown.Item href="#">Fred Perry</Dropdown.Item>
				</DropdownButton>

				<DropdownButton 
				variant="long"
				title="Категория"
				id="input-group-dropdown-1"
			>
				<Dropdown.Item href="#">Аксессуары</Dropdown.Item>
				<Dropdown.Item href="#">Верхняя одеждка</Dropdown.Item>
				<Dropdown.Item href="#">Легкий трикотаж</Dropdown.Item>
				<Dropdown.Item href="#">Низ</Dropdown.Item>
				<Dropdown.Item href="#">Обувь</Dropdown.Item>
				<Dropdown.Item href="#">Рубашки и поло</Dropdown.Item>
				<Dropdown.Item href="#">Свитера и толстовки</Dropdown.Item>
				
				</DropdownButton>

				<DropdownButton 
				variant="long"
				title="Размер одежды"
				id="input-group-dropdown-1"
			>	<Dropdown.Item href="#">XS</Dropdown.Item>
				<Dropdown.Item href="#">S</Dropdown.Item>
				<Dropdown.Item href="#">M</Dropdown.Item>
				<Dropdown.Item href="#">L</Dropdown.Item>
				<Dropdown.Item href="#">XL</Dropdown.Item>
				
				
				
				
				</DropdownButton>


			</InputGroup>

			</Styles>

		
	
		
		<Row>
    		<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>
			<Col>	<Product description = "Футболка PIG. DYED INSIDE OUT CREW LAVENDER" name ="STUSSY" url ={productStussy}/></Col>	
  		</Row>
	
		</>
)}