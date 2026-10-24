/* ====
   JUSPINE ELECTRONICS - Main JavaScript (vanilla JS, no framework)
   --------------------------------------
   Sections:
     1.  Helpers (money format, stars, toast, DOM shortcuts)
     2.  Page loader, navigation, scroll effects
     3.  Product rendering (cards)
     4.  Filtering / search / sorting (products page)
     5.  Shopping cart + localStorage
     6.  Product details modal
     7.  WhatsApp ordering
     8.  Order form, contact form, newsletter (validation + simulation)
     9.  Countdown timer for special offers
    10.  Live chat demo widget
    11.  Scroll reveal animations & init
   ========================================================================== */

/* ============================ 1. HELPERS ============================== */

/** Shortcut for document.querySelector */
const $ = (selector, scope = document) => scope.querySelector(selector);
/** Shortcut for document.querySelectorAll (returns a real array) */
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Format a number as FCFA money, e.g. 320000 -> "320 000 FCFA" */
function formatPrice(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + SITE_CONFIG.currency;
}

/** Build a star string from a rating, e.g. 4.5 -> "★★★★½" */
function starsHtml(rating, reviews) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let stars = "★".repeat(full) + (half ? "½" : "");
  stars = stars.padEnd(5, "☆");
  return `<div class="stars">${stars}<small>${rating.toFixed(1)} (${reviews})</small></div>`;
}

/** Discount percentage between the old price and the current price */
function discountPercent(product) {
  if (!product.oldPrice) return 0;
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}

/** Small toast notification in the top-right corner */
function showToast(message, type = "success") {
  const area = $("#toast-area");
  if (!area) return;
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;
  area.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

/** Find one product by its id */
function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

/* =============== 2. LOADER, NAVIGATION & SCROLL EFFECTS ================ */

function initLoader() {
  window.addEventListener("load", () => {
    const loader = $("#loader");
    if (loader) setTimeout(() => loader.classList.add("hidden"), 450);
  });
}

function initNavigation() {
  const burger = $("#hamburger");
  const links = $("#nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    
    // Close the mobile menu after clicking a link
    $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  }

  const header = $("#site-header");
  const topBtn = $("#scroll-top");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (topBtn) topBtn.classList.toggle("show", y > 500);
  });
  if (topBtn) topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ======================= 3. PRODUCT RENDERING ========================= */

/** Build the HTML of a single product card */
function productCardHtml(p) {
  const off = discountPercent(p);
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="product-media">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-tags">
        ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ""}
        ${off ? `<span class="badge badge-sale">-${off}%</span>` : ""}
      </div>
    </div>
    <div class="product-body">
      <span class="product-cat">${p.sub}</span>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      ${starsHtml(p.rating, p.reviews)}
      <div class="price-row">
        <span class="price">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm" data-action="add" data-id="${p.id}">Add to Cart</button>
        <button class="btn btn-outline btn-sm" data-action="details" data-id="${p.id}">View Details</button>
        <button class="btn btn-whatsapp btn-sm" data-action="whatsapp" data-id="${p.id}">Order via WhatsApp</button>
      </div>
    </div>
  </article>`;
}

/** Render a list of products inside a container element */
function renderProducts(list, container) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state"><h3>No product found</h3><p>Try another keyword or reset the filters.</p></div>`;
    return;
  }
  container.innerHTML = list.map(productCardHtml).join("");
}

/** Home page: featured products + category cards + weekly deals */
function renderHomeSections() {
  const featuredGrid = $("#featured-grid");
  if (featuredGrid) renderProducts(PRODUCTS.filter((p) => p.featured).slice(0, 8), featuredGrid);

  const catGrid = $("#category-grid");
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map(
      (c) => `
      <a class="category-card" href="products.html?category=${c.id}">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <div class="category-content">
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
          <p><strong>${PRODUCTS.filter((p) => p.category === c.id).length} products</strong></p>
        </div>
      </a>`
    ).join("");
  }

  const dealsGrid = $("#deals-grid");
  if (dealsGrid) {
    const deals = PRODUCTS.filter((p) => discountPercent(p) >= 10).slice(0, 4);
    renderProducts(deals, dealsGrid);
  }
}

/* ================ 4. FILTERING, SEARCH AND SORTING ==================== */

