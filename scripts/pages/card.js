import { getCart, addToCart, decreaseFromCart, removeFromCart }
    from "../utils/storage.js";

function renderCart() {
    const container = document.getElementById("cartContainer");
    const cart = getCart();

    container.innerHTML = "";

    cart.forEach(item => {
        container.innerHTML += `
        <div class="news_card">
        <div class="news_card_top_img">
            <img src="/assets/images/${item.image}" alt="${item.title}" class="card_image"/>
        </div>
            <h3>${item.title}</h3>
            <p>$${item.price}</p>

            <div class="quantity">
                <button class="minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="plus" data-id="${item.id}">+</button>
            </div>

            <button class="remove" data-id="${item.id}">O‘chirish</button>
        </div>
        `;
    });
}

document.getElementById("cartContainer")
    ?.addEventListener("click", (e) => {

        const id = e.target.dataset.id;
        if (!id) return;

        if (e.target.classList.contains("plus")) {
            const cart = getCart();
            const item = cart.find(p => p.id == id);
            addToCart(item);
        }

        if (e.target.classList.contains("minus")) {
            decreaseFromCart(id);
        }

        if (e.target.classList.contains("remove")) {
            removeFromCart(id);
        }

        renderCart();
    });

renderCart();
