import {React, Component} from 'react';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import UserAPIservice from "../services/user-api.service";
import {Container, Row, Col, Button} from 'react-bootstrap';

	/*{!userApiState.isLoggedIn && (
		<Container><Link to="/signin">войдите</Link> чтобы увидеть корзину</Container>
		)}*/

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class Cart extends Component{
    constructor(props){
        super(props);
            this.state = {
                orders:[],

            };
    
          
            this.getTime = this.getTime.bind(this);
            this.getStatus = this.getStatus.bind(this);
    }

    componentDidMount(){
        UserAPIservice.GetOrderList().then( //-------------------------------GET ORDER LIST------------
		(response) => {
				console.log("ЗАКАЗЫ",response.orders);
				this.setState({
					orders: response.orders,
					
				});
				return Promise.resolve(); 
			},
		(error) => {
				console.log('ошибка GetCartList',error)
				return Promise.reject();
			}); //-------------------------------GET ENDS------------
    }

    getTime(param) {
		var a = new Date(param);
		var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октрября','Ноября','Декабря'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
		return time;
	}

    getStatus(param) {
		if (param == "CREATED") {
			return "Создан" 
		}
		if (param == "DONE") {
			return "Выполнен" 
		}
		if (param == "DECLINED") {
			return "Отменен" 
		}
	}
  
    render(){
        const buildItems = () => {//-------------B U I L D  I T E M S-----------
            if (this.state.orders.length ===0) {
				return (
                <h6 style = {{ 'color':'#c5c5c5'}}>У вас пока нет заказов</h6>
                )
					
			}
            
            return this.state.orders.map((item, index)=>{ 
				console.log("index",index);
				console.log("item.url",item.url);
				return (
                    
                    <Row className="block-example border-bottom border-cart" >
                  
                    <Col className="block-example  ">
                         <p style={{'font-size': '20px',}}>{"WR"+item.id}</p>
                     </Col>
                    <Col  className="block-example  ">
                    <h5 className='medium bright'>{this.getStatus(item.orderStatus)}</h5>
                    </Col>
                    <Col className="block-example  ">
                        <Row> 
                          
                            <Col sm = {8} style={{'width':'150px'}}><h6>  {this.getTime(item.orderDate)} </h6></Col>
                           
                        </Row>
                        <Row> 
                           
                        </Row>
                    </Col>
                    <Col className="block-example  ">
                    <h5>{item.totalPrice} руб.</h5>
                    </Col>
                    <Col className="block-example">
                    <p>Подробнее</p>
                    </Col>
              </Row>
              

				
						
				)
				
			})
          
        }
	
	return (
	<>
    <Container>
	<h2 className="block-example padding dark medium">Заказы</h2>

    <Col>
<Row className="block-example border-bottom border-cart" >
        
        <Col className="block-example  ">
            <p>Номер заказа</p>
        </Col>

        <Col className="block-example  ">
        <p>Статус заказа</p>
        </Col>
        
        <Col className="block-example  ">
        <Row> 
             <Col sm = {8}><p>Дата</p></Col>
        </Row>
        </Col>
        
        <Col className="block-example  ">
        <p>Стоимость</p>
        </Col>

        <Col className="block-example  ">
        
        </Col>
  </Row>

    {buildItems()}
    </Col>
    
  
  </Container>
	</>
	)
    }
}
export default withParams(Cart);