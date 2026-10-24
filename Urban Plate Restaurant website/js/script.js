/* ============================================
   URBAN PLATE - Vanilla JavaScript
   Cart, Search, Filters, Forms & more
   ============================================ */

// ---------- Menu Data (15+ items) ----------
const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 6.99,
    oldPrice: 8.99,
    discount: 22,
    rating: 4.7,
    reviews: 128,
    image: "images/burger-1.jpg",
    badge: "Best Seller",
    badgeClass: "badge-best",
    desc: "Juicy beef patty with melted cheddar, fresh lettuce, tomato and our signature sauce.",
    ingredients: ["Beef Patty", "Cheddar Cheese", "Fresh Lettuce", "Tomato", "Burger Sauce", "Sesame Bun"],
    available: true
  },
  {
    id: 2,
    name: "BBQ Bacon Burger",
    category: "Burgers",
    price: 8.49,
    oldPrice: 10.49,
    discount: 19,
    rating: 4.8,
    reviews: 95,
    image: "images/burger-2.jpg",
    badge: "Chef’s Special",
    badgeClass: "badge-special",
    desc: "Smoky BBQ sauce, crispy bacon, cheddar and caramelized onions on a toasted bun.",
    ingredients: ["Beef Patty", "Bacon", "Cheddar", "BBQ Sauce", "Caramelized Onions", "Brioche Bun"],
    available: true
  },
  {
    id: 3,
    name: "Double Smash Burger",
    category: "Burgers",
    price: 9.99,
    oldPrice: 11.99,
    discount: 17,
    rating: 4.9,
    reviews: 210,
    image: "images/burger-3.jpg",
    badge: "New",
    badgeClass: "badge-new",
    desc: "Two smash patties, American cheese, pickles and special smash sauce.",
    ingredients: ["Double Beef Patty", "American Cheese", "Pickles", "Smash Sauce", "Onion", "Potato Bun"],
    available: true
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    price: 8.99,
    oldPrice: 10.49,
    discount: 14,
    rating: 4.6,
    reviews: 74,
    image: "images/burger-4.jpg",
    badge: null,
    badgeClass: "",
    desc: "Sautéed mushrooms, Swiss cheese and garlic aioli on a soft bun.",
    ingredients: ["Beef Patty", "Swiss Cheese", "Sautéed Mushrooms", "Garlic Aioli", "Arugula", "Brioche"],
    available: true
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 10.99,
    oldPrice: 13.99,
    discount: 21,
    rating: 4.8,
    reviews: 186,
    image: "images/pizza-1.jpg",
    badge: "Best Seller",
    badgeClass: "badge-best",
    desc: "Classic pepperoni with mozzarella and rich tomato sauce on stone-baked crust.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Pepperoni", "Oregano", "Olive Oil"],
    available: true
  },
  {
    id: 6,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 9.49,
    oldPrice: 11.49,
    discount: 17,
    rating: 4.7,
    reviews: 142,
    image: "images/pizza-2.jpg",
    badge: null,
    badgeClass: "",
    desc: "Fresh mozzarella, basil and San Marzano tomato sauce on thin crust.",
    ingredients: ["Pizza Dough", "San Marzano Sauce", "Fresh Mozzarella", "Basil", "Olive Oil", "Sea Salt"],
    available: true
  },
  {
    id: 7,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 12.49,
    oldPrice: 14.99,
    discount: 17,
    rating: 4.6,
    reviews: 98,
    image: "images/pizza-3.jpg",
    badge: "Limited Offer",
    badgeClass: "badge-limited",
    desc: "Grilled chicken, red onions, cilantro and smoky BBQ base.",
    ingredients: ["Pizza Dough", "BBQ Sauce", "Grilled Chicken", "Red Onion", "Cilantro", "Mozzarella"],
    available: true
  },
  {
    id: 8,
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    price: 11.99,
    oldPrice: 13.99,
    discount: 14,
    rating: 4.8,
    reviews: 167,
    image: "images/pasta-1.jpg",
    badge: "Chef’s Special",
    badgeClass: "badge-special",
    desc: "Fettuccine in rich Parmesan cream sauce with garlic and herbs.",
    ingredients: ["Fettuccine", "Heavy Cream", "Parmesan", "Garlic", "Butter", "Parsley"],
    available: true
  },
  {
    id: 9,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    price: 10.49,
    oldPrice: 12.49,
    discount: 16,
    rating: 4.7,
    reviews: 201,
    image: "images/pasta-2.jpg",
    badge: "Best Seller",
    badgeClass: "badge-best",
    desc: "Slow-cooked beef ragu with Italian herbs over al dente spaghetti.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato", "Onion", "Carrot", "Italian Herbs"],
    available: true
  },
  {
    id: 10,
    name: "Pesto Pasta",
    category: "Pasta",
    price: 10.99,
    oldPrice: 12.99,
    discount: 15,
    rating: 4.5,
    reviews: 89,
    image: "images/pasta-3.jpg",
    badge: "New",
    badgeClass: "badge-new",
    desc: "Fresh basil pesto, cherry tomatoes and pine nuts over penne.",
    ingredients: ["Penne", "Basil Pesto", "Cherry Tomatoes", "Pine Nuts", "Parmesan", "Garlic"],
    available: true
  },
  {
    id: 11,
    name: "Seafood Linguine",
    category: "Pasta",
    price: 14.99,
    oldPrice: 17.99,
    discount: 17,
    rating: 4.9,
    reviews: 76,
    image: "images/pasta-4.jpg",
    badge: "Chef’s Special",
    badgeClass: "badge-special",
    desc: "Shrimp, mussels and calamari in a light garlic white wine sauce.",
    ingredients: ["Linguine", "Shrimp", "Mussels", "Calamari", "Garlic", "White Wine"],
    available: true
  },
  {
    id: 12,
    name: "Strawberry Milkshake",
    category: "Drinks",
    price: 3.99,
    oldPrice: 4.99,
    discount: 20,
    rating: 4.6,
    reviews: 112,
    image: "images/drink-1.jpg",
    badge: null,
    badgeClass: "",
    desc: "Creamy vanilla ice cream blended with fresh strawberries.",
    ingredients: ["Vanilla Ice Cream", "Fresh Strawberries", "Milk", "Whipped Cream"],
    available: true
  },
  {
    id: 13,
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 2.99,
    oldPrice: 3.49,
    discount: 14,
    rating: 4.8,
    reviews: 203,
    image: "images/drink-2.jpg",
    badge: "Best Seller",
    badgeClass: "badge-best",
    desc: "Freshly squeezed oranges, no added sugar.",
    ingredients: ["Fresh Oranges"],
    available: true
  },
  {
    id: 14,
    name: "Iced Coffee",
    category: "Drinks",
    price: 3.49,
    oldPrice: 4.29,
    discount: 19,
    rating: 4.5,
    reviews: 88,
    image: "images/drink-3.jpg",
    badge: "New",
    badgeClass: "badge-new",
    desc: "Cold brew coffee over ice with a touch of cream.",
    ingredients: ["Cold Brew Coffee", "Ice", "Cream", "Sugar Syrup"],
    available: true
  },
  {
    id: 15,
    name: "Mango Smoothie",
    category: "Drinks",
    price: 4.49,
    oldPrice: 5.49,
    discount: 18,
    rating: 4.7,
    reviews: 65,
    image: "images/drink-4.jpg",
    badge: null,
    badgeClass: "",
    desc: "Tropical mango blended with yogurt and a hint of honey.",
    ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
    available: true
  },
  {
    id: 16,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 4.99,
    oldPrice: 6.49,
    discount: 23,
    rating: 4.9,
    reviews: 154,
    image: "images/dessert-1.jpg",
    badge: "Best Seller",
    badgeClass: "badge-best",
    desc: "Rich chocolate layer cake with ganache frosting.",
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter", "Sugar", "Cocoa"],
    available: true
  },
  {
    id: 17,
    name: "Cheesecake Slice",
    category: "Desserts",
    price: 5.49,
    oldPrice: 6.99,
    discount: 21,
    rating: 4.8,
    reviews: 132,
    image: "images/dessert-2.jpg",
    badge: "Chef’s Special",
    badgeClass: "badge-special",
    desc: "Creamy New York style cheesecake with berry compote.",
    ingredients: ["Cream Cheese", "Graham Cracker", "Sugar", "Eggs", "Berry Compote"],
    available: true
  },
  {
    id: 18,
    name: "Tiramisu",
    category: "Desserts",
    price: 5.99,
    oldPrice: 7.49,
    discount: 20,
    rating: 4.7,
    reviews: 91,
    image: "images/dessert-3.jpg",
    badge: "Limited Offer",
    badgeClass: "badge-limited",
    desc: "Classic Italian tiramisu with espresso-soaked ladyfingers.",
    ingredients: ["Mascarpone", "Ladyfingers", "Espresso", "Cocoa", "Eggs", "Sugar"],
    available: true
  },
  {
    id: 19,
    name: "Chocolate Donuts",
    category: "Desserts",
    price: 3.99,
    oldPrice: 4.99,
    discount: 20,
    rating: 4.6,
    reviews: 78,
    image: "images/dessert-4.jpg",
    badge: "New",
    badgeClass: "badge-new",
    desc: "Soft glazed chocolate donuts, perfect with coffee.",
    ingredients: ["Flour", "Cocoa", "Sugar", "Yeast", "Chocolate Glaze"],
    available: true
  },
  {
    id: 20,
    name: "Berry Parfait",
    category: "Desserts",
    price: 4.49,
    oldPrice: 5.49,
    discount: 18,
    rating: 4.5,
    reviews: 54,
    image: "images/dessert-5.jpg",
    badge: null,
    badgeClass: "",
    desc: "Layers of yogurt, granola and mixed fresh berries.",
    ingredients: ["Greek Yogurt", "Granola", "Strawberries", "Blueberries", "Honey"],
    available: true
  }
];

