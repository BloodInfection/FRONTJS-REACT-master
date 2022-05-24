import React, { Component } from 'react';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';
import { login } from '../actions/user-api.action'
import { connect } from 'react-redux'
import { Navigate, Link} from 'react-router-dom';


class Login extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		email: "",
		password: "",
		loading: false,
	  };
	  
	  this.handleLogin = this.handleLogin.bind(this);
	  this.onChangeEmail = this.onChangeEmail.bind(this);
	  this.onChangePassword = this.onChangePassword.bind(this);
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	  }
	  onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	  }
	handleLogin(e) {
	  e.preventDefault();

	  this.setState({
		loading: true,
	  });
	  const { dispatch } = this.props;

	  console.log(this.state.email, this.state.password)
	  dispatch(login(this.state.email, this.state.password)).then(() => {
		this.setState({
			loading: false,
		  });
        }).Catch(() => {
			this.setState({
				loading: false
			  });
        })
	
	}
	render() {
		const { isLoggedIn, message } = this.props;
		
		return (
			<>
			{isLoggedIn && <Navigate replace to="/profile" />}
			<Container style={{width: "70vh"}} className="mt-3" >
				{message && (
              <Form.Group>
                <Container className="alert alert-danger" role="alert">
                  {message}
                </Container>
              </Form.Group>
            )}
		<Form onSubmit={this.handleLogin}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Email адрес" value={this.state.email} onChange={this.onChangeEmail}/>
			
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Пароль</Form.Label>
				<Form.Control type="password" placeholder="Пароль" value={this.state.password} onChange={this.onChangePassword}/>
			</Form.Group>
			
			<Row className='displaytable'>
				<Col className='tablecellmiddlenowidth'>
				<Button variant="flat" type="submit" style={{'width': '150px'}}>
					Войти
				</Button>
				</Col>
				<Col className='tablecellmiddlenowidth'>	
				<Link to = "/signup" className='simpleLink dark'>Зарегистрироваться</Link>
				</Col>
			</Row>
				
			
		</Form>
	</Container>
	</>
	);
	}
}


function mapStateToProps(state) {
	const {isLoggedIn}  = state.userAPIreducer;
	const {message}  = state.message;
	return {
	  isLoggedIn,
	  message
	};
  }

export default connect(mapStateToProps)(Login);