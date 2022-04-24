import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminProducts(){
    return(
		<>
	<Container style={{ padding: '5%' }}>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Товары </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}