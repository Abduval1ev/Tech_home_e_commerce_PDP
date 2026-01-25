export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(p => p.id == product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    setCart(cart);
}

export function decreaseFromCart(productId) {
    let cart = getCart();
    const item = cart.find(p => p.id == productId);

    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id != productId);
    }

setCart(cart);
}

export function removeFromCart(productId) {
    let cart = getCart().filter(p => p.id != productId);
    setCart(cart);
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function toggleFavorite(product) {
    let fav = getFavorites();
    const exists = fav.find(p => p.id == product.id);

    if (exists) {
        fav = fav.filter(p => p.id != product.id);
    } else {
        fav.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(fav));
}

export function updateCartCount() {
    const cart = getCart();
    const countElement = document.getElementById("cart-count");

    if (!countElement) return;

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.textContent = totalQuantity;
}

export function updateFavCount() {
    const fav = getFavorites();
    const countElement = document.getElementById("fav-count");

    if (!countElement) return;

    countElement.textContent = fav.length;
}
