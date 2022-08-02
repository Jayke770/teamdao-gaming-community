import Link from 'next/link'
export default function CreateYourOwnTournament() {
    return (
        <div className="lg:px-6 py-8">
            <div className="relative bg-gradient-to-r from-primary/10 to-slate-900 flex flex-col gap-3 border-[0.1px] border-primary p-10 md:rounded-md lg:pr-96 transition-all overflow-hidden">
                <div className='absolute left-0 top-0 bottom-0 w-full flex lg:justify-end justify-center items-center lg:pr-28 py-10 z-0 opacity-50 lg:opacity-100'>
                    <img
                        alt="logo 3d"
                        src="/assets/images/logo-3d-2.svg"
                        className='object-contain h-full w-40 rotate-45' />
                </div>
                <div className='z-10 flex flex-col gap-3'>
                    <div className="text-3xl font-light font-teamdao tracking-[0.2em] text-primary">Want to Create Your Own Tournament?</div>
                    <div className='text-lg break-words'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste tempora doloribus quae? Sequi accusantium laborum alias, animi nulla nesciunt quasi sit quaerat velit rerum fuga, facere minus saepe. Accusantium?
                    </div>
                    <div className='text-lg break-words'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste tempora doloribus quae? Sequi accusantium laborum alias, animi nulla nesciunt quasi sit quaerat velit rerum fuga, facere minus saepe. Accusantium?
                    </div>
                    <div className="flex justify-center md:justify-start items-center mt-2">
                        <Link href={"#"} passHref>
                            <a className='border border-primary px-4 py-2 rounded-md transition-all text-primary hover:bg-primary hover:text-black font-medium'>
                                Apply To Be An Organizer
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}