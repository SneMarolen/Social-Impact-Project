const CATEGORY_META = {
  vegetables: { label: "Vegetables", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=80" },
  fruit: { label: "Fruit", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80" },
  herbs: { label: "Herbs", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80" },
  grains: { label: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80" },
  eggs: { label: "Eggs and Dairy", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=80" },
  meat: { label: "Meat", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80" }
};

const FARMERS = [
  { id: 1, name: "Mama Busi Nkosi", avatar: "MB", province: "Mpumalanga", location: "Hazyview, MP", lat: -24.93, lng: 31.12, narrative: "I have farmed this land for 22 years. Green Bridge gives me a beautiful storefront that helps customers trust the quality before the produce even arrives.", method: "organic", methodLabel: "Certified Organic", rating: 4.9, reviews: 128, farmName: "Nkosi Heritage Farm", established: 2002, whatsapp: "+27721234567", storyImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, name: "Thabang Molefe", avatar: "TM", province: "Limpopo", location: "Tzaneen, LP", lat: -23.83, lng: 30.16, narrative: "Our family has grown produce in Tzaneen for decades. I want customers to feel the freshness, but also the professionalism of how the farm is presented.", method: "mixed", methodLabel: "Mixed Methods", rating: 4.8, reviews: 102, farmName: "Molefe Family Farm", established: 1995, whatsapp: "+27722345678", storyImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, name: "Zanele Dlamini", avatar: "ZD", province: "KwaZulu-Natal", location: "Wartburg, KZN", lat: -29.43, lng: 30.59, narrative: "I specialise in delicate vegetables and herbs that need careful handling. The visual storytelling helps communicate that care in a way a plain listing never could.", method: "organic", methodLabel: "Certified Organic", rating: 4.9, reviews: 77, farmName: "Dlamini Micro Greens", established: 2015, whatsapp: "+27723456789", storyImage: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, name: "Petrus van Wyk", avatar: "PVW", province: "Western Cape", location: "Stellenbosch, WC", lat: -33.93, lng: 18.86, narrative: "We grow grains and fruit with long-term soil health in mind. Customers respond when the site looks as considered and refined as the farming itself.", method: "organic", methodLabel: "Certified Organic", rating: 4.9, reviews: 64, farmName: "Van Wyk Boerdery", established: 1980, whatsapp: "+27724567890", storyImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, name: "Ayesha Jacobs", avatar: "AJ", province: "Western Cape", location: "Paarl, WC", lat: -33.73, lng: 18.97, narrative: "My orchard and kitchen work together. Fresh fruit becomes preserves and sauces, so customers can shop both seasonal produce and pantry staples from the same story.", method: "mixed", methodLabel: "Small-Batch Mixed Methods", rating: 4.8, reviews: 58, farmName: "Jacobs Orchard Kitchen", established: 2011, whatsapp: "+27725678901", storyImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, name: "Kabelo Mokoena", avatar: "KM", province: "Free State", location: "Clarens, FS", lat: -28.52, lng: 28.42, narrative: "We wanted grains, eggs, and cultured dairy to feel premium online, not like an afterthought. Better imagery helps showcase that quality properly.", method: "conventional", methodLabel: "Responsible Conventional", rating: 4.7, reviews: 49, farmName: "Mokoena Fields", established: 2008, whatsapp: "+27726789012", storyImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80", farmImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" }
];

const PRODUCTS = [
  { id: 1, farmerId: 1, emoji: "&#129388;", name: "Baby Spinach Bunch", unit: "500g", price: 28, wasPrice: null, category: "vegetables", organic: true, surplus: false, featured: true, preorder: false, planted: "2026-02-12", harvest: "2026-04-18", stock: 35, rating: 4.9, reviews: 88, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=80", description: "Tender spinach leaves harvested early in the morning and packed for fast dispatch." },
  { id: 2, farmerId: 2, emoji: "&#127813;", name: "Heirloom Tomatoes", unit: "1kg", price: 45, wasPrice: 65, category: "vegetables", organic: false, surplus: true, featured: true, preorder: false, planted: "2026-01-15", harvest: "2026-04-10", stock: 12, rating: 4.7, reviews: 55, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80", description: "Three heirloom varieties selected for colour, flavour, and restaurant-quality presentation." },
  { id: 3, farmerId: 3, emoji: "&#129745;", name: "Mixed Mini Peppers", unit: "400g", price: 38, wasPrice: 52, category: "vegetables", organic: true, surplus: true, featured: true, preorder: false, planted: "2026-01-20", harvest: "2026-04-05", stock: 8, rating: 4.8, reviews: 39, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80", description: "Sweet mini peppers in a vibrant mix of red, orange, and yellow." },
  { id: 4, farmerId: 4, emoji: "&#127805;", name: "Sweet White Corn", unit: "4 cobs", price: 32, wasPrice: null, category: "vegetables", organic: true, surplus: false, featured: false, preorder: true, planted: "2026-03-01", harvest: "2026-05-02", stock: 50, rating: 4.9, reviews: 22, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1200&q=80", description: "Heritage white sweet corn with a softer texture and fuller sweetness." },
  { id: 5, farmerId: 4, emoji: "&#127818;", name: "Naartjie Citrus Box", unit: "2kg", price: 55, wasPrice: null, category: "fruit", organic: true, surplus: false, featured: true, preorder: false, planted: "2025-08-01", harvest: "2026-04-01", stock: 80, rating: 4.9, reviews: 74, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=1200&q=80", description: "Easy-peel citrus with bright sweetness and excellent juiciness." },
  { id: 6, farmerId: 5, emoji: "&#129361;", name: "Creamy Avocado Duo Pack", unit: "2 large fruit", price: 36, wasPrice: null, category: "fruit", organic: false, surplus: false, featured: true, preorder: false, planted: "2025-09-10", harvest: "2026-04-07", stock: 26, rating: 4.8, reviews: 43, image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=1200&q=80", description: "Large avocados with buttery texture, ideal for breakfasts and salads." },
  { id: 7, farmerId: 5, emoji: "&#127827;", name: "Strawberry Punnets", unit: "2 x 250g", price: 48, wasPrice: null, category: "fruit", organic: true, surplus: false, featured: false, preorder: false, planted: "2025-11-20", harvest: "2026-04-09", stock: 21, rating: 4.8, reviews: 51, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80", description: "Fragrant strawberries packed in reusable punnets for gentle transport." },
  { id: 8, farmerId: 3, emoji: "&#127807;", name: "Fresh Herb Trio", unit: "3 bunches", price: 22, wasPrice: null, category: "herbs", organic: true, surplus: false, featured: true, preorder: false, planted: "2026-03-01", harvest: "2026-04-10", stock: 45, rating: 4.8, reviews: 29, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80", description: "A kitchen-ready trio of parsley, thyme, and rosemary." },
  { id: 9, farmerId: 3, emoji: "&#127793;", name: "Microgreens Selection", unit: "150g", price: 34, wasPrice: null, category: "herbs", organic: true, surplus: false, featured: false, preorder: false, planted: "2026-03-20", harvest: "2026-04-14", stock: 18, rating: 4.9, reviews: 24, image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80", description: "A premium mix of delicate microgreens for plating and light salads." },
  { id: 10, farmerId: 1, emoji: "&#127807;", name: "Basil and Mint Bundle", unit: "2 bunches", price: 24, wasPrice: null, category: "herbs", organic: true, surplus: false, featured: false, preorder: false, planted: "2026-03-05", harvest: "2026-04-12", stock: 27, rating: 4.8, reviews: 20, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=1200&q=80", description: "Bright basil and mint packed together for cooking, teas, and fresh garnishes." },
  { id: 11, farmerId: 4, emoji: "&#127806;", name: "Stoneground Maize Meal", unit: "2kg", price: 42, wasPrice: null, category: "grains", organic: true, surplus: false, featured: true, preorder: false, planted: "2025-10-01", harvest: "2026-03-25", stock: 40, rating: 4.8, reviews: 31, image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1200&q=80", description: "Small-batch stoneground maize meal with a rich, hearty texture." },
  { id: 12, farmerId: 6, emoji: "&#127806;", name: "Brown Rice Pantry Bag", unit: "1.5kg", price: 58, wasPrice: null, category: "grains", organic: false, surplus: false, featured: false, preorder: false, planted: "2025-09-15", harvest: "2026-03-18", stock: 32, rating: 4.7, reviews: 26, image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80", description: "Reliable pantry rice selected for everyday cooking and balanced texture." },
  { id: 13, farmerId: 6, emoji: "&#127806;", name: "Pearled Barley", unit: "1kg", price: 44, wasPrice: null, category: "grains", organic: false, surplus: false, featured: false, preorder: false, planted: "2025-09-05", harvest: "2026-03-11", stock: 29, rating: 4.7, reviews: 18, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80", description: "Nutty, versatile barley for soups, grain bowls, and warm seasonal cooking." },
  { id: 14, farmerId: 6, emoji: "&#129370;", name: "Free-Range Eggs", unit: "12 eggs", price: 48, wasPrice: null, category: "eggs", organic: false, surplus: false, featured: true, preorder: false, planted: null, harvest: null, stock: 30, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=80", description: "Pasture-raised eggs collected daily for deep colour and full flavour." },
  { id: 15, farmerId: 6, emoji: "Butter", name: "Cultured Farm Butter", unit: "250g", price: 39, wasPrice: null, category: "eggs", organic: false, surplus: false, featured: false, preorder: false, planted: null, harvest: null, stock: 16, rating: 4.7, reviews: 33, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=1200&q=80", description: "Small-batch cultured butter with a rich finish for toast, baking, and sauces." },
  { id: 16, farmerId: 6, emoji: "Cheese", name: "Soft Goat Cheese", unit: "180g", price: 54, wasPrice: null, category: "eggs", organic: false, surplus: false, featured: false, preorder: false, planted: null, harvest: null, stock: 14, rating: 4.8, reviews: 27, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=80", description: "Spreadable goat cheese with a clean tang and smooth texture." },
  { id: 17, farmerId: 6, emoji: "🥩", name: "Free-Range Beef Steak", unit: "500g", price: 129, wasPrice: null, category: "meat", organic: false, surplus: false, featured: true, preorder: false, planted: null, harvest: null, stock: 20, rating: 4.9, reviews: 38, image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80", description: "Grass-fed beef sirloin steak, vacuum-sealed for freshness and dispatched within 24 hours." },
  { id: 18, farmerId: 6, emoji: "🍗", name: "Farm Chicken Portions", unit: "1kg", price: 78, wasPrice: null, category: "meat", organic: false, surplus: false, featured: true, preorder: false, planted: null, harvest: null, stock: 30, rating: 4.8, reviews: 52, image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80", description: "Free-range chicken portions reared on natural feed with no growth hormones." },
  { id: 19, farmerId: 6, emoji: "🍖", name: "Lamb Loin Cuts", unit: "600g", price: 145, wasPrice: null, category: "meat", organic: false, surplus: false, featured: false, preorder: false, planted: null, harvest: null, stock: 15, rating: 4.9, reviews: 29, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=80", description: "Tender Free State lamb loin cuts, ideal for braai or slow roasting." }
];

function getFarmerById(id) { return FARMERS.find(farmer => farmer.id === id); }
function getProductById(id) { return PRODUCTS.find(product => product.id === id); }
function formatRand(value) { return `R${value}`; }
function getCart() { try { return JSON.parse(localStorage.getItem('gb_cart') || '[]'); } catch (error) { return []; } }
function saveCart(cart) { localStorage.setItem('gb_cart', JSON.stringify(cart)); updateCartCount(); }
function addToCart(productId, qty = 1) { const cart = getCart(); const index = cart.findIndex(item => item.id === productId); if (index >= 0) cart[index].qty += qty; else cart.push({ id: productId, qty }); saveCart(cart); }
function removeFromCart(productId) { saveCart(getCart().filter(item => item.id !== productId)); }
function updateCartQty(productId, qty) { const cart = getCart(); const index = cart.findIndex(item => item.id === productId); if (index >= 0) { if (qty <= 0) cart.splice(index, 1); else cart[index].qty = qty; } saveCart(cart); }
function updateCartCount() { const el = document.getElementById('cartCount'); if (el) el.textContent = getCart().reduce((sum, item) => sum + item.qty, 0); }
function getWishlist() { try { return JSON.parse(localStorage.getItem('gb_wish') || '[]'); } catch (error) { return []; } }
function saveWishlist(wishlist) { localStorage.setItem('gb_wish', JSON.stringify(wishlist)); updateWishlistCount(); }
function toggleWishlist(productId) { const wishlist = getWishlist(); const index = wishlist.indexOf(productId); if (index >= 0) wishlist.splice(index, 1); else wishlist.push(productId); saveWishlist(wishlist); return index < 0; }
function isInWishlist(productId) { return getWishlist().includes(productId); }
function updateWishlistCount() { const el = document.getElementById('wishlistCount'); if (el) el.textContent = getWishlist().length; }

function renderProductCard(product) {
  const farmer = getFarmerById(product.farmerId) || {};
  const discount = product.wasPrice ? Math.round((1 - product.price / product.wasPrice) * 100) : null;
  const wished = isInWishlist(product.id);
  return `
    <div class="product-card fade-in">
      <div class="product-img">
        <span>${product.emoji}</span>
        ${product.surplus ? `<span class="surplus-label">&#9889; Surplus ${discount ? discount + '% OFF' : 'Deal'}</span>` : ''}
        ${product.preorder ? `<span class="preorder-label">Pre-Order</span>` : ''}
        ${product.organic ? `<span class="organic-label">Organic</span>` : ''}
        <span class="wishlist-btn" onclick="handleWishlist(${product.id}, this)" title="Save to wishlist">${wished ? '&hearts;' : '&#9825;'}</span>
      </div>
      <div class="product-info">
        <div class="product-farmer">${farmer.name || 'Local Farmer'}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-location">${farmer.location || ''}</div>
        <div class="product-price-row">
          <span class="product-price">${formatRand(product.price)}</span>
          <span class="product-unit">/ ${product.unit}</span>
          ${product.wasPrice ? `<span class="product-was">${formatRand(product.wasPrice)}</span>` : ''}
          ${discount ? `<span class="product-savings">-${discount}%</span>` : ''}
        </div>
        <div class="product-rating">${product.rating} rating · ${product.stock > 15 ? 'In stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Sold out'}</div>
        <button class="add-to-cart-btn" onclick="handleAddToCart(${product.id}, this)">${product.preorder ? 'Pre-Order' : 'Add to Cart'}</button>
      </div>
    </div>
  `;
}

function renderEditorialProductCard(product, options = {}) {
  const farmer = getFarmerById(product.farmerId) || {};
  const discount = product.wasPrice ? Math.round((1 - product.price / product.wasPrice) * 100) : null;
  const wished = isInWishlist(product.id);
  return `
    <article class="editorial-product-card fade-in">
      <a href="product.html?id=${product.id}" class="editorial-product-image">
        <img src="${product.image}" alt="${product.name}" />
        <div class="editorial-badge-stack">
          ${product.surplus ? `<span class="editorial-badge warm-badge">Surplus ${discount ? discount + '% off' : 'deal'}</span>` : ''}
          ${product.organic ? '<span class="editorial-badge cool-badge">Organic</span>' : ''}
          ${product.preorder ? '<span class="editorial-badge dark-badge">Pre-order</span>' : ''}
        </div>
      </a>
      <div class="editorial-product-info">
        <div class="editorial-product-topline">
          <span>${CATEGORY_META[product.category].label}</span>
          <button class="editorial-save-btn" onclick="handleEditorialWishlist(${product.id}, this)" aria-label="Save product">${wished ? 'Saved' : 'Save'}</button>
        </div>
        <a href="product.html?id=${product.id}" class="editorial-product-title">${product.name}</a>
        ${options.showFarmer ? `<p class="editorial-product-farmer">${farmer.name} - ${farmer.location}</p>` : ''}
        ${options.showDescription ? `<p class="editorial-product-description">${product.description}</p>` : ''}
        <div class="editorial-product-footer">
          <div>
            <strong>${formatRand(product.price)}</strong>
            <span>/ ${product.unit}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="handleAddToCart(${product.id}, this)">Add</button>
        </div>
      </div>
    </article>
  `;
}

function handleAddToCart(id, btn) {
  addToCart(id);
  btn.textContent = 'Added';
  btn.classList.add('added');
  setTimeout(() => {
    const product = getProductById(id);
    btn.textContent = product && product.preorder ? 'Pre-Order' : 'Add to Cart';
    btn.classList.remove('added');
  }, 1500);
}
function handleWishlist(id, el) { const added = toggleWishlist(id); el.innerHTML = added ? '&hearts;' : '&#9825;'; }
function handleEditorialWishlist(id, button) { const added = toggleWishlist(id); button.textContent = added ? 'Saved' : 'Save'; }

function handleSearch(value) {
  const dropdown = document.getElementById('searchDropdown');
  if (!dropdown) return;
  if (!value.trim()) { dropdown.classList.add('hidden'); return; }
  const query = value.toLowerCase();
  const results = PRODUCTS.filter(product => {
    const farmer = getFarmerById(product.farmerId);
    return product.name.toLowerCase().includes(query) || CATEGORY_META[product.category].label.toLowerCase().includes(query) || (farmer?.name || '').toLowerCase().includes(query);
  }).slice(0, 5);
  if (!results.length) { dropdown.classList.add('hidden'); return; }
  dropdown.innerHTML = results.map(product => {
    const farmer = getFarmerById(product.farmerId);
    return `
      <a href="product.html?id=${product.id}" class="search-result-item">
        <img src="${product.image}" alt="${product.name}" />
        <span>
          <strong>${product.name}</strong>
          <small>${farmer?.name || ''} - ${formatRand(product.price)} / ${product.unit}</small>
        </span>
      </a>
    `;
  }).join('');
  dropdown.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => { updateCartCount(); updateWishlistCount(); });