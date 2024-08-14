import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import { FaRegEye } from "react-icons/fa";


const works: IWork[] = [
  {
    "image": "/instagrame clone.png",
    "title": "Instagram Clone",
    "id": 1,
    url: "https://instagram-clone-next-git-main-khadir-salims-projects.vercel.app/",
    images: ["/instagrame clone.png", "/instagram2.png", "/instagram3.png", "/instagram4.png", "/instagram5.png"],
    "detail": "A fully functional Instagram clone built with Next.js, leveraging its capabilities such as API routes and server-side rendering to replicate the core features of Instagram. Includes user authentication, photo uploads, and real-time interactions."
  },
  {
    "image": "/social media dashboard.png",
    "title": "Social Media Dashboard",
    "id": 2,
    url: "https://salimkh5.github.io/social-media-dashbord/",
    images: ["/social media dashboard.png", "/social media dashboard2.png"],
    "detail": "A dynamic social media dashboard designed with HTML, CSS, and JavaScript. Features a user-friendly interface with the ability to toggle between light and dark modes, making it adaptable to different user preferences and lighting conditions."
  },
  {
    "image": "/youtube.png",
    "title": "YouTube Clone",
    "id": 3,
    url: "https://gregarious-monstera-5e42e6.netlify.app/",
    images: ["/youtube.png", "/yotube2.png"],
    "detail": "A YouTube clone developed using React.js and an external API. It includes video playback functionality and a search feature, providing a similar experience to YouTube with a custom front-end design."
  },
  {
    "image": "/rest country.png",
    "title": "REST Country",
    "id": 4,
    url: "https://salimkh5.github.io/rest-countries-master/",
    images: ["/rest country.png", "/rest country2.png", "/rest country3.png"],
    "detail": "A web application built with React.js that allows users to explore and filter countries based on various criteria such as population, region, and languages. Provides a comprehensive overview of country data with a responsive and interactive UI."
  },
  {
    "image": "/static-job-listings.png",
    "title": "Static Job Listings",
    "id": 5,
    url: "https://salimkh5.github.io/static-job-listings-master/",
    images: ["/social media dashboard.png", "/social media dashboard2.png"],
    "detail": "A static job listings page featuring a search functionality to filter job postings based on different criteria such as job title, location, and type. Designed with a clean and straightforward layout to provide an efficient job search experience."
  }
]




const Project = () => {

  const path = useParams();

  const [pathService,setPathService]=useState<string>("");

  const work = works.find((work: IWork) => path.id === work.id.toString())
  
  useEffect(()=>{
    if(work){
      setPathService(work.image)
    }

  },[work])



  return (
    <div className="w-full h-full max-w-sm lg:max-w-6xl">
      <div className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-20'>
        <div className="w-full h-full flex  lg:flex-row flex-col-reverse items-center gap-8 justify-between">

          <div className="w-full max-w-xl h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-3  ">
              {work && (
                <>
                  <div className="w-full flex items-center justify-center">
                    <div className='w-full max-h-80 h-full rounded-2xl relative'>
                      <img
                        key={work.id} // Add a unique key for each item in a list
                        src={`${pathService}`} // Assuming 'imagePath' is the field containing the image URL
                        alt=""
                        className='object-fill   h-full rounded-2xl border-2 border-blue-300'
                      />
                    </div>
                  </div>
                  {
                    work.images &&
                    (<Swiper
                      autoplay={true}
                      loop={true}
                      breakpoints={{
                        "0": {
                          slidesPerView: work?.images?.length > 2 ? 3 : 2,

                          spaceBetween: 8,

                        },
                        "980": {
                          slidesPerView: work?.images?.length > 2 ? 3 : 2,

                          spaceBetween: 30
                        },
                      }}
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }}

                      className="w-full h-20  lg:h-28 "
                    >

                      {work?.images?.map((image: string, index: number) => (

                        <SwiperSlide 
                        onClick={()=>{setPathService(image)}}
                        className='w-full swiper-slider h-full cursor-pointer'>
                          <img
                            key={index} // Add a unique key for each item in a list
                            src={`${image}`} // Assuming 'imagePath' is the field containing the image URL
                            alt=""
                            className='object-fill h-full rounded-2xl border-2 border-blue-300'
                          />
                        </SwiperSlide>
                      ))
                      }
                    </Swiper>)
                  }


                </>

              )}
            </div>
          </div>
          <div className="w-full h-full flex items-center flex-col gap-6 justify-center text-center max-w-sm">
            <h1 className='font-bold text-5xl'>{work?.title}</h1>
            <p>{work?.detail}</p>
            <a href={work?.url} target='_blank' className='flex items-center gap-3 bg-white text-[#221F1F] p-2 rounded-xl'>
              <span>Visite</span>
              <FaRegEye />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project