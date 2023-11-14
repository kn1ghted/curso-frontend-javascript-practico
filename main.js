// Constant for HTML DOM elements
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

// Adds function for click event to the nvigation items
menuEmail.addEventListener('click', toggleDesktopMenu);
hamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductInfo);

// Toggle inactive class on class list of the email link on header
function toggleDesktopMenu () {
    let productAsideClosed = shoppingCart.classList.contains('inactive');
    if (!productAsideClosed) {
        productAside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

// Toggle inactive class on mobile menu
function toggleMobileMenu () {
    let productAsideClosed = shoppingCart.classList.contains('inactive');
    if(!productAsideClosed) {
        productAside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

// Toggle inactive class on shoping cart
function toggleProductInfo () {
    let mobileMenuClosed = mobileMenu.classList.contains('inactive');
    let desktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    shoppingCart.classList.toggle('inactive');
}

// Product list
const productList = [];

// Manually added products
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/800px-Left_side_of_Flying_Pigeon.jpg',
});
productList.push({
    name: 'Playstation 3',
    price: 100,
    image: 'https://www.latercera.com/resizer/FVWHSnnhIqEzv7LGljhI0QZoyhQ=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DTFVNUPZCBCZHA5RHCE7QWN5OU.jpg',
});
productList.push({
    name: 'Rubik Cube',
    price: 50,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rubik%27s_cube_almost_solved.svg/800px-Rubik%27s_cube_almost_solved.svg.png',
});

function renderProducts (arr) {
    // Loop through products array
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');

        productPrice.innerText = '$' + product.price;
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const addCartIcon = document.createElement('img');
        addCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

        // Append elements to define hierarchy
        productFigure.appendChild(addCartIcon);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv,productFigure);
        productCard.append(productImage, productInfo);

        cardsContainer.append(productCard);
    }
}

renderProducts (productList);