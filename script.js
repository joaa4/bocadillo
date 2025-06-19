const products = {
    alitas: [
        { id: 1, name: 'ORIGINALES', price: 18.00, category: 'alitas', description: 'Alitas clásicas con nuestro toque especial.', image: 'images/alitas-clasicas.jpg' },
        { id: 2, name: 'BBQ', price: 18.00, category: 'alitas', description: 'Alitas bañadas en salsa BBQ.', image: 'images/combo-peque.jpeg' },
        { id: 3, name: 'BBQ HOT', price: 18.00, category: 'alitas', description: 'Alitas BBQ con un toque picante.', image: 'images/alitas-bbqhot.jpg' },
        { id: 4, name: 'PICANTES', price: 18.00, category: 'alitas', description: 'Alitas extra picantes para los valientes.', image: 'images/alitas-picantes.jpg' },
        { id: 5, name: 'ACEVICHADAS', price: 18.00, category: 'alitas', description: 'Alitas con salsa acevichada.', image: 'images/alitas-acevichadas.jpg' },
        { id: 6, name: 'MARACUYÁ', price: 18.00, category: 'alitas', description: 'Alitas con salsa de maracuyá.', image: 'images/alitas-maracuya.jpg' },
        { id: 7, name: 'MANGO', price: 18.00, category: 'alitas', description: 'Alitas con salsa de mango.', image: 'images/alitas-mango.jpg' },
    ],
    combos: [
        { id: 8, name: 'LA PEQUE', price: 18.00, category: 'combos', description: 'Combo pequeño para una persona.', image: 'images/combo-peque.jpeg' },
        { id: 9, name: 'LA RULA', price: 28.00, category: 'combos', description: 'Combo mediano para compartir.', image: 'images/combo-rula.jpeg' },
        { id: 10, name: 'EL TRAVIESO', price: 46.00, category: 'combos', description: 'Combo grande para los más hambrientos.', image: 'images/combo-travieso.jpeg' },
        { id: 11, name: 'LA MAYOR', price: 68.00, category: 'combos', description: 'El combo más grande para toda la familia.', image: 'images/combo-mayor.jpeg' }
    ],
    frituras: [
        { id: 12, name: 'SALCHIPAPA', price: 12.00, category: 'frituras', description: 'Hot dog, papas fritas artesanales acompañado con cremas.', image: 'images/salchipapa.webp' },
        { id: 13, name: 'SALCHIHUEVO', price: 14.00, category: 'frituras', description: 'Hot dog, huevo, papas fritas artesanales acompañado con cremas.', image: 'images/salchihuevo.webp' },
        { id: 14, name: 'CHORIPAPA', price: 14.00, category: 'frituras', description: 'Chorizo, papas fritas artesanales acompañado con cremas..', image: 'images/choripapa.jpeg' },
        { id: 15, name: 'CHORIHUEVO', price: 16.00, category: 'frituras', description: 'Chorizo, huevo, papas fritas artesanales acompañado con cremas.', image: 'images/chorihuevo.jpg' },
        { id: 16, name: 'SALCHICHORIZO', price: 16.00, category: 'frituras', description: 'Hot dog, chorizo, papas fritas artesanales acompañado con cremas.', image: 'images/salchichorizo.jpg' },
        { id: 17, name: 'POLLIPAPA', price: 14.00, category: 'frituras', description: 'Pollo frito, papas fritas artesanales acompañado con cremas.', image: 'images/pollipapa.jpeg' },
        { id: 18, name: 'POLLIPAPA EXTEMO', price: 18.00, category: 'frituras', description: 'Pollo frito, chorizo, huevo, papas fritas artesanales acompañado con cremas.', image: 'images/pollipapa-extremo.jpg' }
    ],
    bebidas: [
        { id: 19, name: 'VASO DE CHICHA MORADA', price: 4.00, category: 'bebidas', description: 'Refrescante vaso de chicha morada.', image: 'images/chicha.jpg' },
        { id: 20, name: 'VASO DE MARACUYÁ', price: 4.00, category: 'bebidas', description: 'Vaso de jugo de maracuyá.', image: 'images/maracuya.jpg' },
        { id: 21, name: 'ORANGE COFFE', price: 12.00, category: 'bebidas', description: 'Café con un toque de naranja.', image: 'images/coffe.jpg' },
        { id: 22, name: 'AGUA SAN LUIS 750ml', price: 3.00, category: 'bebidas', description: 'Helada o Sin Helar', image: 'images/agua-san-luis.webp' },
        { id: 23, name: 'COCA COLA 500ml', price: 4.00, category: 'bebidas', description: 'Helada o Sin Helar', image: 'images/coca-cola.webp' },
        { id: 24, name: 'INCA KOLA 500ml', price: 4.00, category: 'bebidas', description: 'Helada o Sin Helar', image: 'images/inca-kola.webp' },
        { id: 25, name: 'FANTA 500ml', price: 4.00, category: 'bebidas', description: 'Helada o Sin Helar', image: 'images/fanta.webp' },
        { id: 26, name: 'SPRITE 500ml', price: 4.00, category: 'bebidas', description: 'Helada o Sin Helar', image: 'images/sprite.webp' }
    ]
};

