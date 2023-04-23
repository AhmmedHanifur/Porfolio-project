let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll =() =>{
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
}


// fixed the header when scroll height is greater than 100px

window.onscroll = () => {
    let header = document.querySelector(".header");
    if (window.pageYOffset > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// reviews swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  );
  
