import {React, Component} from 'react';
import {useParams} from "react-router-dom";
import UserAPIservice from "../services/user-api.service";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

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
                cartProducts:[],
                orderAllow: true,
                message: "",
                messageClear: "",
                messageUpdate: "",
                

            };
    
            this.createOrder = this.createOrder.bind(this);
            this.clearCart = this.clearCart.bind(this);
            this.updateCartItemQuantity = this.updateCartItemQuantity.bind(this);

           
        
    }

    componentDidMount(){
        this.setState({
            orderAllow: true,
        });
        UserAPIservice.GetCartList().then( //-------------------------------GET CART LIST------------
		(response) => {

				console.log("товары",response.products);
				this.setState({
					cartProducts: response.products,
				});
                response.products.map((item, index)=>{ 
                    if (parseInt(item.amount,10) < parseInt(item.userQuantity,10)){//-------------У С Л О В И Е-----------
                        this.setState({
                            orderAllow: false,
                        });
                    }
                });
                
				return Promise.resolve(); 
			},
		(error) => {
				console.log('ошибка GetCartList',error)
				return Promise.reject();
			}); //-------------------------------GET ENDS------------
    }

    clearCart(){
        UserAPIservice.DeleteCartAll().then( //-------------------------------CLEAR CART------------
		(response) => {
				console.log("корзина очищена", response);
                this.setState({
                    cartProducts: [],
                    messageClear: "Корзина успешно очищена!"
				});
                console.log("message", this.state.messageClear)
                this.render();
				return Promise.resolve();
			},
		(error) => {
				console.log('ошибка DeleteCartAll',error)
                this.setState({
					messageClear: "Ошибка при очищении корзины!",
				});
				return Promise.reject();
			});
    }

    updateCartItemQuantity(finalProductId, id, quantity, availableQuantity){
        if (quantity===0){
            return this.clearCartItem(id)
        }
        if(quantity>availableQuantity){
            this.setState({

            })
        }
        console.log("finalProductId", finalProductId)
        UserAPIservice.UpdateCart(finalProductId, quantity).then( //-------------------------------CLEAR CART------------
		(response) => {
            this.componentDidMount();
            this.forceUpdate();
				console.log("update cart item quantity", response);
                this.render();
				return Promise.resolve();
			},
		(error) => {
            this.componentDidMount();
                this.forceUpdate();
				console.log('ошибка DeleteCupdateCartItemQuantityartAll',error)
				return Promise.reject();
			});
    }
   
    clearCartItem(id){
        UserAPIservice.DeleteCartItem(id).then( //-------------------------------CLEAR CART ITEM------------
		(response) => {
				console.log("товар удален", response);
                this.componentDidMount();
                this.forceUpdate();
				return Promise.resolve();
			},
		(error) => {
				console.log('ошибка DeleteCartItem',error)
                this.componentDidMount();
                this.forceUpdate();
				return Promise.reject();
			});

    }

   

    createOrder(){
        UserAPIservice.postOrder().then( //-------------------------------POST ORDER------------
		(response) => {
				console.log("отправленный заказ",response.products);
                this.setState({
					message: "Заказ успешно создан!",
                    cartProducts: [],
                    
					
				});
                console.log("message", this.state.message)
                this.render();
				return Promise.resolve();

			},
		(error) => {
				console.log('ошибка postOrder',error)
                this.setState({
					message: "Ошибка при создании заказа!",
					
				});
				return Promise.reject();
			});
    }

    render(){
        const buildItems = () => {//-------------B U I L D  I T E M S-----------
            let message = "";
            if (this.state.cartProducts.length ===0) {
				return (
                <h6 style = {{'color':'#c5c5c5'}}>Ваша корзина пуста</h6>
                )
            
					
			}
            return( //-------------H E A D E R-----------
                <><Row className="block-example border-bottom border-cart" >
                    <Col></Col>
                    <Col></Col>
                    <Col className="block-example  centertext">
                        <p>Цена</p>
                    </Col>
                    <Col className="block-example  centertext">
                         <Row> 
                            <Col sm = {1}></Col> 
                            <Col sm = {8}><p>Количество</p></Col>
                            <Col sm = {1}></Col> 
                        </Row>
        
                    </Col>
                    <Col className="block-example  centertext">
                        <p>Итого</p>
                    </Col>
                    <Col className="block-example  centertext">
                        
                    </Col>
                </Row>


                {this.state.cartProducts.map((item, index)=>{ 
                message = "" 
             
                if ( parseInt(item.amount,10) <  parseInt(item.userQuantity,10)){//-------------У С Л О В И Е-----------
                    console.log("item.amount", item.amount)
                console.log("item.userQuantity", item.userQuantity)
                    message = " Меньше на складе, чем выбрано! Уменьшите количество товара."
                }
				console.log("index",index);
				console.log("item.url",item.url);
				return (  //-------------I T E M S-----------
                    <>
                    <Row className="block-example border-bottom border-cart" >
                        <Col >
                            <img src ={item.url} alt = "Изображение товара" style={{'height': '250px'}}/>
                        </Col>
                    <Col>
                        <h5>{item.name}</h5>
                        <p class = "cart">Размер: {item.size}</p>
                        <p>{item.brandName}</p>
                    </Col>
                    <Col className="block-example  centertext">
                        <h4>{item.price} руб.</h4>
                    </Col>
                    <Col className="block-example  centertext">
                        <Row> 
                            <Col sm = {1}><h4 className='cursorlink' onClick={(()=>{this.updateCartItemQuantity(item.fullProductId, item.id, parseInt(item.userQuantity,10)-1)})}>-</h4></Col> 
                            <Col sm = {8}><h4 >  {item.userQuantity} </h4></Col>
                            <Col sm = {1}><h4 className='cursorlink' onClick={(()=>{this.updateCartItemQuantity(item.fullProductId, item.id, parseInt(item.userQuantity,10)+1)})}>+</h4></Col> 
                        </Row>
                        <Row className='textBan'> 
                            {message}
                        </Row>
                    </Col>
                    <Col className="block-example  centertext">
                        <h4>{item.userQuantity * item.price} руб.</h4>
                    </Col>
                    <Col className="block-example  centertext">
                    <Button variant = "none" onClick={(()=>{this.clearCartItem(item.id)})}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></Button>
                    </Col>
              </Row></>				
			    )	
			})}


        <Row className="block-example border-bottom noborder-cart" > 
            <Col><Button variant='none' onClick = {this.clearCart} >Очистить корзину</Button></Col>
            <Col></Col>
            <Col className="block-example  centertext"></Col>
            <Col className="block-example  centertext">
                <Row> 
                    <Col sm = {1}></Col> 
                    <Col sm = {8}></Col>
                    <Col sm = {1}></Col> 
                </Row>
        
            </Col>
            <Col className="block-example  centertext">
                {this.state.orderAllow && <span style ={{'padding-top':'20px'}}><Button variant='flat' onClick = {this.createOrder} >Оформить заказ</Button></span>}
                {!this.state.orderAllow && <span style ={{'padding-top':'20px'}}><Button variant='flatBan'>Оформить заказ</Button></span>}
            </Col>
        </Row></>
            );
        }
	


	return (
	    <>
        <Container>
            <h2 className='dark padding medium'>Корзина</h2>
            {buildItems()}
            <span style ={{'padding-top':'20px'}}>{this.state.message!=="" && <h5 style ={{'color':' #50A2C5'}}>{this.state.message}</h5>}</span>
        </Container>
        </>
	)
    }
}
export default withParams(Cart);