
import ProjectContainer from './ProjectContainer'

const works: IWork[] = [
    {
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-af3bf.appspot.com/o/instagrame%20clone.png?alt=media&token=55d1fc1e-bc3a-4147-8331-41a90dae62cd",
        "title": "Instagram Clone",
        "id": 1,
        "detail": "A fully functional Instagram clone built with Next.js, leveraging its capabilities such as API routes and server-side rendering to replicate the core features of Instagram. Includes user authentication, photo uploads, and real-time interactions.",
    
    },
    {
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-af3bf.appspot.com/o/social%20media%20dashboard.png?alt=media&token=c6e90168-8708-4e98-9cdc-c6086201a51a",
        "title": "Social Media Dashboard",
        "id": 2,
        "detail": "A dynamic social media dashboard designed with HTML, CSS, and JavaScript. Features a user-friendly interface with the ability to toggle between light and dark modes, making it adaptable to different user preferences and lighting conditions."
    },
    {
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-af3bf.appspot.com/o/youtube.png?alt=media&token=3bbadc37-f105-42e9-b96d-11b1eb9ef8f8",
        "title": "YouTube Clone",
        "id": 3,
        "detail": "A YouTube clone developed using React.js and an external API. It includes video playback functionality and a search feature, providing a similar experience to YouTube with a custom front-end design."
    },
    {
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-af3bf.appspot.com/o/rest%20country.png?alt=media&token=1d8cded7-e98c-4d3b-93e0-60402faae152",
        "title": "REST Country",
        "id": 4,
        "detail": "A web application built with React.js that allows users to explore and filter countries based on various criteria such as population, region, and languages. Provides a comprehensive overview of country data with a responsive and interactive UI."
    },
    {
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-af3bf.appspot.com/o/static-job-listings.png?alt=media&token=8a8beb9d-e48f-4efd-b835-2f2b50ee6ccd",
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
import { useTranslation } from 'react-i18next';



const WorkContainer = () => {

    const {t}=useTranslation();
    return (
        <div id="work" className='w-full section-content h-auto lg:h-screen  flex flex-col  justify-center items-center text-center gap-10 py-24'>
            <div className="w-full  flex flex-col gap-8 text-start">
                <h1 className='text-5xl '>{t("titleSide")}
                </h1>
                <div className="w-full text-center">
                    <p>{t("sideProject")}</p>
                </div>
                <Swiper
                    autoplay={{delay:6000}}
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