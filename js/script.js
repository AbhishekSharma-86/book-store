searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}



let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let cartData = [
  {
    imageSrc: "./image/book-1.png"
  },
  {
    imageSrc: "./image/book-2.png"
  },
  {
    imageSrc: "./image/book-3.png"
  },
  {
    imageSrc: "./image/book-4.png"
  },
  {
    imageSrc: "./image/book-5.png"
  },
  {
    imageSrc: "./image/book-6.png"
  },
  {
    imageSrc: "./image/book-7.png"
  },
  {
    imageSrc: "./image/book-8.png"
  },
  {
    imageSrc: "./image/book-9.png"
  },
  {
    imageSrc: "./image/book-10.png"
  }
];

// var cart = document.getElementsByClassName('swiper-wrapper');
var cart = document.getElementById("cart");
console.log(cart);

let htmlAdd = "";
var  count = 0;

var updateHTML = function(){
  console.log(this.id);
  if(count === 4){
    alert("your Cart is FUll");
    return;
  }
  htmlAdd += `<div class="box" style="margin: auto;">
  <div class="icons">
      <a href="#" class="fas fa-search"></a>
      <a href="#" class="fas fa-heart"></a>
      <a href="#" class="fas fa-eye"></a>
  </div>
  <div class="image">
      <img src="image/book-${this.id}.png" alt="">
  </div>
  <div class="content">
      <h3>featured books</h3>
      <div class="price">$15.99 <span>$20.99</span></div>
      <a href="#" class="btn addCart">Checkout</a>
  </div>
</div>`

console.log(cart);
cart.innerHTML = htmlAdd;
count += 1;
}


document.querySelectorAll(".addCart").forEach(btn=>{
  btn.onclick = updateHTML;
})