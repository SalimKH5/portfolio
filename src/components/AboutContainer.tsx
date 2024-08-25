
import skills from "../assets/skills.json"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import ModalComponent from "./ModalComponent";
const AboutContainer = () => {




    return (
        <div id="about" className='w-full section-content h-auto lg:h-screen flex flex-col    justify-center items-center text-center gap-10 py-16'>
            <div className="w-full text-start">
                <h1 className='text-5xl'>About</h1>
            </div>

            <p>I am deeply passionate about new information and communication technologies, and I thrive on exploring and understanding the latest advancements in this dynamic field. My enthusiasm for innovation drives me to stay updated with cutting-edge developments and emerging trends, ensuring I remain at the forefront of technological progress.

                As a Full-Stack Developer with expertise in React.js, Express, and Next.js, I relish the opportunity to leverage these technologies to build robust, scalable, and efficient web applications. My experience spans both front-end and back-end development, allowing me to create seamless and user-centric solutions that address real-world challenges.</p>
            <div className="w-full text-start">
                <h2 className="text-2xl">My General Skills</h2>
            </div>

            <Swiper
                autoplay={true}
                loop={true}
                breakpoints={{
                    // when window width is >= 640px

                    // when window width is >= 768px
                    "0": {
                        slidesPerView: 1,

                        spaceBetween: 5,

                    },
                    "768": {
                        slidesPerView: 2,

                        spaceBetween: 40
                    },
                    "980": {
                        slidesPerView: 4,

                        spaceBetween: 40
                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="w-full min-h-20 max-w-md   lg:max-w-6xl 2xl:max-w-9xl grid lg:grid-cols-4 gap-16 "
            >
                {
                    skills.skills.map((skill: ISkills, index: number) => (
                        <SwiperSlide
                            key={index}
                            className='w-full swiper-slide border-[1.5px] cursor-pointer hover:dark:bg-white hover:dark:text-black hover:dark:border-[#c5c5c5]     *:
                             hover:bg-black hover:text-zinc-200 hover:border-black
                            border-black dark:border-[#e3e3e3] h-14 flex items-center justify-center p-3 rounded-xl'
                        >
                            <ModalComponent Skill={skill} />

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default AboutContainer