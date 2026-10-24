/* =========================================================
   ROVISH PLUS - COMPLETE STORE ENGINE
   ========================================================= */

const STORE_CONFIG = {
    storeName: "Rovish Plus",

    whatsapp: "919711619841",

    phone: "+91 97116 19841",
    email: "hb1490245@gmail.com",
    instagram: "@rovishplus",

    freeDeliveryThreshold: 499,
    deliveryFee: 40
};


/* =========================================================
   PRODUCTS
   ========================================================= */

const PRODUCTS = [

    {
        id: "rp101",
        name: "Rovish Plus Toilet Cleaner",
        category: "Toilet Care",
        price: 129,
        originalPrice: 159,
        discount: 19,
        rating: 4.8,
        reviews: 240,
        badge: "Best Seller",
        theme: "toilet",
        icon: "🚽",
        description: "Powerful everyday toilet cleaning solution for a fresh and clean bathroom."
    },

    {
        id: "rp102",
        name: "Rovish Plus Power Toilet Cleaner",
        category: "Toilet Care",
        price: 159,
        originalPrice: 199,
        discount: 20,
        rating: 4.9,
        reviews: 310,
        badge: "Popular",
        theme: "toilet",
        icon: "🚽",
        description: "Concentrated toilet cleaner designed for tougher everyday bathroom cleaning."
    },

    {
        id: "rp103",
        name: "Rovish Plus Floor Cleaner",
        category: "Floor Care",
        price: 149,
        originalPrice: 189,
        discount: 21,
        rating: 4.7,
        reviews: 180,
        badge: "Best Seller",
        theme: "floor",
        icon: "🏠",
        description: "Everyday floor cleaning solution for a fresh-feeling home."
    },

    {
        id: "rp104",
        name: "Rovish Plus Lemon Floor Cleaner",
        category: "Floor Care",
        price: 149,
        originalPrice: 189,
        discount: 21,
        rating: 4.8,
        reviews: 195,
        badge: "Fresh Choice",
        theme: "lemon",
        icon: "🍋",
        description: "Lemon-inspired floor cleaner for a pleasant everyday cleaning routine."
    },

    {
        id: "rp105",
        name: "Rovish Plus Bathroom Cleaner",
        category: "Bathroom Care",
        price: 139,
        originalPrice: 179,
        discount: 22,
        rating: 4.6,
        reviews: 142,
        badge: "Essential",
        theme: "bathroom",
        icon: "🚿",
        description: "Everyday bathroom cleaner for suitable washable surfaces."
    },

    {
        id: "rp106",
        name: "Rovish Plus Glass Cleaner",
        category: "Multipurpose",
        price: 119,
        originalPrice: 149,
        discount: 20,
        rating: 4.9,
        reviews: 285,
        badge: "Top Rated",
        theme: "glass",
        icon: "✨",
        description: "Convenient glass cleaning spray for windows, mirrors and suitable glass surfaces."
    },

    {
        id: "rp107",
        name: "Rovish Plus Kitchen Cleaner",
        category: "Kitchen Care",
        price: 179,
        originalPrice: 229,
        discount: 22,
        rating: 4.8,
        reviews: 320,
        badge: "Must Have",
        theme: "kitchen",
        icon: "🍳",
        description: "Kitchen cleaning spray for everyday grease, spills and suitable surfaces."
    },

    {
        id: "rp108",
        name: "Rovish Plus Dishwash Liquid",
        category: "Dish Care",
        price: 99,
        originalPrice: 129,
        discount: 23,
        rating: 4.7,
        reviews: 410,
        badge: "Value Pick",
        theme: "dish",
        icon: "🍋",
        description: "Dishwashing liquid for everyday utensil and kitchenware cleaning."
    },

    {
        id: "rp109",
        name: "Rovish Plus Disinfectant",
        category: "Disinfectants",
        price: 199,
        originalPrice: 249,
        discount: 20,
        rating: 4.8,
        reviews: 160,
        badge: "New",
        theme: "disinfect",
        icon: "🛡️",
        description: "Convenient household disinfectant solution for appropriate hard surfaces."
    },

    {
        id: "rp110",
        name: "Rovish Plus Multipurpose Cleaner",
        category: "Multipurpose",
        price: 169,
        originalPrice: 209,
        discount: 19,
        rating: 4.6,
        reviews: 115,
        badge: "Versatile",
        theme: "multi",
        icon: "✨",
        description: "Everyday multipurpose cleaner for suitable washable household surfaces."
    },

    {
        id: "rp111",
        name: "Rovish Plus Fresh Home Cleaner",
        category: "Floor Care",
        price: 189,
        originalPrice: 239,
        discount: 21,
        rating: 4.7,
        reviews: 130,
        badge: "Fresh Pick",
        theme: "fresh",
        icon: "🌿",
        description: "Fresh home cleaning solution for an enjoyable everyday cleaning experience."
    },

    {
        id: "rp112",
        name: "Rovish Plus Home Care Combo",
        category: "Multipurpose",
        price: 499,
        originalPrice: 699,
        discount: 29,
        rating: 5,
        reviews: 512,
        badge: "Mega Saver",
        theme: "combo",
        icon: "🏠",
        description: "Five everyday household cleaning essentials in one convenient combo."
    }

];


