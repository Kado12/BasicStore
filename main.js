const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamburger = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', () => {
   if (!productDetail.classList.contains('inactive')) {
      productDetail.classList.add('inactive')
      return
   }
   desktopMenu.classList.toggle('inactive')
})
menuHamburger.addEventListener('click', () => {
   if (!productDetail.classList.contains('inactive')) {
      productDetail.classList.add('inactive')
      return
   }
   mobileMenu.classList.toggle('inactive')
})
shoppingCart.addEventListener('click', () => {
   if (!mobileMenu.classList.contains('inactive')) {
      mobileMenu.classList.add('inactive')
      return
   } else if (!desktopMenu.classList.contains('inactive')) {
      desktopMenu.classList.add('inactive')
      return
   }
   productDetail.classList.toggle('inactive')
})
const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Pantalla',
   price: 220,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Computadora',
   price: 620,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
const renderProducts = (arr) => {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      const productInfoDiv = document.createElement('div');

      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

      productInfoFigure.appendChild(productImgCart);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
   }
}
renderProducts(productList);