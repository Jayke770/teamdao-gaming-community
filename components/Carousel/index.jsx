import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
const card = Array.from({ length: 5 })
export default function Carousel() {
    return (
        <Swiper
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}"></span>`
                }
            }}
            autoplay={{
                delay: 2500
            }}
            effect={"fade"}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper mt-[60px]">
            {card.map((_, i) => (
                <SwiperSlide key={i}>
                    <div className="">
                        <img
                            alt="sample"
                            src={`/assets/tmp/${i + 1}.png`}
                            className="h-64 lg:h-[400px] object-fill" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}