// JavaScript for form validation and interactive content

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success message
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    document.getElementById('contactForm').reset();
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Shopping Cart functionality
let cart = [];

const buttons = document.querySelectorAll('.product button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p').textContent;

        const product = {
            name: productName,
            price: productPrice
        };

        addToCart(product);
        displayCart();
    });
});

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

function displayCart() {
    const cartContents = document.getElementById('cart-contents');
    cartContents.innerHTML = '';

    if (cart.length === 0) {
        cartContents.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const ul = document.createElement('ul');
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        ul.appendChild(li);
    });

    cartContents.appendChild(ul);
}
