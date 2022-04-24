import {Form, Button, Container} from 'react-bootstrap';
import React, { Component } from 'react';
import { register } from '../actions/user-api.action'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';



class Register extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		email: "",
		name : "",
		password: "",
		patronymic:"",
		phone:"",
		surname: "",
		
		loading: false,
	  };
	  
	  this.handleReg = this.handleReg.bind(this); // Эта привязка обязательна для работы `this` в колбэке.
	  
	  this.onChangeName = this.onChangeName.bind(this); // Ключевое слово this обычно ссылается на элемент JavaScript в зависимости от области или контекста его использования. 
	  this.onChangeSurname = this.onChangeSurname.bind(this);
	  this.onChangePatronymic = this.onChangePatronymic.bind(this);
	  this.onChangePhone = this.onChangePhone.bind(this);

	  this.onChangeEmail = this.onChangeEmail.bind(this);
	  this.onChangePassword = this.onChangePassword.bind(this);
	}

	onChangeName(e) { //e — это синтетическое событие.
		this.setState({
			name: e.target.value,
		});
	  }

	onChangeSurname(e) {
		this.setState({
			surname: e.target.value,
		});
	  }

	onChangePatronymic(e) {
		this.setState({
			patronymic: e.target.value,
		});
	  }

	onChangePhone(e) {
		this.setState({
			phone: e.target.value,
		});
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
	handleReg(e) {
	  e.preventDefault(); //предотвращение поведения по умолчанию.

	  this.setState({
		loading: true,
	  });
	  const { dispatch } = this.props;

	  console.log("	ВВЕДЕННЫЕ ДАННЫЕ ", this.state.email, this.state.name,  this.state.password,  this.state.patronymic,  this.state.phone, this.state.surname )
	  dispatch(register(this.state.email, this.state.name,  this.state.password,  this.state.patronymic,  this.state.phone, this.state.surname)).then(() => {
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
		<Form onSubmit={this.handleReg}>
			
			<Form.Group className="mb-3" controlId="formBasicname">
				<Form.Label>Имя</Form.Label>
				<Form.Control type="text" placeholder="Имя" value={this.state.name} onChange={this.onChangeName}/>
			
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicSurname">
				<Form.Label>Фамилия</Form.Label>
				<Form.Control type="text" placeholder="Фамилия" value={this.state.surname} onChange={this.onChangeSurname}/>
			
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPatronymic">
				<Form.Label>Отчество</Form.Label>
				<Form.Control type="text" placeholder="Отчество" value={this.state.patronymic} onChange={this.onChangePatronymic}/>
			
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPhone">
				<Form.Label>Номер телефона</Form.Label>
				<Form.Control type="text" placeholder="Номер телефона" value={this.state.phone} onChange={this.onChangePhone}/>
			
			</Form.Group>
			
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Email адрес" value={this.state.email} onChange={this.onChangeEmail}/>
				<Form.Text className="text-muted">
				Мы не делимся информацией с третьими лицами.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Пароль</Form.Label>
				<Form.Control type="password" placeholder="Пароль" value={this.state.password} onChange={this.onChangePassword}/>
			</Form.Group>
			
			<Button variant="flat" type="submit">
				Зарегистрироваться
			</Button>
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

export default connect(mapStateToProps)(Register);


/*
<Container style={{width: "70vh"}} className="mt-3" >
		<Form >
		<Form.Group className="mb-3">
				<Form.Label>Имя</Form.Label>
				<Form.Control type="aria-label" placeholder="Имя" />	
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Фамилия</Form.Label>
				<Form.Control type="aria-label" placeholder="Фамилия" />
			
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Отчество</Form.Label>
				<Form.Control type="aria-label" placeholder="Отчество" />
			
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Email адрес" />
				<Form.Text className="text-muted">
				Мы не делимся информацией с третьими лицами.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Пароль</Form.Label>
				<Form.Control type="password" placeholder="Пароль" />
				<Form.Text className="text-muted">
				Пароль должен содержать не менее 8 символов.
				</Form.Text>
			</Form.Group>
			
			
			<Button variant="flat" type="submit">
				Зарегистрироваться 
			</Button>
		</Form>
	</Container> */