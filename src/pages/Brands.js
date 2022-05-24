import {React, Component}  from 'react';
import ProductAPIservice from "../services/product-api.service";
import {Badge, Container, Col, Row} from 'react-bootstrap';


class Brands extends Component {
	constructor(props) {
		super(props);
		  this.state = {
			brands: [],
		  }; 
		}

		componentDidMount(){
			ProductAPIservice.GetListBrandGroup().then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("GetListBrand brandgroups",response.brandGroups)
			this.setState({
				brands: response.brandGroups,
			});
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка GetListBrand',error)
			return Promise.reject();
		});
		console.log('products', this.state.brandGroups)
		}
		render() { 
			const buildItems = () => {
				if (this.state.brands.length !== 0) {
					return (
					<>
					{this.state.brands.map((item)=>
						<>
						{item.brands.map((brand)=> <Col className=' padding centertext brandtable'>{brand.name}</Col>)}
						</>
					)}
					</>);
				}
			}
			return (
			<Container>
		
				<Col className = "padding">
						<Row className='centertext brandtable'>
						
					{buildItems()}
			
			
						</Row>
				</Col>
			</Container>
			
		);
		}
}

export default Brands;










	