
const products = [
    {
        "id": 1,
        "title": "Blender",
        "price": 10.99,
        "category": "Blender",
        "stock": 100,
        "description": "Description for Product 1",
        "image": "Blender.png"
    },
    {
        "id": 2,
        "title": "Heater",
        "price": 12.99,
        "category": "Heater",
        "stock": 150,
        "description": "Description for Product 2",
        "image": "Heater.png"
    },
    {
        "id": 3,
        "title": "Dishwasher",
        "price": 9.99,
        "category": "Dishwasher",
        "stock": 0,
        "description": "Description for Product 3",
        "image": "Dishwasher.png"

    },
    {
        "id": 4,
        "title": "Electric Kettle",
        "price": 15.99,
        "category": "Electric_Kettle",
        "stock": 80,
        "description": "Description for Product 4",
        "image": "Electric_Kettle.png"
    },
    {
        "id": 5,
        "title": "Microwave",
        "price": 8.99,
        "category": "microwave",
        "stock": 50,
        "description": "Description for Product 5",
        "image": "microwave.png"
    },
    {
        "id": 6,
        "title": "Oven",
        "price": 11.99,
        "category": "Oven",
        "stock": 0,
        "description": "Description for Product 6",
        "image": "Oven.png"
    },
    {
        "id": 7,
        "title": "Air conditioner",
        "price": 14.99,
        "category": "Air conditioner",
        "stock": 90,
        "description": "Description for Product 7",
        "image": "airconditioner.png"
    },
    {
        "id": 8,
        "title": "Toaster",
        "price": 13.99,
        "category": "Toaster",
        "stock": 0,
        "description": "Description for Product 8",
        "image": "Toaster.png"
    },
    {
        "id": 9,
        "title": "Washing Machine",
        "price": 7.99,
        "category": "Washing Machine",
        "stock": 60,
        "description": "Description for Product 9",
        "image": "Washing_Machine.png"
    },
    {
        "id": 10, "title": "Fan",
        "price": 16.99,
        "category": "Fan",
        "stock": 0,
        "description": "Description for Product 10",
        "image": "Fan.png"
    },
    {
        "id": 1,
        "title": "Blender",
        "price": 10.99,
        "category": "Blender",
        "stock": 100,
        "description": "Description for Product 1",
        "image": "Blender.png"
    },
    {
        "id": 2,
        "title": "Heater",
        "price": 12.99,
        "category": "Heater",
        "stock": 150,
        "description": "Description for Product 2",
        "image": "Heater.png"
    },
    {
        "id": 3,
        "title": "Dishwasher",
        "price": 9.99,
        "category": "Dishwasher",
        "stock": 0,
        "description": "Description for Product 3",
        "image": "Dishwasher.png"

    },
    {
        "id": 4,
        "title": "Electric Kettle",
        "price": 15.99,
        "category": "Electric_Kettle",
        "stock": 80,
        "description": "Description for Product 4",
        "image": "Electric_Kettle.png"
    },
    {
        "id": 5,
        "title": "Microwave",
        "price": 8.99,
        "category": "microwave",
        "stock": 50,
        "description": "Description for Product 5",
        "image": "microwave.png"
    },
    {
        "id": 6,
        "title": "Oven",
        "price": 11.99,
        "category": "Oven",
        "stock": 0,
        "description": "Description for Product 6",
        "image": "Oven.png"
    },
    {
        "id": 7,
        "title": "Air conditioner",
        "price": 14.99,
        "category": "Air conditioner",
        "stock": 90,
        "description": "Description for Product 7",
        "image": "airconditioner.png"
    },
    {
        "id": 8,
        "title": "Toaster",
        "price": 13.99,
        "category": "Toaster",
        "stock": 0,
        "description": "Description for Product 8",
        "image": "Toaster.png"
    },
    {
        "id": 9,
        "title": "Washing Machine",
        "price": 7.99,
        "category": "Washing Machine",
        "stock": 60,
        "description": "Description for Product 9",
        "image": "Washing_Machine.png"
    },
    {
        "id": 10, "title": "Fan",
        "price": 16.99,
        "category": "Fan",
        "stock": 0,
        "description": "Description for Product 10",
        "image": "Fan.png"
    }
];

export function renderProducts(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        const productEl = document.createElement("article");
        productEl.classList.add("news_card");

        let availabilityText = "";
        let availabilityClass = "";

        if (product.stock > 0) {
            availabilityText = "Есть в наличии";
            availabilityClass = "stock_in";
        } else {
            availabilityText = "Нет в наличии";
            availabilityClass = "stock_out";
        }

        productEl.innerHTML = `
        <a href="./pages/card_details.html">
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
                <li class="text_md">Арт.: ${product.stock}</li>
              </ul>
              <div class="news_card_bottom_content">
                <h3 class="news_card_price">${product.price} ₽</h3>
                    <button class="text_xl cards_button"><a href="./pages/card.html">Savatga</a></button>
                    </div>
                    </div>
                    </article>
                    </a>
        `;

        container.appendChild(productEl);
    });
}
