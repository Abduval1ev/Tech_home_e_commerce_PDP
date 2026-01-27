import { getProducts, renderProducts } from "../utils/products.js";
import { enableProductActions } from "../utils/actions.js";

const categorySelect = document.getElementById("filterCategory");
const brandSelect = document.getElementById("filterBrand");
const priceSelect = document.getElementById("filterPrice");
const searchValue = document.getElementById("search_label");
console.log(searchValue, 'search');

const productsContainer = "productsContainer";

let allProducts = [];

function applyFilters() {
    const selectedCategory = categorySelect?.value;
    const selectedBrand = brandSelect?.value;
    const selectedPrice = priceSelect?.value;
    const searchText = searchValue?.value.toLowerCase();

    let filtered = [...allProducts];

    if (selectedCategory && selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand && selectedBrand !== "all") {
        filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    if (selectedPrice && selectedPrice !== "all") {
        const [min, max] = selectedPrice.split("-").map(Number);
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (searchText) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(searchText)
        );
    }

    renderProducts(filtered, productsContainer);
    enableProductActions(filtered, productsContainer);
}


async function init() {
    allProducts = await getProducts();

    fillFilterOptions(allProducts);
    renderProducts(allProducts, productsContainer);
    enableProductActions(allProducts, productsContainer);

    categorySelect?.addEventListener("change", applyFilters);
    brandSelect?.addEventListener("change", applyFilters);
    priceSelect?.addEventListener("change", applyFilters);
    searchValue?.addEventListener("input", applyFilters);
}


function fillFilterOptions(products) {
    const categories = [...new Set(products.map(p => p.category))];
    const brands = [...new Set(products.map(p => p.brand))];

    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        categorySelect.appendChild(opt);
    });

    brands.forEach(brand => {
        const opt = document.createElement("option");
        opt.value = brand;
        opt.textContent = brand;
        brandSelect.appendChild(opt);
    });
}

init();
