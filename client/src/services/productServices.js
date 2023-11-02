import api from '../services/api'


function getAll(){
    return api.get('/api/products')

}


const productService = {
    getAll
}

export default productService;