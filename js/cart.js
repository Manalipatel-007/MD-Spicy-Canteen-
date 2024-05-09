// let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice, section) {
    // Add the item to the cart
    cart.push({ name: itemName, price: itemPrice, section: section });
    
    // Update the total price
    totalPrice += itemPrice;
    
    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    // Get the cart list and total price elements
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    // Clear the current cart list
    cartList.innerHTML = "";

    // Add each item in the cart to the cart list
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} (${item.section})`;
        cartList.appendChild(listItem);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

addToCart("Item 1", 10.99, "Section A");
addToCart("Item 2", 5.49, "Section B");
// Add more items with different sections as needed
