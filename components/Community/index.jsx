import Link from 'next/link'
export default function Community() {
    return (
        <div className="relative flex flex-col gap-3 py-20 px-5 md:px-10">
            <img
                src="/assets/images/hero-esports.4bbc3408.jpg"
                alt="esports"
                className="absolute top-0 left-0 opacity-20 w-full h-full object-cover" />
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 z-10 lg:px-10">
                <div className="flex flex-col gap-3 justify-center">
                    <div className='text-4xl lg:text-5xl font-light'>Join our Community</div>
                    <div className='text-md lg:text-lg font-light '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed iure expedita temporibus aliquid deserunt numquam autem ab totam, nesciunt eos voluptas amet quae repudiandae esse cumque distinctio! Earum, reiciendis!
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <iframe
                        allowFullScreen
                        allow="autoplay; encrypted-media"
                        className="w-full h-[350px] lg:h-96"
                        src="https://www.youtube.com/embed/ymheAp3x6do">
                    </iframe>
                </div>
            </div>
            <div className="flex justify-center items-center p-3 gap-5 mt-10 z-10">
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/facebook.png'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/discord.svg'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/medium.svg'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/telegram.svg'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/tiktok.png'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/twitch.png'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/twitter.svg'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
                <Link passHref href={"#"}>
                    <a>
                        <img
                            alt='social media'
                            src='/assets/images/youtube.svg'
                            className='w-6 h-6 object-contain' />
                    </a>
                </Link>
            </div>
        </div>
    )
}