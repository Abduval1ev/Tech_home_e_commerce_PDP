const dbFile = "/products.json";

export async function getProducts() {
    const res = await fetch(dbFile);
    const data = await res.json();
    return data.products;
}

export function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="news_card" data-id="${p.id}">
            <div class="news_card_top_img">
            <img src="/assets/images/${p.image}" alt="${p.title}" class="card_image" />
            </div>
            <div class="news_card_top">
                <h3>${p.title}</h3>
                <p class="text_xl">$${p.price}</p>
                <p class="text_xl">${p.brand}</p>
                <p class="text_xl">${p.category}</p>
            </div>
                <div class="double_btns">
                    <button class="add-cart cards_button text_xl" data-id="${p.id}">
                        <img class="icon"  src="/assets/images/Cart.png" alt="${p.title}" class="card_image" />
                    </button>
                    <button class="add-fav cards_button text_xl" data-id="${p.id}">
                        <img  class="icon" src="/assets/images/Heart.png" alt="${p.title}" class="card_image" />
                    </button>
                </div>
        </div>
        `;
    });
}
