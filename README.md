# TechStore E-Commerce Website

A fully functional e-commerce website with shopping cart, checkout, and contact features.

## Features

- ✅ Product Listing Page (Home)
- ✅ Shopping Cart with Add/Remove/Update Quantity
- ✅ Contact Form
- ✅ Checkout Page with Order Form
- ✅ Order Success Confirmation
- ✅ Unique URLs for Each Page
- ✅ LocalStorage for Cart Persistence
- ✅ Responsive Design

## File Structure

```
ecommerce-site/
├── index.html              # Home page with products
├── cart.html              # Shopping cart page
├── contact.html           # Contact form page
├── checkout.html          # Checkout page
├── success.html           # Order success page
├── styles.css             # Main stylesheet
├── cart-functions.js      # Shared cart utility functions
├── home.js               # Home page JavaScript
├── cart.js               # Cart page JavaScript
├── contact.js            # Contact page JavaScript
├── checkout.js           # Checkout page JavaScript
├── success.js            # Success page JavaScript
└── README.md             # This file
```

## How to Run Locally

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start shopping!

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up" and create your account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository (e.g., "ecommerce-website")
4. Select "Public"
5. Click "Create repository"

### Step 3: Upload Files to GitHub

**Method 1: Using GitHub Web Interface (Easiest)**
1. On your repository page, click "uploading an existing file"
2. Drag and drop all your project files OR click "choose your files"
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

**Method 2: Using Git Command Line**
```bash
# Navigate to your project folder
cd path/to/ecommerce-site

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API

## Pages and URLs

When deployed, each page will have its own URL:
- Home: `/index.html` or `/`
- Cart: `/cart.html`
- Contact: `/contact.html`
- Checkout: `/checkout.html`
- Success: `/success.html`

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use for personal and commercial projects.
