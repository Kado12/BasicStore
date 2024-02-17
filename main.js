const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamburger = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('#shopping-detail')
const cardsContainer = document.querySelector('.cards-container');
const productCardDetail = document.querySelector('.product-card-detail')
const productCardDetailClose = document.querySelector('.product-detail-close')
let isProductCardDetailClose = true

navbarEmail.addEventListener('click', () => {
   if (!productDetail.classList.contains('inactive') || !isProductCardDetailClose) {
      productDetail.classList.add('inactive')
      isProductCardDetailClose = true
      productCardDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive')
})
menuHamburger.addEventListener('click', () => {
   if (!productDetail.classList.contains('inactive') || !isProductCardDetailClose) {
      productDetail.classList.add('inactive')
      isProductCardDetailClose = true
      productCardDetail.classList.add('inactive')
   }
   mobileMenu.classList.toggle('inactive')
})
shoppingCart.addEventListener('click', () => {
   if (!mobileMenu.classList.contains('inactive') || !desktopMenu.classList.contains('inactive') || !isProductCardDetailClose) {
      mobileMenu.classList.add('inactive')
      isProductCardDetailClose = true
      productCardDetail.classList.add('inactive')
   }
   productDetail.classList.toggle('inactive')
})
productCardDetailClose.addEventListener('click', () => {
   productCardDetail.classList.add('inactive')
})

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Pantalla',
   price: 220,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Computadora',
   price: 620,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
const renderProducts = (arr) => {
   for (product of arr) {
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
      const productImg = document.createElement('img')
      productImg.setAttribute('src', product.image)
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')
      const productInfoDiv = document.createElement('div')
      const productPrice = document.createElement('p')
      productPrice.innerText = '$' + product.price
      const productName = document.createElement('p')
      productName.innerText = product.name
      productInfoDiv.appendChild(productPrice)
      productInfoDiv.appendChild(productName)
      const productInfoFigure = document.createElement('figure')
      const productImgCart = document.createElement('img')
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
      productInfoFigure.appendChild(productImgCart)
      productInfo.appendChild(productInfoDiv)
      productInfo.appendChild(productInfoFigure)
      productCard.appendChild(productImg)
      productCard.appendChild(productInfo)
      productCard.addEventListener('click', () => {
         if (!mobileMenu.classList.contains('inactive') || !desktopMenu.classList.contains('inactive') || !productDetail.classList.contains('inactive')) {
            mobileMenu.classList.add('inactive')
            desktopMenu.classList.add('inactive')
            productDetail.classList.add('inactive')
         }
         productCardDetail.classList.remove('inactive')
         isProductCardDetailClose = false
      })
      cardsContainer.appendChild(productCard)
   }
}
renderProducts(productList)