import React from 'react';
import {Badge, Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.container {
	margin: 20px;
	j
	
}
.col{
	margin: 25px;
	
}
.row{
	margin: 1%;
}



`

export const Brands = () => (





<Styles>
<Badge bg="secondary">Страница брендов да</Badge>
	<Container>
		

		<Row>
			<Col>Levis</Col>
			<Col>Stussy</Col>
			<Col>Obey</Col>
			
		</Row>
		<Row>
			<Col>Fred Perry</Col>
			<Col>Nike</Col>
			<Col>Supreme</Col>
		</Row>
	</Container>
	</Styles>
)