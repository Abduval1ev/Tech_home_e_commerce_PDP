import "./utils/auth.js";
import "./utils/products.js";
import "./utils/storage.js";
import "./utils/actions.js";

import "./pages/products-page.js";
import "./pages/productDetails.js";
import "./pages/home.js";
import "./pages/card.js";
import "./pages/choosenPage.js";

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    location.href = location.href;
});

const navMenu = document.getElementById('nav_menu');
const mobileMenu = document.getElementById('mobile_menu');

navMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle('show');
});