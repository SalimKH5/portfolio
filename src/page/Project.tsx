import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import { FaRegEye } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SiTypescript } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaJira, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiJavascript } from 'react-icons/si';
import { DiMongodb, DiMysql, DiYii } from 'react-icons/di';
import { AiOutlineDotNet } from 'react-icons/ai';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { PiMicrosoftPowerpointLogoLight } from 'react-icons/pi';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { LuFileJson } from "react-icons/lu";
import { Tooltip } from 'antd';

const works: IWork[] = [
  {
    "image": "/instagrame clone.png",
    "title": "Instagram Clone",
    "id": 1,
    url: "https://instagram-clone-next-git-main-khadir-salims-projects.vercel.app/",
    images: ["/instagrame clone.png", "/instagram2.png", "/instagram3.png", "/instagram4.png", "/instagram5.png"],
    "detail": "A fully functional Instagram clone built with Next.js, leveraging its capabilities such as API routes and server-side rendering to replicate the core features of Instagram. Includes user authentication, photo uploads, and real-time interactions.",
    icons: [{icon:"RiNextjsFill",text:"NextJs"},{icon:"FaReact",text:"ReactJs"} ,{icon:"DiMongodb",text:"Mongodb"},{icon:"RiTailwindCssFill",text:"Tailwind css"},{icon:"LuFileJson",text:"Json"},{icon:"FaHtml5",text:"HTML5"},{icon:"SiTypescript",text:"Typescript"}]
  },
  {
    "image": "/social media dashboard.png",
    "title": "Social Media Dashboard",
    "id": 2,
    url: "https://salimkh5.github.io/social-media-dashbord/",
    images: ["/social media dashboard.png", "/social media dashboard2.png", "/social media dashboard3.png"],
    "detail": "A dynamic social media dashboard designed with HTML, CSS, and JavaScript. Features a user-friendly interface with the ability to toggle between light and dark modes, making it adaptable to different user preferences and lighting conditions.",
    icons: [{icon:"SiJavascript",text:"Javascript"} ,{icon:"FaCss3Alt",text:"CSS"} ,{icon:"FaHtml5",text:"HTML5"},{icon:"LuFileJson",text:"Json"}]
  },
  {
    "image": "/youtube.png",
    "title": "YouTube Clone",
    "id": 3,
    url: "https://gregarious-monstera-5e42e6.netlify.app/",
    images: ["/youtube.png", "/yotube2.png", "/youtube3.png"],
    "detail": "A YouTube clone developed using React.js and an external API. It includes video playback functionality and a search feature, providing a similar experience to YouTube with a custom front-end design.",
    icons: [{icon:"FaReact",text:"ReactJs"} ,{icon:"FaCss3Alt",text:"CSS"} ,{icon:"FaHtml5",text:"HTML5"},{icon:"LuFileJson",text:"Json"}]
  },
  {
    "image": "/rest country.png",
    "title": "REST Country",
    "id": 4,
    url: "https://salimkh5.github.io/rest-countries-master/",
    images: ["/rest country.png", "/rest country2.png", "/rest country3.png","/rest country4.png"],
    "detail": "A web application built with React.js that allows users to explore and filter countries based on various criteria such as population, region, and languages. Provides a comprehensive overview of country data with a responsive and interactive UI.",
    icons: [{icon:"FaReact",text:"ReactJs"} ,{icon:"FaCss3Alt",text:"CSS"} ,{icon:"FaHtml5",text:"HTML5"},{icon:"LuFileJson",text:"Json"}]
  },
  {
    "image": "/static-job-listings.png",
    "title": "Static Job Listings",
    "id": 5,
    url: "https://salimkh5.github.io/static-job-listings-master/",
    images: ["/static-job-listings.png", "/static-job-listings2.png", "static-job-listings3.png"],
    "detail": "A static job listings page featuring a search functionality to filter job postings based on different criteria such as job title, location, and type. Designed with a clean and straightforward layout to provide an efficient job search experience.",
    icons: [{icon:"FaReact",text:"ReactJs"} ,{icon:"FaCss3Alt",text:"CSS"} ,{icon:"FaHtml5",text:"HTML5"},{icon:"LuFileJson",text:"Json"}]
  }
]







// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
  FaAngular: FaAngular,
  FaCss3Alt: FaCss3Alt,
  FaHtml5: FaHtml5,
  FaJira: FaJira,
  FaPhp: FaPhp,
  SiTypescript: SiTypescript,
  FaReact: FaReact,
  IoLogoJavascript: IoLogoJavascript,
  RiNextjsFill: RiNextjsFill,
  RiTailwindCssFill: RiTailwindCssFill,
  SiExpress: SiExpress,
  SiJavascript: SiJavascript,
  DiMongodb: DiMongodb,
  DiMysql: DiMysql,
  DiYii: DiYii,
  FaPython: FaPython,
  AiOutlineDotNet: AiOutlineDotNet,
  GiArtificialIntelligence: GiArtificialIntelligence,
  PiMicrosoftPowerpointLogoLight: PiMicrosoftPowerpointLogoLight,
  BiLogoPostgresql: BiLogoPostgresql,
  IoLogoFirebase: IoLogoFirebase,
  LuFileJson: LuFileJson
};





const Project = () => {

  const path = useParams();

  const [pathService, setPathService] = useState<string>("");

  const work = works.find((work: IWork) => path.id === work.id.toString())

  useMemo(() => {
    if (work) {
      setPathService(work.image)
    }

  }, [work])



  return (
    <div className="w-full h-full min-h-screen max-w-sm sm:max-w-md md:max-w-5xl xl:max-w-6xl">
      <div className='w-full  h-auto  flex flex-col  lg:flex-row py-10 md:py-16'>
        <div className="w-full h-full flex  lg:flex-row flex-col-reverse items-center gap-8 justify-between">

          <div className="w-full max-w-xl h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-3  ">
              {work && (
                <>
                  <div className="w-full flex items-center justify-center">
                    <div className='w-full max-h-80 h-full rounded-2xl relative'>
                      <LazyLoadImage
                        key={work.id} // Add a unique key for each item in a list
                        src={`${pathService}`} // Assuming 'imagePath' is the field containing the image URL
                        alt=""
                        placeholder={<div className='w-full h-80 rounded-2xl bg-slate-300 animate-pulse '></div>}
                        className=' w-full max-h-80  h-full rounded-2xl '
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

                          spaceBetween: 15
                        },
                      }}
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }}

                      className="w-full h-24  lg:h-28 "
                    >

                      {work?.images?.map((image: string, index: number) => (

                        <SwiperSlide
                          onClick={() => { setPathService(image) }}
                          className='w-full swiper-slider h-full cursor-pointer'>
                          <LazyLoadImage
                            key={index} // Add a unique key for each item in a list
                            src={`${image}`} // Assuming 'imagePath' is the field containing the image URL
                            alt=""
                            placeholder={<div className='w-full h-full rounded-2xl bg-slate-300 animate-pulse '></div>}
                            className='object-cover w-full h-full rounded-2xl '
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
            <div className="w-full flex items-center justify-center">
              {work?.icons &&
                <Swiper
                  autoplay={true}
                  loop={true}
                  slidesPerView={work?.icons?.length > 5 ? 4 : work?.icons?.length}
                  spaceBetween={15}
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                
                  className="mySwiper px-8  flex items-center justify-between"
                >   {work?.icons?.map((iconName: ISkillDetail, index: number) => {
                  const IconComponent = iconMap[iconName.icon];
                  console.log({ IconComponent })
                  return IconComponent ?
                    <SwiperSlide key={index} className='swiper-slider flex items-center justify-center '>
                      <Tooltip title={iconName.text}>
                        <IconComponent size={20} className="cursor-pointer" />
                      </Tooltip>

                    </SwiperSlide>
                    :
                    null;
                })}
                </Swiper>
              }
            </div>

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