// ---------- Cart (localStorage) ----------
function getCart() {
  return JSON.parse(localStorage.getItem('urbanPlateCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('urbanPlateCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(id, qty = 1) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;

  let cart = getCart();
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: qty
    });
  }

  saveCart(cart);
  showNotification(`${item.name} added to cart!`, 'success');
}

function removeFromCart(id) {
  let cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
  renderCartPage();
  showNotification('Item removed from cart', 'success');
}

function updateQuantity(id, change) {
  let cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity < 1) {
    cart = cart.filter(c => c.id !== id);
  }
  saveCart(cart);
  renderCartPage();
}

// ---------- Notifications ----------
function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.innerHTML = `
    <span>${type === 'success' ? '✓' : '!'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(notif);

  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 400);
  }, 3000);
}

// ---------- Product Card HTML ----------
function createProductCard(item) {
  return `
    <div class="product-card" data-id="${item.id}" data-category="${item.category}" data-name="${item.name.toLowerCase()}" data-price="${item.price}">
      <div class="product-img-wrap">
        ${item.badge ? `<span class="product-badge ${item.badgeClass}">${item.badge}</span>` : ''}
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-category">${item.category}</div>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-rating">
          ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}
          <span>(${item.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="current-price">$${item.price.toFixed(2)}</span>
          <span class="old-price">$${item.oldPrice.toFixed(2)}</span>
          <span class="discount-tag">-${item.discount}%</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
          <a href="product-details.html?id=${item.id}" class="btn btn-outline btn-sm">View Details</a>
        </div>
      </div>
    </div>
  `;
}

// ---------- Render Products (Home / Menu) ----------
function renderProducts(containerId, items = menuItems, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = limit ? items.slice(0, limit) : items;
  if (list.length === 0) {
    container.innerHTML = '<p class="text-center" style="grid-column:1/-1;padding:40px;color:#6c757d;">No items found matching your criteria.</p>';
    return;
  }
  container.innerHTML = list.map(createProductCard).join('');
}

// ---------- Search ----------
function setupSearch() {
  const inputs = document.querySelectorAll('.search-input');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterAndRender(query);
    });
  });
}

function filterAndRender(query = '', category = 'All', sort = 'default') {
  let filtered = [...menuItems];

  // Category
  if (category && category !== 'All') {
    filtered = filtered.filter(i => i.category === category);
  }

  // Search
  if (query) {
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(query) ||
      i.category.toLowerCase().includes(query) ||
      i.desc.toLowerCase().includes(query)
    );
  }

  // Sort
  switch (sort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  // Render on menu page or home featured
  if (document.getElementById('menu-products')) {
    renderProducts('menu-products', filtered);
  }
  if (document.getElementById('featured-products') && !query && category === 'All') {
    renderProducts('featured-products', menuItems, 12);
  }
}

// ---------- Menu Page Filters ----------
function setupMenuFilters() {
  const categoryPills = document.querySelectorAll('.pill');
  const sortSelect = document.getElementById('sort-select');
  const searchInput = document.getElementById('menu-search');

  let currentCategory = 'All';
  let currentSort = 'default';
  let currentQuery = '';

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      filterAndRender(currentQuery, currentCategory, currentSort);
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender(currentQuery, currentCategory, currentSort);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.toLowerCase().trim();
      filterAndRender(currentQuery, currentCategory, currentSort);
    });
  }
}

// ---------- Product Details Page ----------
function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const item = menuItems.find(m => m.id === id);

  if (!item) {
    const container = document.getElementById('product-details-content');
    if (container) {
      container.innerHTML = '<p class="text-center">Product not found. <a href="menu.html">Back to Menu</a></p>';
    }
    return;
  }

  // Update page content
  document.title = `${item.name} | URBAN PLATE`;

  const mainImg = document.getElementById('main-product-img');
  if (mainImg) {
    mainImg.src = item.image;
    mainImg.alt = item.name;
  }

  const nameEl = document.getElementById('product-name');
  if (nameEl) nameEl.textContent = item.name;

  const catEl = document.getElementById('product-category');
  if (catEl) catEl.textContent = item.category;

  const ratingEl = document.getElementById('product-rating');
  if (ratingEl) {
    ratingEl.innerHTML = `${'★'.repeat(Math.floor(item.rating))} (${item.rating}) · ${item.reviews} reviews`;
  }

  const priceEl = document.getElementById('product-price');
  if (priceEl) {
    priceEl.innerHTML = `
      <span class="current">$${item.price.toFixed(2)}</span>
      <span class="old-price">$${item.oldPrice.toFixed(2)}</span>
      <span class="discount-tag">-${item.discount}%</span>
    `;
  }

  const availEl = document.getElementById('product-availability');
  if (availEl) {
    availEl.innerHTML = item.available
      ? '<span style="color:#2a9d8f;">● In Stock</span>'
      : '<span style="color:#e63946;">● Out of Stock</span>';
  }

  const descEl = document.getElementById('product-desc');
  if (descEl) descEl.textContent = item.desc;

  const ingEl = document.getElementById('product-ingredients');
  if (ingEl) {
    ingEl.innerHTML = item.ingredients.map(i => `<li>${i}</li>`).join('');
  }

  // Quantity
  let qty = 1;
  const qtyDisplay = document.getElementById('qty-display');
  const minusBtn = document.getElementById('qty-minus');
  const plusBtn = document.getElementById('qty-plus');

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      if (qty > 1) {
        qty--;
        qtyDisplay.textContent = qty;
      }
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      qty++;
      qtyDisplay.textContent = qty;
    });
  }

  const addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => addToCart(item.id, qty));
  }

  const orderBtn = document.getElementById('order-now-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      addToCart(item.id, qty);
      window.location.href = 'checkout.html';
    });
  }

  // Thumbnails (reuse same image for demo)
  const thumbs = document.querySelectorAll('.thumbnails img');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg) mainImg.src = thumb.src;
    });
  });
}

// ---------- Cart Page ----------
function renderCartPage() {
  const container = document.getElementById('cart-items-list');
  const summary = document.getElementById('cart-summary');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Looks like you haven’t added any delicious items yet.</p>
        <a href="menu.html" class="btn btn-primary">Browse Menu</a>
      </div>
    `;
    if (summary) summary.classList.add('hidden');
    return;
  }

  if (summary) summary.classList.remove('hidden');

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="price">$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-qty">
        <button onclick="updateQuantity(${item.id}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove item">×</button>
    </div>
  `).join('');

  // Calculate totals
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = subtotal > 0 ? (subtotal >= 30 ? 0 : 3.99) : 0;
  const discount = subtotal >= 50 ? subtotal * 0.1 : 0;
  const total = subtotal + delivery - discount;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('delivery-fee').textContent = delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`;
  document.getElementById('discount').textContent = discount > 0 ? `-$${discount.toFixed(2)}` : '$0.00';
  document.getElementById('grand-total').textContent = `$${total.toFixed(2)}`;
}

