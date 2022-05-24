import React from 'react';
import styled from 'styled-components';
import ProductAPIservice from "../services/product-api.service";
import {Container, Col, Row, Spinner} from 'react-bootstrap';
import Product from '../components/Product';

const Styles = styled.div`



display: flex;
align-content: center;
justify-content: center;
padding: 3%;

`

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      encoded: '',
      products: [ 
        
      ], 
      loading: false,
    };

      this.handleSubmit = this.handleSubmit.bind(this);
  }
//------------------------------------------------------------------------------------
  

//--------------------------------------------------------------------------------
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    })  
    ProductAPIservice.PostListByPhoto(this.state.encoded).then( //----PostListByPhoto
    (response) => {
			console.log("listProducts",response);
      this.setState({
				products: response.products,
        loading: false,
			});
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
    (error) => {
      this.setState({
        loading: false,
			});
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});
  
  }

  
  //--------------------------------------------------------------------------------

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {

      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        encoded: encoded
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    let $photoIcon = null;
    let $Button = null;
    let $Result = null;
    
    const buildItems = () => { 
		
			if (this.state.products.length ===0) {
				return <Container>
					<h3>Нет совпадений</h3>
					<p style ={{'height': '245px'}}></p>
					</Container>
			}
			return this.state.products.map((item, index)=>{
				console.log(index);
				console.log(item.url);
				return (
					<Product name = {item.name}  url = {item.url} price = {item.price} id = {item.id}/> 		
				)
				
			})
		}


    if (imagePreviewUrl) {
      $imagePreview = (<img style={{'height': '400px' , 'position':'innerit'}}  src={imagePreviewUrl} alt = "Изображение"  />);
      $photoIcon = null
      $Button = <div class = 'centerSearchButton'><button class="btn-search" style={{'position':'relative'}}  onClick={(e)=>this.handleSubmit(e)} >Найти похожие </button></div>
      if (this.state.products.length !==0){
        $Result = <Row>{buildItems()}</Row>
      }
     
    } else {
      $imagePreview = (<div className="previewText">Пожалуйста, загрузите изображения для поиска</div>);
      $photoIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="177" height="177" fill="
      #c0c0c0" class="bi bi-camera-fill" viewBox="0 0 16 16">
      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
    </svg>)
    $Button = ( <form onSubmit={(e)=>this.handleSubmit(e)} 
    style={{
    'position': 'relative;', 
    'margin': '0',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'padding': '100px',
    }}>
    <input className="fileInput" 
      style={{
        'position':'absolute',
        
      }}
      type="file" 
      onChange={(e)=>this._handleImageChange(e)} />
   
  </form>)
   

    }
   

    return (
    <Styles>
    
      <Container>
        <Row >
          <div className="previewComponent" >
            <div className="imgPreview" >
                {$photoIcon}
                {$imagePreview }
            </div>
          
          { $Button}
          {this.state.loading && <Container className="block-example  centerWithPadding100"><Spinner animation="border" role="status" className="block-example  loading" >
  <span className="visually-hidden">Loading...</span>
</Spinner></Container>}
          </div>
        </Row>
        <row>
          
            <Col>
			        {$Result}
				    </Col>
          
        </row>
      </Container>
  </Styles>
    )
  }
}
  
//ReactDOM.render(<Search/>, document.getElementById("mainApp"));

export default Search;