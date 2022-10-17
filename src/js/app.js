const mainSlider = new Swiper('.slider', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    spaceBetween: 200
})

const SliderBg = new Swiper('.slider-bg', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    spaceBetween: 200
})

mainSlider.controller.control = SliderBg

document.querySelectorAll('.slider__slide').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('open')
    })
})
