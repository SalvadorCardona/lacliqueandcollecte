export const environment = {
    production: false,
    apiEndpoint: 'http://localhost:8000/wp-json',
    idHomePage: 2,
    apiEndpoints: {
        productsByAuthorId: 'wp/app/products/1/by-author',
        getProducts: 'wc/v3/products',
        cart: {
            addItem: 'wc/store/cart/add-item',
            deleteItems:  'wc/store/cart/items',
            me: 'wc/store/cart',
        }
    }
};