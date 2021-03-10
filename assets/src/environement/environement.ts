export const environment = {
    production: false,
    baseSiteUrl: 'http://localhost:8000',
    apiEndpoint: 'http://localhost:8000/wp-json',
    idHomePage: 2,
    apiEndpoints: {
        productsByAuthorId: 'wp/app/products/1/by-author',
        getProducts: 'wc/v3/products',
        cart: {
            addItem: 'wc/store/cart/add-item',
            deleteItem: '/wc/store/cart/items/{key}',
            deleteItems:  'wc/store/cart/items',
        }
    }
};