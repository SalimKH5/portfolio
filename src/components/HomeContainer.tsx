

const HomeContainer = () => {
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-20'>
            <div className="w-full h-full flex-col lg:flex-row flex items-center gap-8 justify-between">
                <div className="w-full h-full flex items-center flex-col gap-3 justify-center text-center max-w-sm">
                    <h1 className='font-bold text-5xl'>Salim KHADIR</h1>
                    <h2 className='font-bold text-xl'>FullStack Developper</h2>
                    <p>Welcome to my portfolio! Explore my background and the projects I&apos;ve crafted, showcasing my skills and creativity. Feel free to connect if you&apos;d like to learn more or collaborate.</p>
                </div>
                <div className="w-full h-full flex items-center justify-center lg:justify-end ">
                    <div className="w-[15rem] h-[15rem]  xl:w-[22rem] xl:h-[22rem]  relative">
                        <img src="/ProfilePicture.jpg" alt="" className='object-cover w-full h-full rounded-full' />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HomeContainer