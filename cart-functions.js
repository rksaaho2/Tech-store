// Products Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium noise-cancelling headphones",
        price: 299.99,
        icon: "🎧"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Fitness tracking and notifications",
        price: 399.99,
        icon: "⌚"
    },
    {
        id: 3,
        name: "Laptop Stand",
        description: "Ergonomic aluminum stand",
        price: 49.99,
        icon: "💻"
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic design, long battery life",
        price: 79.99,
        icon: "🖱️"
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        description: "RGB backlit, mechanical switches",
        price: 149.99,
        icon: "⌨️"
    },
    {
        id: 6,
        name: "Webcam HD",
        description: "1080p video quality",
        price: 89.99,
        icon: "📷"
    }
];

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count in navigation
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();
    showNotification('Added to cart!');
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        saveCart(cart);
        updateCartCount();
        
        // Reload cart page if we're on it
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
    
    // Reload cart page if we're on it
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Calculate cart totals
function calculateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s';
            setTimeout(() => {
                notification.classList.remove('show');
                notification.style.animation = 'slideIn 0.3s';
            }, 300);
        }, 2000);
    }
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
