import {React, Component}  from 'react';
import Slider from '../components/Slider'
import ProductAPIservice from "../services/product-api.service";
import {Container, Col, Row, FormControl, Form, Dropdown, InputGroup, DropdownButton} from 'react-bootstrap';
import {useParams, useSearchParams, Link} from "react-router-dom";
import Product from '../components/Product';
import { connect } from 'react-redux';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} url = {useSearchParams()} />;
}


class Categories extends Component{
	constructor(props){
		super(props);
		this.state={
			number: 1,
			limit: 20,
			products:[],
		};

		this.querryCreate = this.querryCreate.bind(this); 

	}
	querryCreate(param){
		const [searchParams, setSearchParams] = this.props.url;
		setSearchParams({ linkParam: param });
	}

	componentDidMount(){
		ProductAPIservice.GetListProducts(this.state.number, this.state.limit).then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("listProducts",response)
			
			this.setState({
				products: response.products,
			});
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});
		console.log('products', this.state.products)
	}

	render() {  
		const buildItems = () => { 
			
			if (this.state.products.length ===0) {
				return <Container>
					<h3>Товаров нет</h3>
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
		return (
			<>
					
				
				<Container>
				<Col >
				<Row >
				<InputGroup className="mr-3 onlycenter padding" >
				<DropdownButton 
					variant="long"
					title="Бренд"
					id="input-group-dropdown-1">
					<Dropdown.Item onClick={()=>{this.querryCreate("levis")}}>Levi`s</Dropdown.Item>
					<Dropdown.Item onClick={()=>{this.querryCreate("stussy")}}>Stussy</Dropdown.Item>
					<Dropdown.Item onClick={()=>{this.querryCreate("obey")}}>Obey</Dropdown.Item>
					<Dropdown.Item onClick={()=>{this.querryCreate("fredperry")}}>Fred Perry</Dropdown.Item>
				</DropdownButton>

				<DropdownButton 
					variant="long"
					title="Категория"
					id="input-group-dropdown-1">
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Аксессуары</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Верхняя одеждка</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Легкий трикотаж</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Низ</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Обувь</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Рубашки и поло</Dropdown.Item>
					<Dropdown.Item  onClick={()=>{this.querryCreate("levis")}}>Свитера и толстовки</Dropdown.Item>
				</DropdownButton>
			</InputGroup>
			</Row>
			<Row>
				
				<Col>
				<Row className='centertext justifycenter'>{buildItems()}</Row>
				</Col>
			</Row>
				</Col>
				</Container>
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
export default withParams(connect(mapStateToProps)(Categories));
