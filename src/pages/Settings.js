import {React, Component} from 'react';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import UserAPIservice from "../services/user-api.service";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

	/*{!userApiState.isLoggedIn && (
		<Container><Link to="/signin">войдите</Link> чтобы увидеть корзину</Container>
		)}*/

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class Settings extends Component{
    constructor(props){
        super(props);
            this.state = {
                orders:[],

            };
    
          
    }

    componentDidMount(){
      
    }


  
    render(){
        const buildItems = () => {//-------------B U I L D  I T E M S-----------
            
           
          
        }
	
	return (
	<>
    <Container>
	<h2 className="block-example padding dark medium">Настройки</h2>

    <Row>

    <Col>
    
        <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить имя:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новое имя" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>

        <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить фамилию:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новая фамилия" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>

        <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить отчество:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новое отчество" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>  
    </Col>

    <Col>
    <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить email:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новый email" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>

        <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить пароль:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новый пароль" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>

        <Row className="block-example displaytable " style={{'padding-top': '20px'}}>
            <Col><p className='dark medium'>Изменить номер телефона:</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="block-example displaytable " >
            <Col className = "centertext tablecellmiddle">
            <Form.Group className="tablecellmiddle" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Новый номер телефона" />
            </Form.Group>
            </Col>
            <Col className = "centertext tablecellmiddle">
            <Button variant= "flat">Применить</Button>
            </Col>
        </Row>  

    </Col>
    </Row>
    
    
  
  </Container>
	</>
	)
    }
}
export default withParams(Settings);