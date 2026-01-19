const products = [
    {
        id: 1,
        title: "Blender",
        price: 10.99,
        category: "Blender",
        stock: 100,
        image: "Blender.png"
    },
    {
        id: 2,
        title: "Isitish batarey",
        price: 12.99,
        category: "Isitish batarey",
        stock: 150,
        image: "Heater.png"
    },
    {
        id: 3,
        title: "Blender",
        price: 9.00,
        category: "Blender",
        stock: 100,
        image: "Blender.png"
    },
    {
        id: 4,
        title: "Isitish batarey",
        price: 5.99,
        category: "Isitish batarey",
        stock: 150,
        image: "Heater.png"
    },
    {
        id: 5,
        title: "Idish yuvish mashinasi",
        price: 9.99,
        category: "Idish yuvish mashinasi",
        stock: 0,
        image: "Dishwasher.png"
    },
    {
        id: 6,
        title: "Elektron choynak",
        price: 15.99,
        category: "Elektron choynak",
        stock: 80,
        image: "Electric_Kettle.png"
    },
    {
        id: 7,
        title: "Idish yuvish mashinasi",
        price: 19.99,
        category: "Idish yuvish mashinasi",
        stock: 0,
        image: "Dishwasher.png"
    },
    {
        id: 8,
        title: "Mikrovalnovka",
        price: 8.99,
        category: "Mikrovalnovka",
        stock: 50,
        image: "microwave.png"
    },
    {
        id: 9,
        title: "Kir yuvish mashinasi",
        price: 7.99,
        category: "Kir yuvish mashinasi",
        stock: 60,
        image: "Washing_Machine.png"
    },
    {
        id: 9,
        title: "Plita",
        price: 110.99,
        category: "Plita",
        stock: 0,
        image: "Oven.png"
    },
    {
        id: 10,
        title: "Konditsioner",
        price: 14.99,
        category: "Konditsioner",
        stock: 90,
        image: "airconditioner.png"
    },
    {
        id: 11,
        title: "Mikrovalnovka",
        price: 80.99,
        category: "Mikrovalnovka",
        stock: 50,
        image: "microwave.png"
    },
    {
        id: 12,
        title: "Toaster",
        price: 130.99,
        category: "Toaster",
        stock: 0,
        image: "Toaster.png"
    },
    {
        id: 6,
        title: "Elektron choynak",
        price: 15.99,
        category: "Elektron choynak",
        stock: 80,
        image: "Electric_Kettle.png"
    },
    {
        id: 10,
        title: "Ventiliator",
        price: 30.99,
        category: "Ventiliator",
        stock: 0,
        image: "Fan.png"
    },
    {
        id: 9,
        title: "Kir yuvish mashinasi",
        price: 7.99,
        category: "Kir yuvish mashinasi",
        stock: 60,
        image: "Washing_Machine.png"
    },
    {
        id: 7,
        title: "Konditsioner",
        price: 14.99,
        category: "Konditsioner",
        stock: 90,
        image: "airconditioner.png"
    },
    {
        id: 9,
        title: "Plita",
        price: 60.99,
        category: "Plita",
        stock: 0,
        image: "Oven.png"
    },
    {
        id: 10,
        title: "Ventiliator",
        price: 40.99,
        category: "Ventiliator",
        stock: 0,
        image: "Fan.png"
    }
];

const categorySelect = document.getElementById("categorySelect");
const priceSelect = document.getElementById("priceSelect");
const popularitySelect = document.getElementById("popularitySelect");
const productContainer = document.getElementById("productContainer");

const categories = ["Barchasi", ...new Set(products.map(product => product.category))];
categories.forEach(product => {
    const option = document.createElement("option");
    option.classList.add("text_xl");
    option.value = product;
    option.textContent = product;
    categorySelect.appendChild(option);
});

function renderProducts(list) {
    productContainer.innerHTML = "";
    if (list.length === 0) {
        productContainer.innerHTML = "<p class='text_lg unfound'>Topilmadi!</p>";
        return;
    }
    list.forEach(product => {
        const div = document.createElement("div");

        let availabilityText = "";
        let availabilityClass = "";

        if (product.stock > 0) {
            availabilityText = "Есть в наличии";
            availabilityClass = "stock_in";
        } else {
            availabilityText = "Нет в наличии";
            availabilityClass = "stock_out";
        }
        div.innerHTML = `
        <a href="../pages/card_details.html">
           <article class="news_card">
            <div class="news_card_top">
              <div class="news_card_top_img">
                <img class="card_image" src="../assets/images/${product.image}" alt="Image" />
              </div>
            </div>
            </div>
            <div class="news_card_bottom">
              <p class="text_xl">${product.title}</p>
              <ul>
                <li class="text_md ${availabilityClass}">${availabilityText}</li>
                <li class="text_md">Qolgan: ${product.stock}</li>
              </ul>
              <div class="news_card_bottom_content">
                <h3 class="news_card_price">${product.price} ₽</h3>
                    <button class="text_xl cards_button">Savatga</button>
                </div>
            </div>
            </article>
            </a>
    `;
        productContainer.appendChild(div);
    });
}

function filterProducts() {
    const selectedCategory = categorySelect.value;
    const selectedPrice = priceSelect.value;
    const selectedPopularity = popularitySelect.value;

    const filtered = products.filter(product => {
        if (selectedCategory !== "Barchasi" && product.category !== selectedCategory) return false;

        if (selectedPrice === "Low" && product.price > 10) return false;
        if (selectedPrice === "High" && product.price <= 10) return false;

        if (selectedPopularity === "Popular" && product.stock <= 50) return false;
        if (selectedPopularity === "Unpopular" && product.stock > 50) return false;

        return true;
    });

    renderProducts(filtered);
}

renderProducts(products);

categorySelect.addEventListener("change", filterProducts);
priceSelect.addEventListener("change", filterProducts);
popularitySelect.addEventListener("change", filterProducts);
