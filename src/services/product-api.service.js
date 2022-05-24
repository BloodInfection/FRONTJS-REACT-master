import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../actions/user-api.action';
import store from '../store'

const PRODUCTRAPI_URL = "http://51.250.69.184:8080/v1/";
axios.defaults.withCredentials = true
const sessionid = "sessionid"

axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch(logout())
    window.location = '/signin';
  }
});

//TODO создать некоторые ручки для продукт апи
class ProductApiService {

  buildHeader() {
    let session = localStorage.getItem(sessionid);
    console.log("session:", session)
    if (session === null) {
      console.log("deleting:", session)
      delete axios.defaults.headers.common[sessionid];
    } else {
      axios.defaults.headers.common[sessionid] = session;
    }
  }

  //----------------------------------------------------------------GET---------------------------------------------------------------

  GetBrand (id) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetEcho (message) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "echo", {params:{message}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetCategory (number, limit, name, level) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "category", {params:{"page.number": number, "page.limit": limit, name, level }})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetColor(id) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "color", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetSize(id) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "size", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetFinalProduct(id) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "final-product", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetFullProduct (productId) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "full-product", {params:{productId}})
    .then((response)=>{
      return response.data;
    }); 
    }


  GetFinalProductList(productId) {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "final-product/list", {params:{productId}})
    .then((response)=>{
      return response.data;
    }); 
  }


  GetSizeList(){
   
    return axios
    .get(PRODUCTRAPI_URL + "size/list")
    .then((response)=>{
        return response.data;
      }
    );
  }

  GetListColor () {
   
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "color/list")
  .then((response)=>{
		return response.data;
	}); 
  }

  GetListProducts  (number, limit, name, categoryId, brandId) {
   
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "product/list", {params:{"page.number": number, "page.limit": limit, name, categoryId, brandId }})
  .then((response)=>{
		return response.data;
	}); 
  }


  GetListBrand () {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand/list")
    .then((response)=>{
      return response.data;
    }); 
  }

  GetListBrandGroup () {
   
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand/list/grouped")
    .then((response)=>{
      return response.data;
    }); 
  }

  //----------------------------------------------------------------DELETE---------------------------------------------------------------

  DeleteColor (id) {
   
      return axios //класс с методами:
      .delete(PRODUCTRAPI_URL + "color", {params:{id}})
      .then((response)=>{
        return response.data;
      }); 
  }

  DeleteBrand (id) {
   
    return axios 
    .delete(PRODUCTRAPI_URL + "brand", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
}

DeleteCategory (id) {
 
  return axios 
  .delete(PRODUCTRAPI_URL + "category", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteFinalProduct (id) {
 
  return axios 
  .delete(PRODUCTRAPI_URL + "final-product", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteProduct (id) {
 
  return axios 
  .delete(PRODUCTRAPI_URL + "product", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteSize (id) {
 
  return axios 
  .delete(PRODUCTRAPI_URL + "size", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

  //----------------------------------------------------------------POST---------------------------------------------------------------

  PostColor (name) {
   
      return axios //класс с методами:
      .post(PRODUCTRAPI_URL + "color", {name})
      .then((response)=>{
        return response.data;
      }); 
  }
  PostBrand (name, description, file, fileExtension) {
   
    return axios //класс с методами:
    .post(PRODUCTRAPI_URL + "brand", {name, description, file, fileExtension})
    .then((response)=>{
      return response.data;
    }); 
}

PostCategory (name, level, parentId) {
 
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "category", {name, level, parentId})
  .then((response)=>{
    return response.data;
  }); 
}

PostFinalProduct (productId, sizeId, colorId, price, sku, amount) {
 
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "final-product", {productId, sizeId, colorId, price, sku, amount})
  .then((response)=>{
    return response.data;
  }); 
}

PostProduct (name, description, image, contentType, brandId, categoryId) {
 
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "product", {name, description, image, contentType, brandId, categoryId})
  .then((response)=>{
    return response.data;
  }); 
}

PostSize (name, categoryId) {
 
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "size", {name, categoryId})
  .then((response)=>{
    return response.data;
  }); 
}

PostListByPhoto (image) {
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "product/list-by-photo", {image: image}, { timeout: 100000 , maxBodyLength: 1000000,
    maxContentLength: 1000000, headers: { "Content-Type": "multipart/form-data" }})
  .then((response)=>{
    return response.data;
  }); 
}

}
export default new ProductApiService();