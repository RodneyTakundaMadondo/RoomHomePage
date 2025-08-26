const myObj = [
    {
        imgMobile: '/images/mobile-image-hero-1',
        imgDesktop: '/images/desktop-image-hero-1',
        title: 'Discover innovative ways to decorate',
        desc: `We provide unmatched quality,comfort, and style for property owners across the country. Our
        experts combine form and function in bringing your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.`
    }
]
export default function heroSection() {
    const heroInfo = myObj.map((item) => (
        ` <div class="relative" >
            <picture>
              <!-- Desktop image (min-width: 1024px) -->
              <source
                media="(min-width: 640px)"
                srcset="${item.imgDesktop}"
              />

              <!-- Fallback (mobile by default) -->
              <img
                src="${item.imgMobile}"
                alt="Hero image"
                class="w-full h-auto object-contain"
              />
            </picture>
            <div class="absolute flex gap-8 p-4 bottom-0 right-0 bg-black">
              <button><img src="/images/icon-angle-left.svg" alt=""></button>
              <button><img src="/images/icon-angle-right.svg" alt=""></button>
            </div>
          </div>

          <div class="px-6">
            <div class="hero-sibling">
              <h1 class="font-bold text-3xl">${item.title}</h1>
              <p>
                ${item.desc}
              </p>
              <button>Shop now</button>
            </div>
          </div>`
    ))
    return heroInfo
}