const CATEGORIES = [
    { name: "Toilet Care", icon: "🚽", text: "Deep clean" },
    { name: "Floor Care", icon: "🧹", text: "Fresh floors" },
    { name: "Bathroom Care", icon: "🚿", text: "Spotless shine" },
    { name: "Kitchen Care", icon: "🍳", text: "Clean kitchen" },
    { name: "Dish Care", icon: "🫧", text: "Clean dishes" },
    { name: "Multipurpose", icon: "✨", text: "Everyday cleaning" },
    { name: "Disinfectants", icon: "🛡️", text: "Home hygiene" }
];


const REVIEWS = [
    {
        name: "Aditya",
        city: "Verified Customer",
        text: "Rovish Plus products are easy to use and make everyday cleaning much simpler."
    },
    {
        name: "Priya",
        city: "Verified Customer",
        text: "The shopping experience is simple and the products are great for regular home cleaning."
    },
    {
        name: "Rahul",
        city: "Verified Customer",
        text: "Clean design, easy ordering and useful cleaning products. Really convenient."
    }
];


/* =========================================================
   STATE
   ========================================================= */

let state = {
    cart: [],
    category: "All",
    search: "",
    sort: "default",
    selectedProduct: null
};


let otpState = {
    confirmationResult: null,
    pendingOrder: null,
    pendingPhone: "",
    recaptchaVerifier: null,
    verifiedPhone: ""
};


/* =========================================================
   HELPERS
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}


function money(value) {
    return `₹${Number(value).toLocaleString("en-IN")}`;
}


function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadCart();

    renderCategories();
    renderCategoryFilter();
    renderProducts();
    renderReviews();

    setupNavigation();
    setupSearch();
    setupCart();
    setupModals();
    setupCheckout();
    setupFAQ();
    setupCombo();

    setupFooter();

    updateCart();

});


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    const hamburger = $("hamburger");
    const menu = $("navMenu");

    if (hamburger) {

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("open");
        });

    }


    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("open");
        });

    });


    $("searchBtn")?.addEventListener("click", () => {

        $("searchBar").classList.toggle("open");

        if ($("searchBar").classList.contains("open")) {
            setTimeout(() => $("navSearch").focus(), 100);
        }

    });


    $("closeSearch")?.addEventListener("click", () => {
        $("searchBar").classList.remove("open");
    });


    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {
            $("navbar").classList.add("scrolled");
        } else {
            $("navbar").classList.remove("scrolled");
        }

    });

}


/* =========================================================
   PRODUCT BOTTLE VISUAL
   ========================================================= */

const bottleStyle = document.createElement("style");

bottleStyle.textContent = `

.theme-toilet .bottle-body{
    background:linear-gradient(145deg,#153a92,#3988ff);
}

.theme-floor .bottle-body{
    background:linear-gradient(145deg,#006b50,#16b979);
}

.theme-lemon .bottle-body{
    background:linear-gradient(145deg,#83a800,#d8e832);
}

.theme-bathroom .bottle-body{
    background:linear-gradient(145deg,#086da8,#38bdf8);
}

.theme-glass .bottle-body{
    background:linear-gradient(145deg,#0875ad,#67d7ff);
}

.theme-kitchen .bottle-body{
    background:linear-gradient(145deg,#b53d08,#ff8b32);
}

.theme-dish .bottle-body{
    background:linear-gradient(145deg,#c68b00,#ffe052);
}

.theme-disinfect .bottle-body{
    background:linear-gradient(145deg,#4f46a5,#818cf8);
}

.theme-multi .bottle-body{
    background:linear-gradient(145deg,#007a70,#22c7a3);
}

.theme-fresh .bottle-body{
    background:linear-gradient(145deg,#237143,#6fcf77);
}

.theme-combo .bottle-body{
    background:linear-gradient(145deg,#9d3414,#fb923c);
}

`;

