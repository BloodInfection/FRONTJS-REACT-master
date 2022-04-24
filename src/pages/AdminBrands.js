import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminBrands(){
    return(
		<>
	<Container style={{ padding: '5%' }}>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Бренды </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}