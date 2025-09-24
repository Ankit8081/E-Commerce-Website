
const productsGrid = document.getElementById("productsGrid");
const productsCount = document.getElementById("productsCount");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const sortSelect = document.getElementById("sortSelect");
const clearFilters = document.getElementById("clearFilters");
const loadingSpinner = document.getElementById("loadingSpinner");


const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const imageGallery = document.getElementById("imageGallery");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");


let filteredProducts = [...PRODUCTS_DATA];


function renderProducts(products) {
  productsGrid.innerHTML = "";

  if (products.length === 0) {
    noResults.style.display = "block";
    productsCount.textContent = "0 products found";
    return;
  }

  noResults.style.display = "none";
  productsCount.textContent = `${products.length} product(s) found`;

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <div class="product-category">${product.category}</div>
      </div>
      <div class="product-info">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <p class="product-description">${product.description}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(product));
    productsGrid.appendChild(card);
  });
}

function openModal(product) {
  modalImage.src = product.image;
  modalTitle.textContent = product.name;
  modalPrice.textContent = `$${product.price.toFixed(2)}`;
  modalCategory.textContent = product.category;
  modalDescription.textContent = product.description;

  imageGallery.innerHTML = "";
  product.images.forEach((img, idx) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.className = "gallery-thumb";
    if (idx === 0) thumb.classList.add("active");
    thumb.addEventListener("click", () => {
      modalImage.src = img;
      document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    imageGallery.appendChild(thumb);
  });

  productModal.classList.add("active");
}

function closeModal() {
  productModal.classList.remove("active");
}


function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const maxPrice = parseFloat(priceRange.value);
  const sort = sortSelect.value;

  filteredProducts = PRODUCTS_DATA.filter(p => {
    return (
      p.name.toLowerCase().includes(search) &&
      (category === "" || p.category === category) &&
      p.price <= maxPrice
    );
  });

  if (sort === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts(filteredProducts);
}


function initCategories() {
  const categories = [...new Set(PRODUCTS_DATA.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });
}


searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  applyFilters();
});
sortSelect.addEventListener("change", applyFilters);
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "";
  priceRange.value = "1000";
  priceValue.textContent = "1000";
  sortSelect.value = "name";
  applyFilters();
});

modalClose.addEventListener("click", closeModal);
productModal.addEventListener("click", e => {
  if (e.target === productModal) closeModal();
});


window.addEventListener("load", () => {
  initCategories();
  applyFilters();
  loadingSpinner.classList.add("hidden");
});