document.head.appendChild(bottleStyle);


function bottleHTML(product, size = "") {

    return `

        <div class="bottle ${size} theme-${product.theme}">

            <div class="bottle-cap"></div>

            <div class="bottle-neck"></div>

            <div class="bottle-body">

                <div class="bottle-label">

                    <div class="rp">RP</div>

                    <strong>ROVISH PLUS</strong>

                    <small>
                        ${escapeHTML(product.name.replace("Rovish Plus ", ""))}
                    </small>

                </div>

                <div class="bubbles"></div>

            </div>

        </div>

    `;

}


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

    const grid = $("categoryGrid");

    if (!grid) return;


    grid.innerHTML = `

        <div class="category-card active" data-category="All">
            <div class="category-icon">✨</div>
            <h3>All Products</h3>
            <p>Explore all</p>
        </div>

        ${CATEGORIES.map(category => `

            <div
                class="category-card"
                data-category="${escapeHTML(category.name)}"
            >

                <div class="category-icon">
                    ${category.icon}
                </div>

                <h3>
                    ${escapeHTML(category.name)}
                </h3>

                <p>
                    ${escapeHTML(category.text)}
                </p>

            </div>

        `).join("")}

    `;


    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("click", () => {

            state.category = card.dataset.category;

            document.querySelectorAll(".category-card")
                .forEach(c => c.classList.remove("active"));

            card.classList.add("active");

            $("categoryFilter").value = state.category;

            renderProducts();

            document.querySelector("#shop")
                .scrollIntoView({ behavior: "smooth" });

        });

    });

}


function renderCategoryFilter() {

    const select = $("categoryFilter");

    if (!select) return;


    select.innerHTML = `

        <option value="All">
            All Categories
        </option>

        ${CATEGORIES.map(category => `

            <option value="${escapeHTML(category.name)}">
                ${escapeHTML(category.name)}
            </option>

        `).join("")}

    `;


    select.addEventListener("change", event => {

        state.category = event.target.value;

        renderProducts();

    });

}


/* =========================================================
   PRODUCTS
   ========================================================= */

function getFilteredProducts() {

    let products = PRODUCTS.filter(product => {

        const categoryMatch =
            state.category === "All" ||
            product.category === state.category;


        const text = `
            ${product.name}
            ${product.category}
            ${product.description}
        `.toLowerCase();


        const searchMatch =
            text.includes(state.search.toLowerCase());


        return categoryMatch && searchMatch;

    });


    if (state.sort === "low") {
        products.sort((a, b) => a.price - b.price);
    }

    if (state.sort === "high") {
        products.sort((a, b) => b.price - a.price);
    }

    if (state.sort === "rating") {
        products.sort((a, b) => b.rating - a.rating);
    }


    return products;

}


