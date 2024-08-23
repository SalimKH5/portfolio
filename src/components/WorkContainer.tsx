
import ProjectContainer from './ProjectContainer'

const works: IWork[] = [
    {
        "image": "/instagrame clone.png",
        "title": "Instagram Clone",
        "id": 1,
        "detail": "A fully functional Instagram clone built with Next.js, leveraging its capabilities such as API routes and server-side rendering to replicate the core features of Instagram. Includes user authentication, photo uploads, and real-time interactions.",
    
    },
    {
        "image": "/social media dashboard.png",
        "title": "Social Media Dashboard",
        "id": 2,
        "detail": "A dynamic social media dashboard designed with HTML, CSS, and JavaScript. Features a user-friendly interface with the ability to toggle between light and dark modes, making it adaptable to different user preferences and lighting conditions."
    },
    {
        "image": "/youtube.png",
        "title": "YouTube Clone",
        "id": 3,
        "detail": "A YouTube clone developed using React.js and an external API. It includes video playback functionality and a search feature, providing a similar experience to YouTube with a custom front-end design."
    },
    {
        "image": "/rest country.png",
        "title": "REST Country",
        "id": 4,
        "detail": "A web application built with React.js that allows users to explore and filter countries based on various criteria such as population, region, and languages. Provides a comprehensive overview of country data with a responsive and interactive UI."
    },
    {
        "image": "/static-job-listings.png",
        "title": "Static Job Listings",
        "id": 5,
        "detail": "A static job listings page featuring a search functionality to filter job postings based on different criteria such as job title, location, and type. Designed with a clean and straightforward layout to provide an efficient job search experience."
    }
]
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay";
import 'swiper/css/navigation';



const WorkContainer = () => {
    return (
        <div id="work" className='w-full section-content h-auto lg:h-screen  flex flex-col  justify-center items-center text-center gap-10 py-24'>
            <div className="w-full  flex flex-col gap-8 text-start">
                <h1 className='text-5xl '>Work</h1>
                <div className="w-full text-center">
                    <p>Explore a selection of my projects that demonstrate my expertise across various technologies. Each project highlights different skills and tools I've utilized to solve unique challenges and deliver impactful solutions. From innovative web applications to robust backend systems, these examples showcase my versatility and commitment to quality. You'll find a diverse range of work that not only reflects my technical abilities but also my dedication to continuous learning. My portfolio is a testament to my passion for creating effective, efficient, and user-friendly solutions.</p>
                </div>
                <Swiper
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        "0": {
                            slidesPerView: 1,

                            spaceBetween: 5,

                        },
                        "768": {
                            slidesPerView: 2,

                            spaceBetween: 20
                        },
                        "980": {
                            slidesPerView: 3,

                            spaceBetween: 30
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="w-full h-full min-h-10 "
                >
                    {
                        works.map((work: IWork) => (

                            <SwiperSlide className='w-full swiper-slide h-60'>
                                <ProjectContainer propos={work} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default WorkContainer