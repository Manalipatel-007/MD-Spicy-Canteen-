function displayCartItems() {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const cartItemsDiv = document.getElementById("cart-items");

    cartItemsDiv.innerHTML = ""; // Clear existing items

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `₹{index + 1}. ${item.name} -  ₹₹{item.price}`;
        cartItemsDiv.appendChild(cartItem);
    });
}

displayCartItems();