function renderProducts() {

    const grid = $("productGrid");

    if (!grid) return;


    const products = getFilteredProducts();


    $("activeFilter").textContent =
        state.search
            ? `Search results for "${state.search}"`
            : state.category !== "All"
                ? `Showing: ${state.category}`
                : "Showing all products";


    if (!products.length) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                background:white;
                border-radius:20px;
            ">

                <div style="font-size:50px">🔎</div>

                <h3>No products found</h3>

                <p style="color:#7b8696;margin:10px">
                    Try another search or category.
                </p>

                <button
                    class="btn btn-primary"
                    onclick="resetFilters()"
                >
                    Reset Filters
                </button>

            </div>

        `;

        return;

    }


    grid.innerHTML = products.map(product => `

        <article class="product-card">

            <span class="product-badge
                ${product.badge === "New" ? "new" : ""}
                ${product.badge.includes("Best") ||
                  product.badge.includes("Popular") ? "hot" : ""}
            ">
                ${escapeHTML(product.badge)}
            </span>


            <div
                class="product-visual"
                data-product="${product.id}"
            >

                ${bottleHTML(product)}

            </div>


            <div class="product-category">
                ${escapeHTML(product.category)}
            </div>


            <h3
                class="product-name"
                data-product="${product.id}"
            >
                ${escapeHTML(product.name)}
            </h3>


            <div class="rating">

                <span class="stars">
                    ★ ${product.rating}
                </span>

                <span class="reviews">
                    (${product.reviews})
                </span>

            </div>


            <div class="price-row">

                <span class="price">
                    ${money(product.price)}
                </span>

                <span class="original-price">
                    ${money(product.originalPrice)}
                </span>

                <span class="discount">
                    ${product.discount}% OFF
                </span>

            </div>


            <button
                class="btn btn-primary add-btn"
                data-add="${product.id}"
            >
                Add to Cart
            </button>

        </article>

    `).join("");


    document.querySelectorAll("[data-product]").forEach(element => {

        element.addEventListener("click", () => {
            openProduct(element.dataset.product);
        });

    });


    document.querySelectorAll("[data-add]").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            addToCart(button.dataset.add);

        });

    });

}


/* =========================================================
   SEARCH + SORT
   ========================================================= */

function setupSearch() {

    const navSearch = $("navSearch");
    const productSearch = $("productSearch");
    const sort = $("sortProducts");


    navSearch?.addEventListener("input", event => {

        state.search = event.target.value;

        productSearch.value = event.target.value;

        renderProducts();

    });


    productSearch?.addEventListener("input", event => {

        state.search = event.target.value;

        navSearch.value = event.target.value;

        renderProducts();

    });


    sort?.addEventListener("change", event => {

        state.sort = event.target.value;

        renderProducts();

    });

}


function resetFilters() {

    state.category = "All";
    state.search = "";
    state.sort = "default";


    $("productSearch").value = "";
    $("navSearch").value = "";
    $("categoryFilter").value = "All";
    $("sortProducts").value = "default";


    document.querySelectorAll(".category-card")
        .forEach(card => card.classList.remove("active"));

    document.querySelector(".category-card")
        ?.classList.add("active");


    renderProducts();

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProduct(productId) {

    const product =
        PRODUCTS.find(item => item.id === productId);

    if (!product) return;


    state.selectedProduct = product;


    $("productDetail").innerHTML = `

        <div class="detail-visual">

            ${bottleHTML(product, "large")}

        </div>


        <div class="detail-info">

            <span class="eyebrow">
                ${escapeHTML(product.category)}
            </span>

            <h2>
                ${escapeHTML(product.name)}
            </h2>


            <div class="rating">

                <span class="stars">
                    ★ ${product.rating}
                </span>

                <span class="reviews">
                    ${product.reviews} reviews
                </span>

            </div>


            <div class="price-row">

                <span class="price">
                    ${money(product.price)}
                </span>

                <span class="original-price">
                    ${money(product.originalPrice)}
                </span>

                <span class="discount">
                    ${product.discount}% OFF
                </span>

            </div>


            <p class="detail-description">
                ${escapeHTML(product.description)}
            </p>


            <div class="quantity-selector">

                <button id="detailMinus">
                    −
                </button>

                <strong id="detailQuantity">
                    1
                </strong>

                <button id="detailPlus">
                    +
                </button>

            </div>


            <button
                class="btn btn-primary full-btn"
                id="detailAdd"
            >
                Add to Cart
            </button>


            <button
                class="btn btn-light full-btn"
                id="detailBuy"
                style="margin-top:10px"
            >
                Buy Now
            </button>

        </div>

    `;


    let quantity = 1;


    $("detailMinus").onclick = () => {

        quantity = Math.max(1, quantity - 1);

        $("detailQuantity").textContent = quantity;

    };


    $("detailPlus").onclick = () => {

        quantity++;

        $("detailQuantity").textContent = quantity;

    };


    $("detailAdd").onclick = () => {

        addToCart(product.id, quantity);

        closeModal("productModal");

    };


    $("detailBuy").onclick = () => {

        addToCart(product.id, quantity);

        closeModal("productModal");

        openCart();

    };


    openModal("productModal");

}


/* =========================================================
   CART
   ========================================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem("rovish_plus_cart");

        state.cart =
            saved ? JSON.parse(saved) : [];

        if (!Array.isArray(state.cart)) {
            state.cart = [];
        }

    } catch {

        state.cart = [];

    }

}


function saveCart() {

    localStorage.setItem(
        "rovish_plus_cart",
        JSON.stringify(state.cart)
    );

}


function addToCart(productId, quantity = 1) {

    const product =
        PRODUCTS.find(item => item.id === productId);

    if (!product) return;


    const existing =
        state.cart.find(item => item.id === productId);


    if (existing) {

        existing.quantity += quantity;

    } else {

        state.cart.push({
            id: productId,
            quantity: quantity
        });

    }


    saveCart();

    updateCart();

    showToast("Added to cart ✓");

}


function removeFromCart(productId) {

    state.cart =
        state.cart.filter(item => item.id !== productId);

    saveCart();

    updateCart();

}


function changeQuantity(productId, change) {

    const item =
        state.cart.find(item => item.id === productId);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCart();

}


function getCartDetails() {

    return state.cart
        .map(item => {

            const product =
                PRODUCTS.find(p => p.id === item.id);

            if (!product) return null;

            return {
                ...product,
                quantity: item.quantity,
                lineTotal: product.price * item.quantity
            };

        })
        .filter(Boolean);

}


function cartSubtotal() {

    return getCartDetails()
        .reduce(
            (total, item) => total + item.lineTotal,
            0
        );

}


function deliveryCost() {

    const subtotal = cartSubtotal();

    if (
        subtotal === 0 ||
        subtotal >= STORE_CONFIG.freeDeliveryThreshold
    ) {
        return 0;
    }

    return STORE_CONFIG.deliveryFee;

}


function cartTotal() {

    return cartSubtotal() + deliveryCost();

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const details = getCartDetails();


    const count =
        details.reduce(
            (total, item) => total + item.quantity,
            0
        );


    $("cartCount").textContent = count;
    $("drawerCount").textContent = `(${count})`;


    if (!details.length) {

        $("cartItems").innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some Rovish Plus products.
                </p>

            </div>

        `;

    } else {

        $("cartItems").innerHTML =
            details.map(item => `

                <div class="cart-item">

                    <div class="mini-visual">
                        ${bottleHTML(item)}
                    </div>


                    <div>

                        <div class="cart-item-name">
                            ${escapeHTML(item.name)}
                        </div>

                        <div class="cart-item-price">
                            ${money(item.price)}
                        </div>


                        <div class="qty">

                            <button
                                data-minus="${item.id}"
                            >
                                −
                            </button>

                            <strong>
                                ${item.quantity}
                            </strong>

                            <button
                                data-plus="${item.id}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-item"
                        data-remove="${item.id}"
                    >
                        Remove
                    </button>

                </div>

            `).join("");


        document.querySelectorAll("[data-minus]")
            .forEach(button => {

                button.onclick = () => {

                    changeQuantity(
                        button.dataset.minus,
                        -1
                    );

                };

            });


        document.querySelectorAll("[data-plus]")
            .forEach(button => {

                button.onclick = () => {

                    changeQuantity(
                        button.dataset.plus,
                        1
                    );

                };

            });


        document.querySelectorAll("[data-remove]")
            .forEach(button => {

                button.onclick = () => {

                    removeFromCart(
                        button.dataset.remove
                    );

                };

            });

    }


    $("cartSubtotal").textContent =
        money(cartSubtotal());


    $("cartDelivery").textContent =
        deliveryCost() === 0
            ? "FREE"
            : money(deliveryCost());


    $("cartTotal").textContent =
        money(cartTotal());

}


