// Display order ID on success page
document.addEventListener('DOMContentLoaded', () => {
    const orderId = localStorage.getItem('lastOrderId') || 'ORD-UNKNOWN';
    const orderIdElement = document.getElementById('orderId');
    
    if (orderIdElement) {
        orderIdElement.textContent = orderId;
    }
    
    // Update cart count to 0
    updateCartCount();
});
