import "swiper/css"
import "swiper/css/navigation"
import Link from 'next/link'
import { ChevronRight } from 'framework7-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
const card = Array.from({ length: 24 })
export default function Sponsors() {
    return (
        <div className="py-20 px-10 flex flex-col">
            <div className="grid grid-rows-2 md:grid-cols-2">
                <div className="flex justify-center md:justify-start items-center">
                    <span className="text-3xl font-light font-teamdao tracking-[0.2em]">Our Sponsors</span>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                    <Link href={'blog'} passHref>
                        <a className='flex flex-row gap-4 items-center justify-center text-primary'>
                            <span>See all</span>
                            <ChevronRight />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="px-4 py-5">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    autoplay={{
                        delay: 2500
                    }}
                    spaceBetween={20}
                    className="mySwiper">
                    {card.map((_, i) => (
                        <SwiperSlide key={i} className="flex justify-center items-center">
                            <img
                                alt="sponsor"
                                src={`/assets/images/sponsors/${i + 1}.JPG`}
                                className='w-full h-40 object-contain' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}