import axios from "axios";
//for development
const PRODUCTRAPI_URL = "https://51.250.69.184:8080/v1/";
//for prod
//const PRODUCTRAPI_URL =  "http://127.0.0.1:80/v1/product";
axios.defaults.withCredentials = true
const sessionid = "sessionid"

//TODO создать некоторые ручки для продукт апи
class ProductApiService {
  buildHeader() {
    axios.defaults.headers.common[sessionid] = localStorage.getItem(sessionid)
  }


  //----------------------------------------------------------------GET---------------------------------------------------------------

  GetBrand (id) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetEcho (message) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "echo", {params:{message}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetCategory (number, limit, name, level) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "category", {params:{"page.number": number, "page.limit": limit, name, level }})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetColor(id) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "color", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetSize(id) {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "size", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  GetFinalProduct(id) {
    this.buildHeader();
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
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "final-product/list", {params:{productId}})
    .then((response)=>{
      return response.data;
    }); 
  }


  GetSizeList(){
    this.buildHeader();
    return axios
    .get(PRODUCTRAPI_URL + "size/list")
    .then((response)=>{
        return response.data;
      }
    );
  }

  GetListColor () {
    this.buildHeader();
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "color/list")
  .then((response)=>{
		return response.data;
	}); 
  }

  GetListProducts  (number, limit, name, categoryId, brandId) {
    this.buildHeader();
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "product/list", {params:{"page.number": number, "page.limit": limit, name, categoryId, brandId }})
  .then((response)=>{
		return response.data;
	}); 
  }


  GetListBrand () {
    this.buildHeader();
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand/list")
    .then((response)=>{
      return response.data;
    }); 
  }

  //----------------------------------------------------------------DELETE---------------------------------------------------------------

  DeleteColor (id) {
    this.buildHeader();
      return axios //класс с методами:
      .delete(PRODUCTRAPI_URL + "color", {params:{id}})
      .then((response)=>{
        return response.data;
      }); 
  }

  DeleteBrand (id) {
    this.buildHeader();
    return axios 
    .delete(PRODUCTRAPI_URL + "brand", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
}

DeleteCategory (id) {
  this.buildHeader();
  return axios 
  .delete(PRODUCTRAPI_URL + "category", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteFinalProduct (id) {
  this.buildHeader();
  return axios 
  .delete(PRODUCTRAPI_URL + "final-product", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteProduct (id) {
  this.buildHeader();
  return axios 
  .delete(PRODUCTRAPI_URL + "product", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

DeleteSize (id) {
  this.buildHeader();
  return axios 
  .delete(PRODUCTRAPI_URL + "size", {params:{id}})
  .then((response)=>{
    return response.data;
  }); 
}

  //----------------------------------------------------------------POST---------------------------------------------------------------

  PostColor (name) {
    this.buildHeader();
      return axios //класс с методами:
      .post(PRODUCTRAPI_URL + "color", {name})
      .then((response)=>{
        return response.data;
      }); 
  }
  PostBrand (name, description, file, fileExtension) {
    this.buildHeader();
    return axios //класс с методами:
    .post(PRODUCTRAPI_URL + "brand", {name, description, file, fileExtension})
    .then((response)=>{
      return response.data;
    }); 
}

PostCategory (name, level, parentId) {
  this.buildHeader();
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "category", {name, level, parentId})
  .then((response)=>{
    return response.data;
  }); 
}

PostFinalProduct (productId, sizeId, colorId, price, sku, amount) {
  this.buildHeader();
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "final-product", {productId, sizeId, colorId, price, sku, amount})
  .then((response)=>{
    return response.data;
  }); 
}

PostProduct (name, description, image, contentType, brandId, categoryId) {
  this.buildHeader();
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "product", {name, description, image, contentType, brandId, categoryId})
  .then((response)=>{
    return response.data;
  }); 
}

PostSize (name, categoryId) {
  this.buildHeader();
  return axios //класс с методами:
  .post(PRODUCTRAPI_URL + "size", {name, categoryId})
  .then((response)=>{
    return response.data;
  }); 
}
  

}
export default new ProductApiService();