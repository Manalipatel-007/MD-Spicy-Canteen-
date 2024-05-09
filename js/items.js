// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cartItemsContainer = document.getElementById('cart-items');

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', addToCart);
//     });

//     function addToCart(event) {
//         const item = event.target.closest('.item');
//         const itemName = item.querySelector('span').textContent.trim(); // Fetching item name
//         const itemPrice = parseFloat(item.getAttribute('data-price'));
//         const quantity = parseInt(item.querySelector('.in').value);

//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');
//         cartItem.innerHTML = `
//             <div>${itemName} - $${itemPrice}</div>
//             <div>Quantity: ${quantity}</div>
//             <button class="remove-from-cart">Remove</button>
//         `;

//         cartItemsContainer.appendChild(cartItem);

//         updateCartTotal();
//         item.querySelector('.in').value = 1;

//         const removeButton = cartItem.querySelector('.remove-from-cart');
// removeButton.addEventListener('click', function() {
//     cartItem.remove();
//     updateCartTotal();
// });

//     }

//     function updateCartTotal() {
//         const cartItems = document.querySelectorAll('.cart-item');
//         let total = 0;
//         cartItems.forEach(item => {
//             const price = parseFloat(item.textContent.match(/\$\d+/)[0].slice(1));
//             const quantity = parseInt(item.textContent.match(/Quantity: \d+/)[0].split(' ')[1]);
//             total += price * quantity;
//         });

//         // Update total in the UI
//         document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const item = event.target.closest('.item');
        const itemName = item.querySelector('span').textContent.trim(); // Fetching item name
        const itemPrice = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.in').value);

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>${itemName} -  ₹${itemPrice}</div>
            <div>Quantity: ${quantity}</div>
            <button class="remove-from-cart">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);

        updateCartTotal();
        item.querySelector('.in').value = 1;
    }

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
        }
    });

    function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.textContent.match(/\$\d+/)[0].slice(1));
            const quantity = parseInt(item.textContent.match(/Quantity: \d+/)[0].split(' ')[1]);
            total += price * quantity;
        });

        // Update total in the UI
        document.getElementById('cart-total').textContent = `Total:  ₹${total.toFixed(2)}`;
    }
});
