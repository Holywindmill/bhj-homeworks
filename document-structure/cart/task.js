'use strict';
const products = document.querySelectorAll('div.product');
const cartProducts = document.querySelector('div.cart__products');
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const controls = product.querySelector('div.product__quantity-controls');
    const increment = controls.querySelector('div.product__quantity-control_inc');
    const decrement = controls.querySelector('div.product__quantity-control_dec');
    const quantity = controls.querySelector('div.product__quantity-value');
    const bin = product.querySelector('div.product__add');
    const img = product.querySelector('img.product__image')
    increment.onclick = function () {
        quantity.innerText = parseInt(quantity.textContent) + 1;
        return false;
    };
    decrement.onclick = function () {
        if (quantity.textContent >= 2) {
            quantity.innerText = parseInt(quantity.textContent) - 1;
        }
        return false;
    }
    bin.onclick = function () {
        const cartItems = cartProducts.querySelectorAll('div.cart__product');
        let productAlreadyInCart = false;
        for (let k = 0; k < cartItems.length; k++) {
            const cartItem = cartItems[k];
            if (cartItem.dataset.id === product.dataset.id) {
                productAlreadyInCart = true;
            }
        }
        if (productAlreadyInCart === false) {
            cartProducts.insertAdjacentHTML("afterbegin", '<div class="cart__product" data-id="' +
                product.dataset.id +
                '">\n' +
                '    <img class="cart__product-image" src="' + img.src + '">\n' +
                '    <div class="cart__product-count">' + quantity.innerText +
                '</div>\n' +
                '</div>');
        } else {
            for (let j = 0; j < cartItems.length; j++) {
                const cartItem = cartItems[j];
                console.log(cartItem)
                const productCount = cartItem.querySelector('div.cart__product-count');
                if (product.dataset.id === cartItem.dataset.id) {
                    console.log("if entered")
                    productCount.innerText = parseInt(productCount.innerText) + parseInt(quantity.innerText);
                }
            }
        }
    }
}

