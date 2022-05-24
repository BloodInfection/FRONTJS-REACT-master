import {React, Component} from 'react';
import ProductAPIservice from "../services/product-api.service";
import UserAPIservice from "../services/user-api.service";
import {useParams, Link} from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import {Badge, Dropdown, Button, FormControl, Container, InputGroup, DropdownButton, Col, Row, Form} from 'react-bootstrap';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

const Styles = styled.div`
padding: 5%;
`

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class ProductPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		product:null,
		sizeId:"",
		finalProducts:[],
		messageNoSize: "",
		isFavorite: false,
		favoriteId: "",
		messageInCart: "",
	  }; 

	  this.onChangeSizeId = this.onChangeSizeId.bind(this);
	  this.addToCart = this.addToCart.bind(this);
	  this.loadFullProductList = this.loadFullProductList.bind(this);
	  this.addToFavorite = this.addToFavorite.bind(this);
	  this.deleteFromFavorite = this.deleteFromFavorite.bind(this);
   
	}
	onChangeSizeId(e) {
		this.setState({
			sizeId: e.target.value,
			messageNoSize: "",
			messageInCart: "",
		});
		console.log( e.target.value)
		this.state.finalProducts.map((item, index) => {
			
			if (item.sizeId === e.target.value){
				if(parseInt(item.amount,10)< 1){
					console.log(e.target.value)
					console.log("тут")
					this.setState({
						messageNoSize: "Извините, товара с данным размером нет в наличии."
					})
				}
				if(parseInt(item.userQuantity,10) >= 1) {
					console.log("messageInCart в ифе",this.state.messageInCart)
					this.setState({
						messageInCart: "уже в корзине",
					})
				}
				
			}
		});
	}

	addToCart() {
		let product = this.state.finalProducts.filter((item)=>{return item.sizeId===this.state.sizeId})
		console.log(product);
		UserAPIservice.addToCart(product[0].id, 1).then( //---------------------USER---------API------------
			(response) => {
				this.componentDidMount();
                this.forceUpdate();
					return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
				},
			(error) => {
				this.componentDidMount();
                this.forceUpdate();
					console.log('ошибка addToCart',error)
					return Promise.reject();
				});

	}

	addToFavorite(){
		console.log(this.state.product.id)
		UserAPIservice.postFavorite(this.state.product.id).then( //---------------------USER---------API------------
			(response) => {
				this.componentDidMount();
                this.forceUpdate();
				return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
				},
			(error) => {
					console.log('ошибка postFavorite',error)
					this.componentDidMount();
					this.forceUpdate();
					return Promise.reject();
				});
	}

	deleteFromFavorite(id){

		UserAPIservice.DeleteFavorite(id).then( //---------------------USER---------API------------
			(response) => {
				console.log("товар удален из избранного", response, id);
                this.componentDidMount();
                this.forceUpdate();
					return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
				},
			(error) => {
					console.log('ошибка deleteFromFavorite',error)
					this.componentDidMount();
					this.forceUpdate();
					return Promise.reject();
				});
	}
	
	loadFullProductList(id) {
		ProductAPIservice.GetFinalProductList(id).then( //---------------------GET---------FINAL------------
		(response) => {
			
				console.log("данные товара с айди",response);
				this.setState({
					finalProducts: response.products,
				});
				response.products.map((item, index) => {
					if (item.sizeId === this.state.sizeId){
						if(item.amount<1){
							this.setState({
								messageNoSize: "Извините, товара с данным размером нет в наличии."
							})
							
						}
					}
				});
				return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
			},
		(error) => {
				console.log('ошибка GetFinalProductList',error)
				return Promise.reject();
			});
	}

	componentDidMount(){
		const {id} = this.props.params;
		console.log("id продукта",id)

		ProductAPIservice.GetFullProduct(id).then( //-------------------------------GET------------
		(response) => {
				console.log("данные товара с айди GetFullProduct",response);
				console.log("избранный",response.isFavorite);
				this.setState({
					product: response,
					isFavorite: response.isFavorite,
				});
				console.log("favorite id ",this.state.product.favoriteId)
				if(this.state.product.favoriteId!=="0"){
					this.setState({
						favoriteId: response.favoriteId,
					});
				}
				
				if (this.state.product.sizes.length!==0){
					this.setState({
						sizeId: response.sizes[0].id,
					});
					this.state.finalProducts.map((item,index)=>{
						if(item.sizeId===response.sizes[0].id){
							if(parseInt(item.amount)<1){
								this.setState({
									messageNoSize: "Извините, товара с данным размером нет в наличии"
								})
							}
							console.log("userquantity",item.userQuantity)
							if(parseInt(item.userQuantity)>=1){
								this.setState({
									messageInCart: "Товар уже в корзине",
								})
							}
						}
					})


					this.loadFullProductList(id)
				}
				
				else if (this.state.product.sizes.length===0){
					this.setState({
						messageNoSize: "Извините, товар недоступен."
					})
				}
				if(response.isFavorite === true){
					console.log("это избранный товар")
					this.setState({
						isFavorite: true,
					})
				}
				return Promise.resolve(); 
			},
		(error) => {
				console.log('ошибка GetFullProduct',error)
				return Promise.reject();
			});


	}
	
    render() { 


		const buildSizes = () => {
			if (this.state.product!=null && this.state.product.sizes.length!=0){//item - один размер из списка //индекс - номер размера в списке
				return (
					
					<Form.Select aria-label="Default select example" value={this.state.sizeId} onChange={this.onChangeSizeId}>
					
					{this.state.product.sizes.map((item, index) => (

						<>
						<option value={item.id}>{item.name}</option>
						</>)
					)}
				</Form.Select>
				
				
				)
			} 
		}

		const buildItem = () => {	
			const { isLoggedIn, user } = this.props;
			if (this.state.product === null){
				return(<Container>
					<Row>
					<h1 className='centertext padding'>Товара нет </h1>
					</Row>
					<Row>
					<Link to = "/" className='centertext justifycenter simpleLink dark medium'>На главную</Link>
					</Row>
					</Container>)
			}
			else{
				return(
					<Container>
						<Styles>
							<Row >
								<Col><img src = {this.state.product.url} style={{'width':'100%'}}></img></Col>
    							<Col><h4 className='medium'>{this.state.product.brandName}</h4> 
									<h5 classname = "regular">{this.state.product.name}</h5>
									<p>{this.state.product.description}</p>
									<Form>
										{buildSizes()}
										<h3 style={{'padding-bottom': '5%', 'padding-top': '5%',}} className='medium'>{this.state.product.price} руб.</h3>

										<Row className='displaytable'>
											<Col className=' tablecellmiddle '>
											{this.state.messageInCart === "" && isLoggedIn && this.state.messageNoSize === "" && <Button variant = 'flat' onClick={this.addToCart}>Добавить в корзину</Button>}
											{console.log("message in cart",this.state.messageInCart)}
											{this.state.messageInCart !== "" && isLoggedIn && this.state.messageNoSize !== "" && <Button variant = 'flatBan'>Добавить в корзину</Button>}
											{this.state.messageInCart !== ""  && isLoggedIn && <Button variant = 'flatBan'>Добавить в корзину</Button>}
											{this.state.messageInCart === "" && isLoggedIn && this.state.messageNoSize !== "" && <Button variant = 'flatBan'>Добавить в корзину</Button>}
											{!isLoggedIn && <h5 className='dark'>Пожалуйста, выполните <Link to ="/signin" className='simpleLink dark medium'>вход</Link> для добавления товара в корзину.</h5> }
											
											</Col>
										
											<Col className=' tablecellmiddle '>
											<div>
												

												{this.state.isFavorite && isLoggedIn &&
													<Button variant = "none"  onClick={(()=>{this.deleteFromFavorite(this.state.favoriteId)})}> 
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#67869F" class="bi bi-heart-fill" viewBox="0 0 16 16">
  															<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
														</svg>
													</Button>
												}

												{!this.state.isFavorite && isLoggedIn &&
														<Button variant = "none" onClick={this.addToFavorite}>
															<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#67869F" class="bi bi-heart" viewBox="0 0 16 16">
																<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
															</svg>
														</Button>
												}
											</div>
											</Col>
										
										</Row>

										
									</Form>

									{this.state.messageInCart !== "" && isLoggedIn &&  <h6 className='textBan padding regular'>Товар уже есть в <Link to ="/cart" className='banLink textBan medium'>корзине.</Link></h6> }
									
									<h6 className='padding textBan'>{this.state.messageNoSize}</h6>
									<Row className='displaytable'>
										<Col className=' tablecellmiddle '>
										<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#50A2C5" class="bi bi-truck" viewBox="0 0 16 16">
  											<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
										</svg>
										</div>
										</Col>
										<Col className=''>
										<h5 style={{'padding-top': '5%'}}> Бесплатная доставка </h5>
										</Col>
									</Row>
									<Row className='displaytable padding'>
										<Col className=' tablecellmiddle '>
										<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#50A2C5" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
  											<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  															<path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
													</svg>
										</div>
										</Col>
										<Col className=''>
										<h5 style={{'padding-top': '5%'}}> Гарантия качества </h5>
										</Col>
									</Row>
									
								</Col>
	</Row>
	</Styles>
	</Container>

				);
			}

		}
		
        return (
			<>
				{buildItem()}	
				
			</>
		);
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


  export default withParams(connect(mapStateToProps)(ProductPage));

/*
	ProductAPIservice.GetListProducts(number, limit).then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("listProducts",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});
		*/