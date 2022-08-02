import Link from 'next/link'
export default function Footer() {
    return (
        <div className="border-t border-slate-800 px-8 md:px-12 pt-10 w-full flex flex-col">
            <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 w-full">
                <div className="flex md:justify-center md:items-center lg:justify-start lg:items-start">
                    <img
                        alt="teamdao logo"
                        src="/assets/images/team-logo.png"
                        className="h-16" />
                </div>
                <div className="flex flex-col md:grid pl-2 gap-4 md:grid-cols-3 md:items-center md:justify-center lg:justify-end py-4 mt-2">
                    <div className="flex flex-col md:justify-center md:items-center">
                        <div className='flex flex-col gap-2'>
                            <span className="font-semibold text-lg uppercase">Explore</span>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Explore
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Leaderboard
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    FAQ
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-center md:items-center">
                        <div className='flex flex-col gap-2'>
                            <span className="font-semibold text-lg uppercase">policies</span>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Explore
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Leaderboard
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    FAQ
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-center md:items-center">
                        <div className='flex flex-col gap-2'>
                            <span className="font-semibold text-lg uppercase">about us</span>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Explore
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    Leaderboard
                                </a>
                            </Link>
                            <Link passHref href={"#"}>
                                <a className='font-light'>
                                    FAQ
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 mt-3 border-t border-slate-800 flex justify-center items-center'>
                <span className='font-teamdao text-lg tracking-[.5em] md:tracking-[.9em] text-primary text-center'>&copy; 2022 TEAMDAO</span>
            </div>
        </div>
    )
}