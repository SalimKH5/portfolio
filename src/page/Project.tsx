import { useEffect, useMemo, useState } from 'react'
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
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';








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
  const [work,setWork]=useState<IWork>();
  const {t}=useTranslation();
  
  useEffect(()=>{
    const works: IWork[] = t("projects",{returnObjects:true}); // Placeholder, replace with actual data source


    setWork(works.find((work: IWork) => path.id === work.id.toString()));
    
  },[t])
  

  useMemo(() => {
    
    if (work) {
      setPathService(work.image)
    }

  }, [work])



  return (
    <div className="w-full h-full min-h-screen max-w-sm sm:max-w-md md:max-w-5xl xl:max-w-6xl px-5">
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
                        placeholder={<div className='w-full h-80 rounded-2xl flex items-center justify-center bg-slate-300 animate-pulse '></div>}
                        className=' w-full max-h-80  h-full rounded-2xl bg-slate-300 border-black border-[1px] '
                        loading='lazy'
                     
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
                        key={index} 
                          onClick={() => { setPathService(image) }}
                          className='w-full swiper-slider h-full cursor-pointer'>
                          <LazyLoadImage
                            loading='eager'
                          // Add a unique key for each item in a list
                            src={`${image}`} // Assuming 'imagePath' is the field containing the image URL
                            alt=""
                            placeholder={<div className='w-full h-full rounded-2xl bg-slate-300 animate-pulse '></div>}
                            className='object-cover w-full h-full rounded-2xl  border-black border-[1px] '
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
            <h1 className='font-bold text-3xl'>{work?.title}</h1>
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
                 
                  return IconComponent ?
                    <SwiperSlide key={index} className='swiper-slider flex items-center justify-center '>
                      <Tooltip title={iconName.text}>
                        <IconComponent size={30} className="cursor-pointer" />
                      </Tooltip>

                    </SwiperSlide>
                    :
                    null;
                })}
                </Swiper>
              }
            </div>
            <div className="flex items-center gap-5">
              <a href={work?.url} target='_blank' className='flex items-center gap-3 shadow-xl bg-[#221F1F] text-white dark:bg-white dark:text-[#221F1F] dark:hover:bg-[#3b3b3be0] dark:hover:text-[#F1f1f1f1] hover:shadow-2xl  hover:bg-[#acacace0] hover:text-[#0e0e0ef1] p-2 rounded-xl'>

                <span>Visite</span>
                <FaRegEye />
              </a>
              <a href={work?.githubUrl} target='_blank' className='flex items-center gap-3 shadow-xl bg-[#221F1F] text-white dark:bg-white dark:text-[#221F1F] dark:hover:bg-[#3b3b3be0] dark:hover:text-[#F1f1f1f1] hover:shadow-2xl  hover:bg-[#acacace0] hover:text-[#0e0e0ef1] p-2 rounded-xl'>

                <span>Repository</span>
                <FaGithub />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project