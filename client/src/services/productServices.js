import api from '../services/api'


function getAll(){
    return api.get('products')

}

// POST - AddProduct
function post(data){
    const formData = prepareFormData(data)
    return api.post(
      'products',
      formData,
      formConfig
    )
}

// Product Service "write" functions
// Set content header to multipart form
const formConfig = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

// Formart the mixed data that the form state provides
function prepareFormData(data, uploadedfile){
    let formData = new FormData();

      // Append reconfigured mixed data to new object
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('category', data.category);
  formData.append('price', data.price);
  formData.append('manufacturer', data.manufacturer);
  formData.append('onSale', data.onSale);
  formData.append('isAvailable', data.isAvailable);
  formData.append('image', data.image);
  if (uploadedfile) {
    formData.append('uploadedFile', uploadedfile);
  }

  return formData;
}

const productService = {
    getAll,
    post
}

export default productService;