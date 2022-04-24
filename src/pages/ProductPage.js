import {React, Component} from 'react';
import ProductAPIservice from "../services/product-api.service";
import {Container, Col, Row} from 'react-bootstrap';
import ProductSideBar from '../components/ProductSideBar';

class ProductPage extends Component {
	constructor(props) {
	  super(props);
	   
	}

	
    render() { 
        
		const buildItems = () => {
           
          
          console.log(<ProductSideBar description =  "heh" name = "lol"/> )
			
		}
		
        return (
			<>
					
				<Container>

                <ProductSideBar />
			
				
				</Container>
			</>
		);
	}
}




export default ProductPage;

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