// CARRITO
let cart = [];

// MOSTRAR PRODUCTOS
function displayProducts(category) {
    const container = document.getElementById(`${category}-container`);
    const productList = products[category];
    
    let html = '';
    productList.forEach(product => {
        html += `
            <div class="col-md-4 col-sm-6 product-item" data-name="${product.name.toLowerCase()}">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" style="width:100%;height:200px;object-fit:cover;border-radius:12px;";">
                    </div>
                    <div class="product-info">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">S/ ${product.price.toFixed(2)}</div>
                        <button class="btn add-to-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-plus"></i> Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// MOSTRAR CATEGORIA
function showCategory(category) {
    // ocultar todas las secciones
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // mostrar la sección seleccionada
    document.getElementById(category).classList.add('active');
    
    // actualizar botones de categoría
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// AGREGAR AL CARRITO
function addToCart(productId) {
    // BUSCAR EL PRODUCTO
    let product = null;
    for (let category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (product) {
        // VERIFICAR SI ESTA YA EN ELCARRO
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartDisplay();
        showAddedToCartNotification(product.name);
    }
}

// ACTUALIZAR CARRITO
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotal = document.getElementById('cartTotal');
    
    // ACTUALIZAR NUMERO DE CARRITO
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // ACTUALIZAR CONTENIDO
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-muted">El carrito está vacío</p>';
        cartTotal.textContent = 'Subtotal: S/ 0.00';
    } else {
        let html = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            html += `
                <div class="cart-item">
                    <div>
                        <h6>${item.name}</h6>
                        <small>S/ ${item.price.toFixed(2)} c/u</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary me-2" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary ms-2" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartItems.innerHTML = html;
        cartTotal.textContent = `Subtotal: S/ ${total.toFixed(2)}`;
    }
}

// ACTUALIZAR CANTIDAD
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// QUITAR DE CARRITO
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// CARRITO SIDEBAR
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

// NOTIFICACION CARRITO
function showAddedToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i> ${productName} agregado al carrito
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// CHECKOUT
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Gracias por tu compra!\nTotal: S/ ${total.toFixed(2)}\n\nEn breve nos contactaremos contigo para confirmar tu pedido.`);
    
    // LIMPIAR CARRO
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// BUSCAR
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const productName = item.dataset.name;
        if (productName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// SCROLL
function scrollToMenu() {
    document.querySelector('.category-nav').scrollIntoView({
        behavior: 'smooth'
    });
}

function smoothScroll(target) {
    document.querySelector(target).scrollIn}

// INICAR PRODUCTOS AL CARGAR LA PAG
document.addEventListener('DOMContentLoaded', function() {
    displayProducts('alitas');
    displayProducts('combos');
    displayProducts('frituras');
    displayProducts('bebidas');
    updateCartDisplay();
});