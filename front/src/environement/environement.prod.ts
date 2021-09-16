export const environment = {
    production: true,
    baseSiteUrl: null,
    apiEndpoint: 'wp-json',
    idHomePage: 2,
    serverApi: 'remote.monpc.fr',
    apiEndpoints: {
        getProducts: 'wc/v3/products',
        cart: {
            addItem: 'wc/store/cart/add-item',
            deleteItem: '/wc/store/cart/items/{key}',
            deleteItems: 'wc/store/cart/items',
            me: 'wc/store/cart',
        },
        application: {
            configuration: 'wp/app/configuration'
        },
        partner: {
            byId: 'wp/app/partner/$id',
            all: 'wp/app/partners',
        },
        partnerRequest: {
            create: 'wp/app/partner-request'
        },
        search: {
            all: 'wp/app/search',
        }
    }
};
