import Link from 'next/link'
import { ChevronRight } from 'framework7-icons/react'
const card = Array.from({ length: 4 })
export default function Blog() {
    return (
        <div className="py-20 px-10 flex flex-col">
            <div className="grid     grid-rows-2 md:grid-cols-2">
                <div className="flex justify-center md:justify-start items-center">
                    <span className="text-3xl font-light font-teamdao tracking-[0.2em]">TEAMDAO Blog</span>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                    <Link href={'blog'} passHref>
                        <a className='flex flex-row gap-4 items-center justify-center text-primary'>
                            <span>Visit our Blog</span>
                            <ChevronRight />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {card.map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-3">
                        <img
                            alt="blog"
                            src='/assets/images/Mobile-Legends-Hero.jpg'
                            className='h-44 w-full object-cover' />
                        <div className='font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias corporis aliquam aperiam eaque...
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}