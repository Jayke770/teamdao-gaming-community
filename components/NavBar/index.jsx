import Link from 'next/link'
import { Bars, Xmark } from 'framework7-icons/react'
import { useState } from 'react'
const menu = ['Explore', 'FAQ', 'Blog', 'Leaderboard']
export default function Navbar({ }) {
    const [nav, setnav] = useState(false)
    return (
        <div className="translucent flex w-full fixed z-20 top-0 left-0 bg-bgn min-h-[60px] px-4 border-b border-primary/60">
            <div className='flex items-center'>
                <Link href={'/'} passHref>
                    <a>
                        <img
                            alt="Teamdao logo"
                            src='/assets/images/team-logo.png'
                            className='h-[45px] w-[170px] object-contain' />
                    </a>
                </Link>
            </div>
            <div className={`h-screen ${nav ? 'flex' : 'hidden'} w-screen bg-black/80 fixed justify-end top-0 right-0 md:[position:_unset] md:bg-transparent md:h-auto md:flex md:items-center md:flex-row md:ml-4 md:w-full`}>
                <div className={`w-[70%] ${nav ? 'animate__animated animate__fadeInRight ms-300' : 'animate__animated animate__fadeOutRight ms-300'} md:w-full bg-bgn border-l-[0.1px] border-l-primary md:border-l-0 md:bg-transparent flex flex-col py-10 px-5 md:px-0 md:py-0 md:flex-row md:justify-between`}>
                    <div className='flex md:hidden justify-end items-center mb-5'>
                        <button
                            onClick={() => setnav(false)}>
                            <Xmark className="w-7 h-7 text-red-500" />
                        </button>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-1 md:flex-row'>
                        {menu.map((menu, i) => (
                            <Link key={i} href={menu} passHref>
                                <a className='px-2.5 p-1.5 font-medium hover:bg-primary/30 rounded transition-all'>
                                    {menu}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='flex items-center mt-5 md:mt-0'>
                        <Link href={'get-started'} passHref>
                            <a className='bg-primary px-4 py-1.5 text-black rounded-md font-medium w-full md:w-auto text-center'>
                                Get Started
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden justify-end items-center w-full'>
                <button
                    type='button'
                    className='hover:bg-primary/30 px-2 py-1.5 rounded-md'
                    onClick={() => setnav(!nav)}>
                    <Bars className="w-7 h-7" />
                </button>
            </div>
        </div >
    )
}