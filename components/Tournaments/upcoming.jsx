import Link from 'next/link'
import { ChevronRight } from 'framework7-icons/react'
const card = Array.from({ length: 10 })
export default function UpcomingTournaments() {
    return (
        <div className="mx-auto py-20 px-3 w-full ">
            {/* Header */}
            <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between px-4 py-2">
                <div className='flex items-center'>
                    <h1 className="text-3xl font-light font-teamdao tracking-[0.2em] text-center">Upcoming Tournaments</h1>
                </div>
                <div className='flex items-center'>
                    <Link href={'explore'} passHref>
                        <a className='flex flex-row gap-2 hover:mr-2 hover:bg-gray-900 rounded-md px-3 py-2 transition-all justify-center items-center text-xl font-normal text-primary'>
                            <span>Browse all</span>
                            <ChevronRight />
                        </a>
                    </Link>
                </div>
            </div>
            {/* Cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 py-5 items-center justify-center'>
                {card.map((_, i) => (
                    <div
                        key={i}
                        className="w-full cursor-pointer sm:w-[350px] md:w-full border-[0.1px] border-slate-800 bg-slate-900 rounded-lg">
                        {/* Card Header */}
                        <div className='relative w-full h-[180px]'>
                            <div className='absolute top-0 left-0 p-1 w-full'>
                                <div className='w-full flex justify-between '>
                                    <span className='bg-slate-800 px-2 py-1 rounded-md text-xs text-center'>12/20</span>
                                    <span className='bg-slate-800 px-2 py-1 rounded-md text-xs text-center'>5v5</span>
                                </div>
                            </div>
                            <div className='absolute bottom-1 flex justify-end px-1 w-full'>
                                <span className='bg-slate-800 px-2 py-1 font-medium rounded-md text-xs text-center'>Single Elimination</span>
                            </div>
                            <img
                                alt="afa"
                                src={`/assets/tmp/${i + 1}a.jpeg`}
                                className="w-full h-full rounded-t-lg" />
                        </div>
                        {/* Card Body */}
                        <div className=' relative flex flex-col'>
                            <div className='absolute bottom-0 right-0'>
                                <span className='uppercase bg-bgn text-[11px] text-primary px-2 py-0.5'>free entry</span>
                            </div>
                            <div className='flex flex-col pt-2 pb-1 px-3'>
                                <div className='text-primary font-normal text-md'>Mobile Legends: Bang Bang</div>
                                <div className='text-xl py-2 text-zinc-100'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 px-1.5 py-2'>
                                <img
                                    alt="teamdao"
                                    src='/assets/images/rounded-team-logo.png'
                                    className='w-10 h-10' />
                                <div className='flex flex-col'>
                                    <span className='uppercase text-xs '>hosted by</span>
                                    <Link passHref href={'hosted'}>
                                        <a className='text-[12px] leading-3 text-primary mt-[1px]'>
                                            TeamDao
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className='flex justify-between relative w-full h-[45px] bg-slate-800 rounded-b-lg'>
                            <div className='flex justify-center items-center w-full'>
                                <span className='text-primary text-md'>Aug 1, 8:00 PM</span>
                            </div>
                            <div className='flex w-full relative bg-primary rounded-br-lg'>
                                <Link passHref href={'hosted'}>
                                    <a
                                        className='after:mr-2 after:w-0 after:left-0 after:top-0 after:absolute after:content-[""] after:border-b-[45px] after:border-b-transparent after:border-l-[20px] after:border-l-slate-800 flex items-center justify-center text-black relative text-lg font-medium !w-full h-full text-center'>
                                        $100000
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}