// ---------- Checkout ----------
function renderCheckoutSummary() {
  const container = document.getElementById('checkout-items');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="order-item">
      <span class="name">${item.name} × ${item.quantity}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = subtotal >= 30 ? 0 : 3.99;
  const discount = subtotal >= 50 ? subtotal * 0.1 : 0;
  const total = subtotal + delivery - discount;

  document.getElementById('co-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('co-delivery').textContent = delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`;
  document.getElementById('co-discount').textContent = discount > 0 ? `-$${discount.toFixed(2)}` : '$0.00';
  document.getElementById('co-total').textContent = `$${total.toFixed(2)}`;
}

function setupCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();

    if (!name || !email || !phone || !address || !city || !country) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Generate order number
    const orderNum = 'UP' + Date.now().toString().slice(-8);

    // Clear cart
    localStorage.removeItem('urbanPlateCart');
    updateCartCount();

    // Show success
    const layout = document.querySelector('.checkout-layout');
    if (layout) {
      layout.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px;background:white;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <div style="font-size:4rem;margin-bottom:20px;">🎉</div>
          <h2 style="color:#2a9d8f;margin-bottom:12px;">Your order has been placed successfully!</h2>
          <p style="font-size:1.2rem;margin-bottom:8px;">Order Number: <strong>${orderNum}</strong></p>
          <p style="color:#6c757d;margin-bottom:30px;">Thank you, ${name}! We’ll deliver your delicious food soon.</p>
          <a href="index.html" class="btn btn-primary">Back to Home</a>
          <a href="menu.html" class="btn btn-outline" style="margin-left:12px;">Order More</a>
        </div>
      `;
    }
  });
}

// ---------- Contact Form ----------
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    showNotification('Message sent successfully! We’ll get back to you soon.', 'success');
    form.reset();
  });
}

// ---------- Newsletter ----------
function setupNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showNotification('Thanks for subscribing to our newsletter!', 'success');
        input.value = '';
      }
    });
  });
}

// ---------- Mobile Menu ----------
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }
}

// ---------- Header Scroll ----------
function setupHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupMobileMenu();
  setupHeaderScroll();
  setupSearch();
  setupNewsletter();
  setupContactForm();

  // Page-specific
  const path = window.location.pathname;

  if (document.getElementById('featured-products')) {
    renderProducts('featured-products', menuItems, 12);
  }

  if (document.getElementById('menu-products')) {
    renderProducts('menu-products', menuItems);
    setupMenuFilters();
  }

  if (document.getElementById('product-details-content')) {
    loadProductDetails();
  }

  if (document.getElementById('cart-items-list')) {
    renderCartPage();
  }

  if (document.getElementById('checkout-form')) {
    renderCheckoutSummary();
    setupCheckoutForm();
  }
});
