// Render order summary on checkout page
function renderOrderSummary() {
    const summary = document.getElementById('orderSummary');
    const cart = getCart();
    
    // Redirect to cart if empty
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    const { subtotal, tax, total } = calculateTotals();

    summary.innerHTML = `
        <h2>Order Summary</h2>
        <div style="margin: 1.5rem 0;">
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')}
        </div>
        <div class="summary-row" style="border-top: 1px solid #eee; padding-top: 1rem;">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax (10%):</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', () => {
    renderOrderSummary();
    
    const checkoutForm = document.getElementById('checkoutForm');
    
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            zipCode: document.getElementById('zipCode').value,
            cardNumber: document.getElementById('cardNumber').value,
            expiry: document.getElementById('expiry').value,
            cvv: document.getElementById('cvv').value
        };
        
        // In a real application, you would send this data to a server
        console.log('Checkout Form Submitted:', formData);
        
        // Generate order ID
        const orderId = 'ORD-' + Date.now();
        localStorage.setItem('lastOrderId', orderId);
        
        // Clear cart
        localStorage.setItem('cart', JSON.stringify([]));
        
        // Redirect to success page
        window.location.href = 'success.html';
    });
});