/* =========================================================
   CART DRAWER
   ========================================================= */

function setupCart() {

    $("cartBtn").onclick = openCart;

    $("closeCart").onclick = closeCart;

    $("overlay").onclick = closeCart;


    $("checkoutBtn").onclick = () => {

        if (!state.cart.length) {

            showToast("Your cart is empty");

            return;

        }


        closeCart();

        renderCheckout();

        openModal("checkoutModal");

    };

}


function openCart() {

    $("cartDrawer").classList.add("active");

    $("overlay").classList.add("active");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    $("cartDrawer").classList.remove("active");

    $("overlay").classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* =========================================================
   MODALS
   ========================================================= */

function setupModals() {

    document.querySelectorAll("[data-close]")
        .forEach(button => {

            button.onclick = () => {

                closeModal(
                    button.dataset.close
                );

            };

        });


    document.querySelectorAll(".modal")
        .forEach(modal => {

            modal.addEventListener("click", event => {

                if (event.target === modal) {
                    closeModal(modal.id);
                }

            });

        });


    $("closeSuccess")?.addEventListener("click", () => {
        closeModal("successModal");
    });

}


function openModal(id) {

    $(id).classList.add("active");

    document.body.classList.add("no-scroll");

}


function closeModal(id) {

    $(id).classList.remove("active");

    if (!document.querySelector(".modal.active")) {
        document.body.classList.remove("no-scroll");
    }

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function renderCheckout() {

    const details = getCartDetails();


    $("checkoutProducts").innerHTML =
        details.map(item => `

            <div class="checkout-product">

                <span>
                    ${escapeHTML(item.name)}
                    × ${item.quantity}
                </span>

                <strong>
                    ${money(item.lineTotal)}
                </strong>

            </div>

        `).join("");


    $("checkoutSubtotal").textContent =
        money(cartSubtotal());


    $("checkoutDelivery").textContent =
        deliveryCost() === 0
            ? "FREE"
            : money(deliveryCost());


    $("checkoutTotal").textContent =
        money(cartTotal());

}


/* =========================================================
   PHONE OTP VERIFICATION
   ========================================================= */

function toIndianE164(phone) {

    return `+91${phone.replace(/\D/g, "")}`;

}


function hasFirebaseConfig() {

    const config = window.FIREBASE_CONFIG;

    return Boolean(
        config &&
        config.apiKey &&
        config.authDomain &&
        config.projectId &&
        config.appId
    );

}


function getFirebaseAuth() {

    if (!hasFirebaseConfig()) {
        throw new Error("firebase-not-configured");
    }

    if (!window.firebase?.auth) {
        throw new Error("firebase-sdk-unavailable");
    }

    if (!window.firebase.apps.length) {
        window.firebase.initializeApp(window.FIREBASE_CONFIG);
    }

    const auth = window.firebase.auth();

    auth.languageCode = "en";

    return auth;

}


function setOtpStatus(message) {

    $("otpStatus").textContent = message;

}


function clearOtpChallenge() {

    if (otpState.recaptchaVerifier) {

        otpState.recaptchaVerifier.clear();
        otpState.recaptchaVerifier = null;

    }

    $("recaptchaContainer").replaceChildren();

}


function otpErrorMessage(error, action) {

    switch (error?.code) {

        case "auth/invalid-phone-number":
            return "Enter a valid mobile number.";

        case "auth/too-many-requests":
            return "Too many OTP attempts. Please try again later.";

        case "auth/quota-exceeded":
            return "SMS limit reached. Please try again later.";

        case "auth/invalid-verification-code":
            return "The OTP is incorrect. Please try again.";

        case "auth/code-expired":
            return "This OTP has expired. Please request a new OTP.";

        case "firebase-not-configured":
            return "OTP service is not configured yet.";

        default:
            return action === "verify"
                ? "OTP could not be verified. Please try again."
                : "OTP could not be sent. Please try again.";

    }

}


async function sendPhoneOtp(order) {

    const phone = toIndianE164(order.phone);
    const sendButton = $("placeOrderBtn");

    otpState.pendingOrder = order;
    otpState.pendingPhone = phone;

    $("otpVerification").hidden = false;
    $("otpCodeGroup").hidden = true;
    $("otpCode").value = "";

    setOtpStatus(`Complete the security check to send an OTP to ${phone}.`);

    sendButton.disabled = true;
    sendButton.textContent = "Sending OTP...";

    try {

        const auth = getFirebaseAuth();

        clearOtpChallenge();

        otpState.recaptchaVerifier =
            new window.firebase.auth.RecaptchaVerifier(
                "recaptchaContainer",
                { size: "normal" }
            );

        await otpState.recaptchaVerifier.render();

        otpState.confirmationResult =
            await auth.signInWithPhoneNumber(
                phone,
                otpState.recaptchaVerifier
            );

        setOtpStatus(`OTP sent to ${phone}. Enter it below to place your order.`);

        $("otpCodeGroup").hidden = false;
        $("otpCode").focus();

        sendButton.disabled = false;
        sendButton.textContent = "Resend OTP";

    } catch (error) {

        console.error("OTP send failed:", error);

        clearOtpChallenge();

        otpState.confirmationResult = null;

        setOtpStatus(otpErrorMessage(error, "send"));
        showToast(otpErrorMessage(error, "send"));

        sendButton.disabled = false;
        sendButton.textContent = "Send OTP";

    }

}


function completeOrder(order) {

    state.cart = [];

    saveCart();

    updateCart();

    closeModal("checkoutModal");

    showSuccess(order);

}


async function verifyPhoneOtp() {

    const code = $("otpCode").value.trim();
    const verifyButton = $("verifyOtpBtn");

    if (!/^\d{6}$/.test(code)) {

        showToast("Enter the 6-digit OTP");

        return;

    }

    if (!otpState.confirmationResult || !otpState.pendingOrder) {

        showToast("Please request an OTP first");

        return;

    }

    verifyButton.disabled = true;
    verifyButton.textContent = "Verifying...";

    try {

        await otpState.confirmationResult.confirm(code);

        otpState.verifiedPhone = otpState.pendingPhone;

        setOtpStatus("Phone number verified successfully.");

        const verifiedOrder = otpState.pendingOrder;

        otpState.pendingOrder = null;
        otpState.confirmationResult = null;

        clearOtpChallenge();

        completeOrder(verifiedOrder);

    } catch (error) {

        console.error("OTP verification failed:", error);

        setOtpStatus(otpErrorMessage(error, "verify"));
        showToast(otpErrorMessage(error, "verify"));

    } finally {

        verifyButton.disabled = false;
        verifyButton.textContent = "Verify OTP";

    }

}


function setupCheckout() {

    $("verifyOtpBtn")?.addEventListener("click", verifyPhoneOtp);

    $("otpCode")?.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            event.preventDefault();
            verifyPhoneOtp();
        }

    });

    $("checkoutForm").addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const form =
                $("checkoutForm");


            const name =
                form.querySelector('[name="name"]').value.trim();


            const phone =
                form.querySelector('[name="phone"]').value.trim();


            const address =
                form.querySelector('[name="address"]').value.trim();


            const city =
                form.querySelector('[name="city"]').value.trim();


            const pin =
                form.querySelector('[name="pin"]').value.trim();


            if (!name || !address || !city) {

                showToast("Please fill all details");

                return;

            }


            if (!/^[6-9]\d{9}$/.test(phone)) {

                showToast("Enter a valid 10-digit mobile number");

                return;

            }


            if (!/^\d{6}$/.test(pin)) {

                showToast("Enter a valid 6-digit PIN code");

                return;

            }


            const order = {

                id:
                    "RP-" +
                    Date.now()
                        .toString()
                        .slice(-8),

                name,
                phone,
                address,
                city,
                pin,

                items: getCartDetails(),

                subtotal: cartSubtotal(),

                delivery: deliveryCost(),

                total: cartTotal(),

                payment:
                    form.querySelector('[name="payment"]:checked')?.value === "cod"
                        ? "Cash on Delivery"
                        : "Online Payment"

            };


            if (otpState.verifiedPhone === toIndianE164(phone)) {
                completeOrder(order);
                return;
            }


            sendPhoneOtp(order);

        }
    );

}


