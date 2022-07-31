class ProductService{
    fetchProducts() {
        return  axios({
            url:' http://localhost:3000/products',
            method: 'GET',
        });
    }
    addProduct = product => {
        return axios ({
            url: 'http://localhost:3000/products',
            method:'POST',
            data: product,
        });
    }
}

export default ProductService;