import { getFavorites, toggleFavorite, updateFavCount }
    from "../utils/storage.js";

function renderFavorites() {

    const container = document.getElementById("favContainer");
    const fav = getFavorites();

    container.innerHTML = "";

    if (fav.length === 0) {
        container.innerHTML = `<p class="text_xl">Tanlangan mahsulot yo‘q</p>`;
        return;
    }

    fav.forEach(item => {
        container.innerHTML += `
        <article class="news_card">
            <div class="news_card_top_img">
                <img src="/assets/images/${item.image}" alt="${item.title}" class="card_image" />
            </div>
            <h3 class="text_xl">${item.title}</h3>
            <p class="text_xl">$${item.price}</p>
            <p class="text_xl">${item.brand}</p>
           <div class="double_btns">
            <button class="add-fav remove-fav cards_button text_xl" data-id="${item.id}">
                <img   src="/assets/images/Heart.png" alt="${item.title}" class="card_image" />
            </button>
            </div>
        </article>
        `;
    });
}

document.getElementById("favContainer")
    ?.addEventListener("click", (e) => {

        const id = e.target.dataset.id;
        if (!id) return;

        if (e.target.classList.contains("remove-fav")) {
            const fav = getFavorites();
            const product = fav.find(p => p.id == id);

            toggleFavorite(product);
            updateFavCount();
            renderFavorites();
        }
    });

renderFavorites();
updateFavCount();
