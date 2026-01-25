
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
        <div class="product_detail_con">
        <img src="/assets/images/${product.image}" alt="${product.title}" class="card_image">
        <h2>${product.title}</h2>
        <div class="product_detail_sub_con">
            <div class="product_detail_sub_second_con">
                <p><strong>Narxi:</strong> $${product.price}</p>
                <p><strong>Brend:</strong> ${product.brand}</p>
                <p><strong>Kategoriya:</strong> ${product.category}</p>
                <p><strong>Tavsif:</strong> ${product.description}</p>
            </div>
            <button class="cards_button text_xl checkout_btn"><a href="/pages/checkout.html">Keyingisi</a></button>
        </div>
        </div>
    `;
});