const filterState = { category: "all", search: "", sort: "default", featuredOnly: false };

function applyFilters() {
  const grid = $("#products-grid");
  if (!grid) return;

  let list = PRODUCTS.slice();

  if (filterState.category !== "all") list = list.filter((p) => p.category === filterState.category);
  if (filterState.featuredOnly) list = list.filter((p) => p.featured);

  if (filterState.search.trim()) {
    const q = filterState.search.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sub.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );
  }

  switch (filterState.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "name-desc": list.sort((a, b) => b.name.localeCompare(a.name)); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
  }

  renderProducts(list, grid);
  const line = $("#results-line");
  if (line) line.textContent = `${list.length} product(s) found`;
}

function initFilters() {
  const grid = $("#products-grid");
  if (!grid) return;

  // Read ?category= from the URL (used by the home page category cards)
  const params = new URLSearchParams(window.location.search);
  if (params.get("category")) filterState.category = params.get("category");
  if (params.get("search")) filterState.search = params.get("search");

  const searchInput = $("#search-input");
  const sortSelect = $("#sort-select");
  const catSelect = $("#category-select");
  const featuredCheck = $("#featured-only");

  if (searchInput) {
    searchInput.value = filterState.search;
    searchInput.addEventListener("input", (e) => {
      filterState.search = e.target.value;
      applyFilters();
    });
  }
  if (sortSelect) sortSelect.addEventListener("change", (e) => { filterState.sort = e.target.value; applyFilters(); });
  if (catSelect) {
    catSelect.value = filterState.category;
    catSelect.addEventListener("change", (e) => { filterState.category = e.target.value; syncChips(); applyFilters(); });
  }
  if (featuredCheck) featuredCheck.addEventListener("change", (e) => { filterState.featuredOnly = e.target.checked; applyFilters(); });

  $$(".chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      filterState.category = chip.dataset.category;
      if (catSelect) catSelect.value = filterState.category;
      syncChips();
      applyFilters();
    })
  );

  const reset = $("#reset-filters");
  if (reset) {
    reset.addEventListener("click", () => {
      filterState.category = "all";
      filterState.search = "";
      filterState.sort = "default";
      filterState.featuredOnly = false;
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "default";
      if (catSelect) catSelect.value = "all";
      if (featuredCheck) featuredCheck.checked = false;
      syncChips();
      applyFilters();
      showToast("Filters reset");
    });
  }

  syncChips();
  applyFilters();
}

function syncChips() {
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.category === filterState.category));
}

/* ================== 5. SHOPPING CART + LOCALSTORAGE =================== */

const CART_KEY = "technova_cart";
let cart = [];

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(id, qty = 1) {
  const product = getProduct(id);
  if (!product) return;
  const line = cart.find((i) => i.id === product.id);
  if (line) line.qty += qty;
  else cart.push({ id: product.id, qty: qty });
  saveCart();
  showToast(`${product.name} added to cart`, "success");
}

function changeQty(id, delta) {
  const line = cart.find((i) => i.id === Number(id));
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((i) => i.id !== line.id);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== Number(id));
  saveCart();
  showToast("Product removed from cart", "error");
}

function cartTotal() {
  return cart.reduce((sum, line) => {
    const p = getProduct(line.id);
    return p ? sum + p.price * line.qty : sum;
  }, 0);
}

