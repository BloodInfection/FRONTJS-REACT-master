import {React, Component}  from 'react';
import ProductAPIservice from "../services/product-api.service";
import UserAPIservice from "../services/user-api.service";
import {Container, Col, Row} from 'react-bootstrap';
import Product from '../components/Product';
//import {URLSearchParams} from 'http://localhost:3000/'



class Favorite extends Component {

	constructor(props) {
	super(props);
	
	//  const page = new URLSearchParams(this.props.location.search).get("page")
	  
	//console.log(page)
	  this.state = {
		number: 1,
		limit: 20,
		products: [

		],
		
	  }; 
	}
	
	componentDidMount(){
		
	UserAPIservice.GetFavorite().then( 
		(response) => { 
			console.log("GetFavorite",response)
			this.setState({
				products: response.products,
			});
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка GetFavorite',error)
			return Promise.reject();
		});
		console.log('products', this.state.products)
	}	

	
	
	render() {  
		const buildItems = () => { 
				
			if (this.state.products.length ===0) {
				return <Container>
					<h6 style={{ 'color':'#c5c5c5'}}>У Вас пока нет избранных товаров</h6>
					<p style ={{'height': '245px'}}></p>
					</Container>
			}
			return this.state.products.map((item, index)=>{
				console.log(index);
				console.log(item.url);
				return (

				
				
					<Product name = {item.name}  url = {item.url} id = {item.id} price = {item.price}/> 		
				)
				
			})
		}
		

		//get countries = builditems
		return (
			<>
				
				
				
				<Container>
				<h2 className='dark padding medium'>Избранное</h2>
				<Col>
				<Row >{buildItems()}</Row>
			
				</Col>
				</Container>
			</>
		);
	}
}




export default Favorite;

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