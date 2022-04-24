import React from 'react';
//import Navibar from '../components/Navibar'
import ProductAPIservice from "../services/product-api.service";
import {Container,  Row, Col} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import AdminNaviBar from '../components/AdminNavibar';

export default function Home() { //экспорт по умолчанию ф-ию хоум(если не будет экспорта не смоогу вызвать в другом файле). Если ее не нужно экспортировать то без экспорт дефолт
 const number = 1;
 const limit = 10;
 const id = 2;	
 const message = "Леша мой любименький покажи пипиську"
 const productId = 2;
//ProductAPIservice.productList(page,limit).then =  a = ProductAPIservice.productList(page,limit); a.then, у переменной a есть ф-ия then. 
//promice(это типа а) - это переменная у которой есть ф-ия класса/метод класса(then), куда можно положить 2 ф-ии (успех и нет)
//ProductAPIservice - кдасс
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

	ProductAPIservice.GetBrand(id).then( 
		(response) => { 
			console.log("GetBrand",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка GetBrand',error)
			return Promise.reject();
		});

	

	/*ProductAPIservice.Deletecolor(7).then(  //ПРОСТО ДЛЯ ПРИМЕРА id 
		(response) => { 
			console.log("colorDelete",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка colorDelete',error)
			return Promise.reject();
		}); */
	//Levi's Skateboarding Fred Perry Obey Stussy

	return(
		<>
	<Container style={{ padding: '5%' }}>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Страница администратора </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
	}