function renderCart() {
  const count = cart.reduce((n, l) => n + l.qty, 0);
  $$(".cart-count").forEach((el) => (el.textContent = count));

  const box = $("#cart-items");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = `<div class="empty-state"><h3>Your cart is empty</h3><p>Browse our catalogue and add your favourite devices.</p></div>`;
  } else {
    box.innerHTML = cart
      .map((line) => {
        const p = getProduct(line.id);
        if (!p) return "";
        return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <h4>${p.name}</h4>
            <small>${formatPrice(p.price)}</small>
            <div class="qty">
              <button data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">-</button>
              <span>${line.qty}</span>
              <button data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div style="text-align:right">
            <strong style="font-size:.9rem">${formatPrice(p.price * line.qty)}</strong><br>
            <button class="remove-btn" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>`;
      })
      .join("");
  }

  const subtotal = cartTotal();
  const delivery = subtotal > 0 ? 2000 : 0;
  const sub = $("#cart-subtotal");
  const del = $("#cart-delivery");
  const tot = $("#cart-total");
  if (sub) sub.textContent = formatPrice(subtotal);
  if (del) del.textContent = formatPrice(delivery);
  if (tot) tot.textContent = formatPrice(subtotal + delivery);
}

function openCart() { $("#cart-drawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeCart() { $("#cart-drawer").classList.remove("open"); $("#overlay").classList.remove("open"); }

function initCart() {
  loadCart();
  renderCart();
  $$(".open-cart").forEach((b) => b.addEventListener("click", openCart));
  const close = $("#close-cart");
  if (close) close.addEventListener("click", closeCart);
  const overlay = $("#overlay");
  if (overlay) overlay.addEventListener("click", () => { closeCart(); closeModal(); });

  const clear = $("#clear-cart");
  if (clear) clear.addEventListener("click", () => { cart = []; saveCart(); showToast("Cart cleared", "error"); });

  const cont = $("#continue-shopping");
  if (cont) cont.addEventListener("click", closeCart);

  const checkout = $("#checkout-btn");
  if (checkout) {
    checkout.addEventListener("click", () => {
      if (!cart.length) return showToast("Your cart is empty", "error");
      closeCart();
      // Go to the order form (available on the home page)
      const isHome = !!$("#order");
      if (isHome) $("#order").scrollIntoView({ behavior: "smooth" });
      else window.location.href = "index.html#order";
    });
  }

  // Quantity / remove buttons inside the drawer (event delegation)
  const items = $("#cart-items");
  if (items) {
    items.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const { action, id } = btn.dataset;
      if (action === "inc") changeQty(id, 1);
      if (action === "dec") changeQty(id, -1);
      if (action === "remove") removeFromCart(id);
    });
  }
}

/* ==================== 6. PRODUCT DETAILS MODAL ======================== */

let modalProductId = null;

function openModal(id) {
  const p = getProduct(id);
  if (!p) return;
  modalProductId = p.id;
  const off = discountPercent(p);

  $("#modal-content").innerHTML = `
    <div class="modal-grid">
      <div class="modal-img"><img src="${p.image}" alt="${p.name}"></div>
      <div class="modal-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
          <div>
            <span class="product-cat">${p.sub}</span>
            <h2 style="font-size:1.4rem;color:var(--navy)">${p.name}</h2>
          </div>
          <button class="close-btn" id="close-modal" aria-label="Close">&times;</button>
        </div>
        ${starsHtml(p.rating, p.reviews)}
        <div class="price-row">
          <span class="price" style="font-size:1.4rem">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
          ${off ? `<span class="badge badge-sale">-${off}%</span>` : ""}
        </div>
        <p style="color:var(--muted);font-size:.92rem">${p.desc}</p>
        <p class="stock">${p.stock ? "✔ In stock - ready for delivery" : "Out of stock"}</p>
        <h4 style="color:var(--navy);margin-top:6px">Specifications</h4>
        <ul class="spec-list">
          ${Object.entries(p.specs).map(([k, v]) => `<li><span>${k}</span><span><strong>${v}</strong></span></li>`).join("")}
        </ul>
        <div class="qty" style="margin-top:6px">
          <span style="font-size:.88rem;color:var(--muted);margin-right:6px">Quantity</span>
          <button id="modal-dec">-</button><span id="modal-qty">1</span><button id="modal-inc">+</button>
        </div>
        <div class="card-actions" style="grid-template-columns:1fr 1fr">
          <button class="btn btn-primary" id="modal-add">Add to Cart</button>
          <button class="btn btn-outline" id="modal-order">Order Now</button>
          <button class="btn btn-whatsapp" id="modal-whatsapp">Order via WhatsApp</button>
        </div>
      </div>
    </div>`;

  $("#product-modal").classList.add("open");
  $("#overlay").classList.add("open");

  // Modal interactions
  let qty = 1;
  const qtyEl = $("#modal-qty");
  $("#modal-inc").addEventListener("click", () => { qty++; qtyEl.textContent = qty; });
  $("#modal-dec").addEventListener("click", () => { if (qty > 1) { qty--; qtyEl.textContent = qty; } });
  $("#close-modal").addEventListener("click", closeModal);
  $("#modal-add").addEventListener("click", () => { addToCart(p.id, qty); closeModal(); });
  $("#modal-whatsapp").addEventListener("click", () => orderOnWhatsApp(p.id, qty));
  $("#modal-order").addEventListener("click", () => {
    closeModal();
    preselectOrder(p.id, qty);
  });
}

function closeModal() {
  const modal = $("#product-modal");
  if (!modal) return;
  modal.classList.remove("open");
  if (!$("#cart-drawer").classList.contains("open")) $("#overlay").classList.remove("open");
  modalProductId = null;
}

/* ====================== 7. WHATSAPP ORDERING ========================== */

/** Opens WhatsApp with a pre-filled order message */
function orderOnWhatsApp(id, qty = 1) {
  const p = getProduct(id);
  if (!p) return;
  const message =
    `Hello ${SITE_CONFIG.brand}, I would like to order ${p.name}. ` +
    `Price: ${formatPrice(p.price)}. Quantity: ${qty}.`;
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function initWhatsAppFloating() {
  const fab = $("#fab-whatsapp");
  if (fab) {
    fab.addEventListener("click", () => {
      const msg = `Hello ${SITE_CONFIG.brand}, I would like more information about your products.`;
      window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }
}

/* ============= 8. ORDER FORM / CONTACT / NEWSLETTER =================== */

/** Fill the "Selected Product" dropdown with the whole catalogue */
function initOrderForm() {
  const form = $("#order-form");
  if (!form) return;

  const select = $("#order-product");
  select.innerHTML =
    '<option value="">-- Choose a product --</option>' +
    CATEGORIES.map(
      (c) =>
        `<optgroup label="${c.name}">` +
        PRODUCTS.filter((p) => p.category === c.id)
          .map((p) => `<option value="${p.id}">${p.name} - ${formatPrice(p.price)}</option>`)
          .join("") +
        "</optgroup>"
    ).join("");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const product = getProduct($("#order-product").value);
    const qty = Number($("#order-qty").value) || 1;
    const total = product ? formatPrice(product.price * qty) : "-";

    $("#order-success").innerHTML = `
      <div class="panel" style="border-color:#bbf7d0;background:#f0fdf4">
        <h3 style="color:#15803d">✔ Order received - thank you ${$("#order-name").value}!</h3>
        <p style="font-size:.9rem;color:#166534;margin-top:6px">
          Your order for <strong>${qty} x ${product ? product.name : ""}</strong> (total ${total})
          has been registered. Our team will call you on <strong>${$("#order-phone").value}</strong>
          within 30mins to confirm the delivery to <strong>${$("#order-location").value}</strong>.
        </p>
        <p style="font-size:.78rem;color:var(--muted);margin-top:8px">
          Just be patient, you will get a response as soon as we receive your message. JUSPINE'S CARES.😘 
        </p>
      </div>`;
    form.reset();
    showToast("Order submitted successfully");
    $("#order-success").scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/** Pre-select a product in the order form and scroll to it */
function preselectOrder(id, qty = 1) {
  const select = $("#order-product");
  if (!select) {
    window.location.href = `index.html#order`;
    return;
  }
  select.value = String(id);
  $("#order-qty").value = qty;
  $("#order").scrollIntoView({ behavior: "smooth" });
  showToast("Product added to the order form");
}

/** Generic validation: required fields, email format and phone length */
function validateForm(form) {
  let valid = true;
  $$("[data-validate]", form).forEach((field) => {
    const errorBox = $(`#${field.id}-error`, form);
    let message = "";
    const value = field.value.trim();

    if (!value) message = "This field is required.";
    else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) message = "Enter a valid email address.";
    else if (field.dataset.validate === "phone" && value.replace(/\D/g, "").length < 8) message = "Enter a valid phone number.";

    if (errorBox) errorBox.textContent = message;
    if (message) valid = false;
  });
  if (!valid) showToast("Please correct the highlighted fields", "error");
  return valid;
}

