import Swiper from 'swiper/bundle'

let swiper

export function initSwiper() {
    const isMobile = window.innerWidth <= 768

    if (isMobile && !swiper) {
        swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // отключаем свайпер на десктопе
            breakpoints: {
                769: {
                    enabled: false,
                },
            },
        })
    } else if (!isMobile && swiper) {
        swiper.destroy(true, true)
        swiper = undefined
    }
}
