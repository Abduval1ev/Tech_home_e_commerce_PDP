import { getProducts, renderProducts } from "../utils/products.js";
import { enableProductActions } from "../utils/actions.js";
import { updateCartCount, updateFavCount } from "../utils/storage.js";

document?.addEventListener("DOMContentLoaded", async () => {

    updateCartCount();
    updateFavCount();

    const products = await getProducts();

    renderProducts(products.slice(0, 4), "news_cards");
    renderProducts(products.slice(0, 4), "hit_cards");
    renderProducts(products.slice(0, 4), "seasonal_cards");
    renderProducts(products.slice(0, 4), "sale_cards");
    renderProducts(products.slice(0, 4), "rec_cards");

    renderProducts(products, "allProducts");

    enableProductActions(products, "news_cards");
    enableProductActions(products, "hit_cards");
    enableProductActions(products, "seasonal_cards");
    enableProductActions(products, "sale_cards");
    enableProductActions(products, "rec_cards");
    enableProductActions(products, "allProducts");
});
