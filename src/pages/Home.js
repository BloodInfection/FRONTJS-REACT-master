import {React, Component}  from 'react';
import Slider from '../components/Slider'
import ProductAPIservice from "../services/product-api.service";
import {Container, Col, Row, Button} from 'react-bootstrap';
import Product from '../components/Product';
import fredperry from '../image/fp_2100x.jpg' 
import levis from '../image/levis_2100x.jpg' 
import obey from '../image/obey_2100x.jpg'
import stussy from '../image/stussy_2100x.jpg'
import stussyFrame from '../image/stussyFrame2.jpg'
import ripndipFrame from '../image/ripndipframe.jpeg'
import FPFrame from '../image/FredPerryFrame2.jpg'
import pleasuresFrame from '../image/plFrame.jpg'
//import {URLSearchParams} from 'http://localhost:3000/'



class Home extends Component {

	constructor(props) {
	super(props);
	
	//  const page = new URLSearchParams(this.props.location.search).get("page")
	  
	//console.log(page)
	  this.state = {
		number: 1,
		limit: 20,
		products: [],
		
	  }; 
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
		

		//get countries = builditems
		return (
			<>
					
				<Slider caption1="Levi's Skateboarding" image1={levis} caption2="Fred Perry" image2 = {fredperry} caption3="Obey"  image3 = {obey} caption4="Stussy" image4 = {stussy}/>
				<Container>
				
				<Col className='centertext'>
					
					
					

					<Row className='  centertext padding justifycenter'>

						<Col>
							<div class="effects">
 							<img src={pleasuresFrame} alt=""/>
 							<div>
  							<h2 className=''> PLEASURES</h2>
  							<p>Вещи в стиле культурного наследия 1990-х.</p>
  							<Button variant = "long">Подробнее</Button>
 							</div>
							</div>
						</Col>
						<Col>
						<div class="effects">
 							<img src={stussyFrame} alt=""/>
 							<div>
  							<h2>STUSSY</h2>
  							<p>Один из самых популярных брендов уличной одежды. </p>
  							<Button variant = "long">Подробнее</Button>
 							</div>
							</div>
						</Col>
					</Row>
					<Row className='centertext justifycenter'>{buildItems()}</Row>
			
				</Col>
				</Container>
			</>
		);
	}
}




export default Home;

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