/* =========================================================
   SUCCESS
   ========================================================= */

function showSuccess(order) {

    $("orderId").textContent = order.id;


    $("successSummary").innerHTML = `

        <strong>
            ${escapeHTML(order.name)}
        </strong>

        <p style="margin-top:8px">
            ${escapeHTML(order.address)},
            ${escapeHTML(order.city)}
            - ${escapeHTML(order.pin)}
        </p>

        <hr style="
            border:0;
            border-top:1px solid #e2e8ef;
            margin:12px 0
        ">

        ${order.items.map(item => `

            <p>

                ${escapeHTML(item.name)}
                × ${item.quantity}
                —
                ${money(item.lineTotal)}

            </p>

        `).join("")}

        <hr style="
            border:0;
            border-top:1px solid #e2e8ef;
            margin:12px 0
        ">

        <p>
            Subtotal:
            ${money(order.subtotal)}
        </p>

        <p>
            Delivery:
            ${
                order.delivery === 0
                    ? "FREE"
                    : money(order.delivery)
            }
        </p>

        <p style="margin-top:8px">
            <strong>
                Total: ${money(order.total)}
            </strong>
        </p>

        <p style="margin-top:8px">
            Payment: Cash on Delivery
        </p>

    `;


    openModal("successModal");

}


/* =========================================================
   WHATSAPP ORDER
   ========================================================= */

