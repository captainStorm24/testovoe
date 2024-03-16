document.addEventListener("DOMContentLoaded", () => {

    class Product {
        constructor(obj, name, price, quantity) {
            Product.count++
            this.obj = obj
            this.name = name
            this.price = price
            this.priceEnd = price
            this.quantity = quantity
            this.reRender();
        }

        changeQuantity(quantity) {
            this.quantity = quantity;
            this.updatePrice();
        }

        changePrice(price) {
            this.price = price;
            this.updatePrice();
        }

        updatePrice() {
            if (this.quantity > 100) this.priceEnd = 1 * this.price;
            else if (this.quantity > 80) this.priceEnd = 1.2 * this.price;
            else if (this.quantity > 60) this.priceEnd = 1.4 * this.price;
            else if (this.quantity > 40) this.priceEnd = 1.6 * this.price;
            else if (this.quantity > 20) this.priceEnd = 1.8 * this.price;
            else if (this.quantity > 0) this.priceEnd = 2 * this.price;
            else this.priceEnd = 0;
            this.reRender();
        }

        reRender() {
            this.obj.querySelector(".item__title").innerHTML = this.name;
            this.obj.querySelector(".item__price span").innerHTML = this.priceEnd;
            this.obj.querySelector(".item__quantity span").innerHTML = this.quantity;
        }
    }

    Product.count = 0;


    class DiscountedProduct extends Product {
        constructor(obj, name, price, quantity, discount = 1) {
            super(obj, name, price, quantity)
            this.discount = discount
            this.updatePrice();
        }

        changeDiscount(discount) {
            this.discount = discount
            this.updatePrice();
        }

        updatePrice() {
            this.priceEnd = this.price * this.discount
            this.reRender()
        }
    }

    let productApples = new Product(document.querySelector("#product-1"), "Яблочки", 80, 80),
        productStrawberry = new Product(document.querySelector("#product-2"), "Клубничка", 20, 300);

    productStrawberry.obj.querySelector(".item__description").innerHTML = "Сладкая клубничка как первая любовь";

    productStrawberry = new DiscountedProduct(document.querySelector("#product-2"), "Клубничка", 100, 101, 0.2);

    productStrawberry.changeQuantity(88);
    productStrawberry.changeDiscount(1.5);
    productStrawberry.changePrice(80);

    productApples.changeQuantity(101);
    productApples.changePrice(20);


})