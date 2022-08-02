import Link from 'next/link'
export default function Discord() {
    return (
        <div className='shadow-md bg-[url(/assets/images/discord-chat.webp)] h-[700px] overflow-hidden w-full'>
            <div className='flex flex-col bg-slate-900/90 h-full'>
                <div className='py-10 px-10 lg:px-20 flex gap-3 flex-col xl:flex-row xl:justify-between'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-5xl font-light'>Join our Discord!</div>
                        <div className='text-lg font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className='py-2 flex justify-center items-center'>
                        <Link passHref href={"#"}>
                            <a className='flex w-auto flex-row gap-4 items-center justify-center bg-primary px-5 py-3 rounded-md'>
                                <img
                                    alt="discord"
                                    src='/assets/images/icons8-discord.svg'
                                    className='w-7 h-7 object-contain' />
                                <span className='text-black font-bold text-lg'>Join Now</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='h-full px-20 py-10 lg:px-36'>
                    <img
                        alt="discord"
                        src='/assets/images/discord-chat.webp'
                        className='w-full h-full object-fill' />
                </div>
            </div>
        </div>
    )
}