const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
        addProduct(product){
            console.log(product);
            console.log(product.id_product);
        },
        clickHandler(product) {
            if(product in products){
                return product;
            }
        }

    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })

    }
});
