
document?.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("productDetails");
    if (!container) {
        console.error("Container topilmadi!");
        return;
    }

    const productJSON = localStorage.getItem("selectedProduct");
    if (!productJSON) {
        container.innerHTML = "<p>Mahsulot topilmadi</p>";
        return;
    }

    const product = JSON.parse(productJSON);
    console.log("Tanlangan product:", product);

    container.innerHTML = `
        <img src="/assets/images/${product.image}" width="400" alt="${product.title}">
        <div class="product_detail_con">
        <h2>${product.title}</h2>
        <p><strong>Narxi:</strong> $${product.price}</p>
        <p><strong>Brend:</strong> ${product.brand}</p>
        <p><strong>Kategoriya:</strong> ${product.category}</p>
        <p><strong>Tavsif:</strong> ${product.description}</p>
        </div>
    `;
});
