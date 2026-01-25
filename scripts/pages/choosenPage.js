import { getFavorites, toggleFavorite, updateFavCount } 
from "../utils/storage.js";

function renderFavorites() {

    const container = document.getElementById("favContainer");
    const fav = getFavorites();

    container.innerHTML = "";

    if (fav.length === 0) {
        container.innerHTML = "<p>Tanlangan mahsulot yo‘q</p>";
        return;
    }

    fav.forEach(item => {
        container.innerHTML += `
        <div class="card">
            <img src=${item.image} alt=${item.title}>
            <h3>${item.title}</h3>
            <p>$${item.price}</p>
            <button class="remove-fav" data-id="${item.id}">
                O‘chirish
            </button>
        </div>
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
