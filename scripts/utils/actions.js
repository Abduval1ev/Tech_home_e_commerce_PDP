import { addToCart, toggleFavorite, updateCartCount, updateFavCount } from "./storage.js";

export function enableProductActions(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container?.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (!id) return;

        const product = products.find(p => p.id == id);
        if (!product) return;

        if (e.target.classList.contains("add-cart")) {
            addToCart(product);
            updateCartCount();
            alert("Savatga qo‘shildi");
            return;
        }

        if (e.target.classList.contains("add-fav")) {
            toggleFavorite(product);
            updateFavCount();
            alert("Tanlov yangilandi");
            return;
        }

        if (!e.target.classList.contains("add-cart") &&
            !e.target.classList.contains("add-fav")) {

            localStorage.setItem("selectedProduct", JSON.stringify(product));

            window.location.href = `/pages/product_details.html`;
        }
    });
}
