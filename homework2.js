class Products {
    constructor(container = `.products`) {
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this.init();
    }

    init() {
        this._fetchProducts();
        this._render()
    }

    _fetchProducts() {
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 200},
            {id: 3, title: 'Mouse', price: 47},
            {id: 4, title: 'Gamepad', price: 87},
            {id: 5, title: 'Chair', price: 187},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }

    }

    _priceCount() {
        let count = 0;
        for (let i = 0; i <= this.allProduct.length - 1; i++) {
            count += this.allProduct[i].price;
        }
        return count;

    }

}

class ProductItem {
    constructor(el, img = 'https://placehold.it/200x150') {
        this.title = el.title;
        this.id = el.id;
        this.price = el.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

class Cart {
    constructor() {
        this.allProduct = []; // массив с товарами
    }

    priceCount() {
        let count = 0;
        for (let i = 0; i <= this.allProduct.length - 1; i++) { // считает цену товаров
            count += this.allProduct[i].price;
        }

    }
}

const products = new Products();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Keyboard', price: 200},
//     {id: 3, title: 'Mouse', price: 47},
//     {id: 4, title: 'Gamepad', price: 87},
//     {id: 5, title: 'Chair', price: 187},
// ];
//
// const renderProduct = (title, price, img='https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector(`.products`).innerHTML = list.map(el => renderProduct(el.title, el.price)).join('');
//     for(let el of list){
//         document.querySelector(`.products`).insertAdjacentHTML('beforeend', renderProduct(el.title, el.price));
//     }
// };
//
// renderPage(products);

class Burger {
    constructor(size, topping) {
        this.size = [{name: "big", price: 100, cal: 40}, {name: "small", price: 50, cal: 20}];
        this.topping = [{name: "cheese", price: 10, cal: 20}, {name: "salad", price: 15, cal: 5}, {
            name: "potato",
            price: 20,
            cal: 10
        }];

    }

    counter(size, topping) {
        let price = 0;
        let cal = 0;
        for (let i = 0; i <= this.size.length - 1; i++) {
            if (size === this.size[i].name) {
                price += this.size[i].price;
                cal += this.size[i].cal;
            }
        }
        for (let i = 0; i <= this.topping.length - 1; i++) {
            if (topping === this.topping[i].name) {
                price += this.topping[i].price;
                cal += this.topping[i].cal;
            }
        }
        return `Цена ващего заказа ${price}, калорийность ${cal} каллорий`
    }
}