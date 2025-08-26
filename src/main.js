import heroSection from "./heroSection.js";
const burgerMenu = document.getElementById('burger-menu');
const roomLogo = document.querySelector(".room-logo");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".header")
const heroContainer = document.querySelector(".hero-section")

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imgSrcset = document.querySelector(".image-srcset")
const defaultImg = document.querySelector(".image-default");
const mainHeading = document.querySelector(".main-heading");
const mainDescription = document.querySelector(".main-paragraph");
const img = document.querySelector('picture img');
let heroSibling = document.querySelector(".hero-sibling");
let overlay = document.getElementById("overlay")


burgerMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("close");
  header.classList.toggle("menu-open");
  overlay.classList.toggle("hidden")
})
window.addEventListener("click", (e) => {
  console.log("the window has been click")
  if (!header.contains(e.target) && !burgerMenu.contains(e.target)) {
    header.classList.remove("menu-open")
    overlay.classList.add("hidden")
    burgerMenu.classList.remove("close")
  }
})

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1024) {
    if (header.classList.contains("menu-open")) {
      header.classList.remove("menu-open")
    }
  }
  displayContent(Math.floor(Math.random() * information.length))
})

const information = [
  {
    imageDesktop: "/images/desktop-image-hero-1.jpg",
    imageMobile: "/images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    desc: ` We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you
    and what you love.`
  },
  {
    imageDesktop: "/images/desktop-image-hero-2.jpg",
    imageMobile: "/images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    desc: `With stores all over the world, it's easy for you to find furniture
    for your home or place of business. Locally, we're in most
    majore cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesistate to 
    contact us today.`
  },
  {
    imageDesktop: "/images/desktop-image-hero-3.jpg",
    imageMobile: "/images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    desc: `Our modern furniture store provide a high level of quality. Our
    company has invested in advanced technology to ensure that
    every product is made as perfect and as consistent as
    possible. With three decades of experience in this industry, we
    understand what customers want for their home and office.`
  }
]

let currentIndex = 0;

nextBtn.addEventListener("mousedown", () => {
  currentIndex++
  if (currentIndex > information.length - 1) {
    currentIndex = 0;
  }
  displayContent(currentIndex);
  
})

prevBtn.addEventListener("mousedown", () => {

  if (currentIndex === 0) {
    currentIndex = information.length - 1
  }
  else {
    currentIndex--;
  }
  displayContent(currentIndex)
})


function displayContent(currentIndex) {
  let info = information[currentIndex];
  imgSrcset.srcset = info.imageDesktop;
  defaultImg.src = info.imageMobile;

  mainHeading.textContent = info.title;
  mainDescription.textContent = info.desc
  img.addEventListener('load', () => {
    img.classList.remove('opacity-0');
    img.classList.add('opacity-100');
    heroSibling.classList.remove("opacity-0")
    heroSibling.classList.add("opacity-100")
  });
}
