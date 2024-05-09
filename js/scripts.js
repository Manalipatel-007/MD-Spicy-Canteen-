function addToCart(name, price) {
    const item = { name, price };
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    // Remove 'disabled' attribute from all add-to-cart buttons
    addToCartButtons.forEach(button => {
        button.removeAttribute("disabled");
    });

    // Disable add-to-cart buttons for items already in cart
    cartItems.forEach(item => {
        const itemName = item.name;
        const matchingButton = document.querySelector(`.add-to-cart[data-name="${itemName}"]`);
        if (matchingButton) {
            matchingButton.setAttribute("disabled", "disabled");
        }
    });
}