function createWhatsAppMessage(order) {

    const products =
        order.items.map(item =>
            `• ${item.name} x ${item.quantity} = ${money(item.lineTotal)}`
        ).join("\n");


    return `NEW ORDER - ROVISH PLUS

Order ID: ${order.id}

Customer:
${order.name}

Mobile:
${order.phone}

Address:
${order.address}, ${order.city} - ${order.pin}

Products:
${products}

Subtotal: ${money(order.subtotal)}

Delivery:
${order.delivery === 0 ? "FREE" : money(order.delivery)}

TOTAL:
${money(order.total)}

Payment:
Cash on Delivery`;


}


function openWhatsApp(order) {

    const number =
        STORE_CONFIG.whatsapp.replace(/\D/g, "");


    if (
        !number ||
        STORE_CONFIG.whatsapp === "YOUR_WHATSAPP_NUMBER"
    ) {

        showToast(
            "script.js me WhatsApp number add karo"
        );

        return;

    }


    const message =
        createWhatsAppMessage(order);


    const url =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

}


/* =========================================================
   ADD WHATSAPP BUTTON TO SUCCESS
   ========================================================= */

function addWhatsAppButton() {

    const buttons =
        document.querySelector(".success-buttons");

    if (!buttons) return;


    if ($("whatsappOrderBtn")) return;


    const button =
        document.createElement("button");

    button.id = "whatsappOrderBtn";

    button.className = "btn btn-primary";

    button.textContent =
        "Send Order on WhatsApp";


    button.onclick = () => {

        const order = window.lastRovishOrder;

        if (order) {
            openWhatsApp(order);
        }

    };


    buttons.prepend(button);

}


