import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminColors(){
    return(
		<>
	<Container style={{ padding: '5%' }}>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Цвета </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}