function initContactAndNewsletter() {
  const contact = $("#contact-form");
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateForm(contact)) return;
      showToast("Message sent! We will reply shortly.");
      contact.reset();
    });
  }

  const news = $("#newsletter-form");
  if (news) {
    news.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#newsletter-email").value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return showToast("Enter a valid email address", "error");
      showToast("Thank you for subscribing!");
      news.reset();
    });
  }
}

/* ==================== 9. SPECIAL OFFERS COUNTDOWN ===================== */

function initCountdown() {
  const box = $("#countdown");
  if (!box) return;

  // The deal ends 3 days after the first visit (stored so it stays consistent)
  let end = localStorage.getItem("juspineelectronics_deal_end");
  if (!end || Number(end) < Date.now()) {
    end = Date.now() + 3 * 24 * 60 * 60 * 1000;
    localStorage.setItem("juspineelectronics_deal_end", end);
  }

  const tick = () => {
    const diff = Math.max(0, Number(end) - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, "0");
    box.innerHTML = `
      <div class="count-box"><strong>${pad(days)}</strong><span>Days</span></div>
      <div class="count-box"><strong>${pad(hours)}</strong><span>Hours</span></div>
      <div class="count-box"><strong>${pad(mins)}</strong><span>Minutes</span></div>
      <div class="count-box"><strong>${pad(secs)}</strong><span>Seconds</span></div>`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ======================= 10. LIVE CHAT (DEMO) ========================= */

const CHAT_REPLIES = [
  { keys: ["price", "cost", "how much", "fcfa"], answer: "All our prices are shown in FCFA on each product card. Tell me the product name and I will confirm the exact price." },
  { keys: ["delivery", "shipping", "deliver"], answer: "We deliver within Buea and Mutengene within 1hr max. Other cities take 2-4 days." },
  { keys: ["payment", "pay", "mobile money", "om", "momo"], answer: "You can pay by Mobile Money, Orange Money, or cash on delivery." },
  { keys: ["warranty", "guarantee"], answer: "Every device comes with an official warranty from 3 to  months depending on the brand." },
  { keys: ["location", "shop", "where", "address"], answer: `You can visit our shop: ${SITE_CONFIG.location}.` },
  { keys: ["hello", "hi", "bonjour", "hey"], answer: "Hello! Welcome to JUSPINE ELECTRONICS. How can I help you today?" },
  { keys: ["whatsapp", "contact", "phone", "call"], answer: `You can reach us on ${SITE_CONFIG.phone} or through the WhatsApp button at the bottom right.` },
];

function chatReply(text) {
  const t = text.toLowerCase();
  const found = CHAT_REPLIES.find((r) => r.keys.some((k) => t.includes(k)));
  return found
    ? found.answer
    : "Thanks for your message! Any of our shop agents will get to you shortly. Meanwhile for a faster response, you can order directly via WhatsApp.";
}

function addChatMessage(text, who) {
  const body = $("#chat-body");
  const msg = document.createElement("div");
  msg.className = "msg " + who;
  msg.textContent = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

function initChat() {
  const win = $("#chat-window");
  if (!win) return;

  $("#fab-chat").addEventListener("click", () => {
    win.classList.toggle("open");
    win.classList.remove("minimized");
  });
  $("#chat-close").addEventListener("click", () => win.classList.remove("open"));
  $("#chat-min").addEventListener("click", () => win.classList.toggle("minimized"));

  $("#chat-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#chat-input");
    const text = input.value.trim();
    if (!text) return;
    addChatMessage(text, "user");
    input.value = "";
    setTimeout(() => addChatMessage(chatReply(text), "bot"), 700);
  });
}

/* ============== 11. SCROLL REVEAL + GLOBAL INITIALISATION ============= */

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

/** One global click listener handles every product card button */
function initCardActions() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn || !btn.dataset.id) return;
    const { action, id } = btn.dataset;
    if (action === "add") addToCart(id);
    if (action === "details") openModal(id);
    if (action === "whatsapp") orderOnWhatsApp(id, 1);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeCart(); }
  });
}

/** Fill dynamic contact info so it is edited in one place (products.js) */
function fillSiteInfo() {
  $$("[data-info]").forEach((el) => {
    const key = el.dataset.info;
    if (SITE_CONFIG[key]) el.textContent = SITE_CONFIG[key];
  });
  $$("[data-wa-link]").forEach((el) => (el.href = `https://wa.me/${SITE_CONFIG.whatsapp}`));
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavigation();
  fillSiteInfo();
  renderHomeSections();
  initFilters();
  initCart();
  initCardActions();
  initOrderForm();
  initContactAndNewsletter();
  initCountdown();
  initChat();
  initWhatsAppFloating();
  initReveal();
});
