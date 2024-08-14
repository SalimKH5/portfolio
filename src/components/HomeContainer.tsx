import React from 'react'

const HomeContainer = () => {
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-20'>
            <div className="w-full h-full flex-col lg:flex-row flex items-center gap-8 justify-between">
                <div className="w-full h-full flex items-center flex-col gap-3 justify-center text-center max-w-sm">
                    <h1 className='font-bold text-5xl'>FullStack Developper</h1>
                    <p>Full-Stack Developer | Specialist in React.js, Express.js, and Next.js | Passionate Data Science Enthusiast | Building Scalable, High-Performance Applications</p>
                </div>
                <div className="w-72 max-h-[34rem] h-full flex items-center justify-center">
                    <div className="w-full h-full  rounded-2xl relative">
                        <img src="/ProfilePicture.jpg" alt="" className='object-cover h-full rounded-2xl' />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HomeContainer