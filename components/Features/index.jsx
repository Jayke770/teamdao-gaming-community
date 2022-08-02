import { Wallet, Rocket, Tv } from 'framework7-icons/react'
export default function Features() {
    return (
        <div className="py-20 md:px-20 md:h-[800px] lg:h-[500px]">
            <div className="w-full flex justify-center items-center px-5">
                <p className="text-center font-teamdao tracking-[0.2em] text-primary text-3xl lg:text-4xl">What is TEAMDAO Community Gaming?</p>
            </div>
            <div className="grid gap-10 xl:gap-5 grid-rows-3 md:grid-cols-2 lg:grid-cols-3 w-full mt-16">
                <div className='flex flex-col gap-4 items-center justify-center '>
                    <Wallet className="w-14 h-14 text-primary" />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='font-bold text-xl'>Feature 1</div>
                        <div className='text-center px-8 font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis, dolor, numquam aperiam placeat suscipit ab nostrum porro quas assumenda sit in tempore, velit dolores odio. Voluptas odio soluta consequatur!
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center '>
                    <Tv className="w-14 h-14 text-primary" />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='font-bold text-xl'>Feature 1</div>
                        <div className='text-center px-8 font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis, dolor, numquam aperiam placeat suscipit ab nostrum porro quas assumenda sit in tempore, velit dolores odio. Voluptas odio soluta consequatur!
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col gap-4 items-center justify-center '>
                    <Rocket className="w-14 h-14 text-primary" />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='font-bold text-xl'>Feature 1</div>
                        <div className='text-center px-8 font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis, dolor, numquam aperiam placeat suscipit ab nostrum porro quas assumenda sit in tempore, velit dolores odio. Voluptas odio soluta consequatur!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}