const originalShowSuccess = showSuccess;


/* =========================================================
   OVERRIDE SUCCESS TO SAVE ORDER
   ========================================================= */

window.showSuccess = function(order) {

    window.lastRovishOrder = order;

    originalShowSuccess(order);

    setTimeout(() => {
        addWhatsAppButton();
    }, 50);

};


/* =========================================================
   REVIEWS
   ========================================================= */

function renderReviews() {

    const grid = document.querySelector(".reviews-grid");

    if (!grid) return;


    grid.innerHTML =
        REVIEWS.map(review => `

            <article class="review-card">

                <div class="review-stars">
                    ★★★★★
                </div>

                <p>
                    “${escapeHTML(review.text)}”
                </p>

                <div class="reviewer">

                    <div class="avatar">
                        ${escapeHTML(
                            review.name.charAt(0)
                        )}
                    </div>

                    <div>

                        <strong>
                            ${escapeHTML(review.name)}
                        </strong>

                        <span>
                            ${escapeHTML(review.city)}
                        </span>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   FAQ
   ========================================================= */

function setupFAQ() {

    document.querySelectorAll(".faq-question")
        .forEach(button => {

            button.addEventListener("click", () => {

                const item =
                    button.parentElement;


                const active =
                    item.classList.contains("active");


                document.querySelectorAll(".faq-item")
                    .forEach(faq =>
                        faq.classList.remove("active")
                    );


                if (!active) {
                    item.classList.add("active");
                }

            });

        });

}


/* =========================================================
   COMBO
   ========================================================= */

function setupCombo() {

    $("comboBtn")?.addEventListener(
        "click",
        () => {

            addToCart("rp112");

            openCart();

        }
    );

}


/* =========================================================
   FOOTER
   ========================================================= */

function setupFooter() {

    document.querySelectorAll(".footer p")
        .forEach(p => {

            if (p.textContent.includes("hello@")) {
                p.textContent =
                    "✉️ " + STORE_CONFIG.email;
            }

            if (p.textContent.includes("+91")) {
                p.textContent =
                    "📞 " + STORE_CONFIG.phone;
            }

        });


    document.querySelectorAll(".socials a")
        .forEach(link => {

            if (
                link.getAttribute("aria-label")
                    ?.toLowerCase()
                    .includes("whatsapp")
            ) {

                link.onclick = event => {

                    event.preventDefault();

                    if (
                        STORE_CONFIG.whatsapp !==
                        "YOUR_WHATSAPP_NUMBER"
                    ) {

                        const number =
                            STORE_CONFIG.whatsapp
                                .replace(/\D/g, "");

                        window.open(
                            `https://wa.me/${number}`,
                            "_blank"
                        );

                    } else {

                        showToast(
                            "WhatsApp number add karo"
                        );

                    }

                };

            }

        });

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    const toast = $("toast");

    if (!toast) return;


    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal.active")
            .forEach(modal => {

                closeModal(modal.id);

            });


        closeCart();

    }

});
