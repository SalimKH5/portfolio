import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FaExternalLinkAlt, FaGitlab} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SiTypescript } from "react-icons/si";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaJira,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiJavascript } from "react-icons/si";
import { DiMongodb, DiMysql, DiYii } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiMicrosoftPowerpointLogoLight } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { LuFileJson } from "react-icons/lu";
import { Tooltip } from "antd";
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

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
  LuFileJson: LuFileJson,
  FaGitlab:FaGitlab
};




const Project = () => {
  const path = useParams();

  const [pathService, setPathService] = useState<SelectImage>({image:"",index:0});
  const [work, setWork] = useState<IWork>();
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const works: IWork[] = t("projects", { returnObjects: true }); // Placeholder, replace with actual data source

    setWork(works.find((work: IWork) => path.id === work.id.toString()));
  }, [t]);

  useMemo(() => {
    if (work) {
      setPathService({
        image:work.image,
        index:0
      });
    }
  }, [work]);

  return (
    <div className="w-full h-full min-h-screen max-w-sm sm:max-w-md md:max-w-5xl xl:max-w-7xl py-20 px-5">
      <div className="w-full h-full   flex flex-col  lg:flex-row ">
        <div className="w-full h-full flex  lg:flex-row flex-col-reverse items-center gap-8 justify-between">
          <div className="w-full max-w-3xl h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-9  ">
              {work && (
                <>
                  <div className="w-full flex items-center justify-center">
                    <div className="w-full flex flex-col gap-10 h-full relative">
                      <LazyLoadImage
                        key={work.id} // Add a unique key for each item in a list
                        src={`${pathService.image}`} // Assuming 'imagePath' is the field containing the image URL
                        alt=""
                        effect="opacity"
                        placeholder={
                          <div className="w-full h-full rounded-2xl flex items-center justify-center bg-slate-300 animate-pulse "></div>
                        }
                        className={`w-full h-[15rem] lg:h-[26rem] rounded-3xl object-fill transition-all duration-500 ease-in-out border-2 border-black dark:border-blue-300
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                      />
                    </div>
                  </div>
                  {work.images && (
                    <Swiper
                     autoplay={{ delay: 4000 }}
                      loop={true}
                    
                      breakpoints={{
                        "0": {
                          slidesPerView:2,
                           spaceBetween: 10,
                        },
                        "980": {
                          slidesPerView: work?.images?.length > 2 ? 3 : 2,

                          spaceBetween: 15,
                        },
                      }}
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      className="w-full h-40"
                    >
                      {work?.images?.map((image: string, index: number) => (
                        <SwiperSlide
                          key={index}
                          onClick={() => {
                            setPathService({
                               image:image,
                              index:index
                            });
                          }}
                          className={`w-full h-full  rounded-lg  swiper-slider  cursor-pointer `}
                        >
                          <LazyLoadImage
                           effect="opacity"
                            // Add a unique key for each item in a list
                            src={`${image}`} // Assuming 'imagePath' is the field containing the image URL
                            alt=""
                           
                            className={` w-full h-full object-contain  rounded-xl  ${pathService.index===index ? "border-4 border-violet-400":"border-2 border-black dark:border-blue-300"} `}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="w-full h-full flex items-center flex-col gap-6 justify-center text-center max-w-sm">
            <h1 className="font-bold text-3xl">{work?.title}</h1>
            <p>{work?.detail}</p>
            <div className="w-full flex items-center justify-center">
              {work?.icons && (
                <Swiper
                  autoplay={true}
                  loop={true}

                  slidesPerView={
                    work?.icons?.length > 5 ? 4 : work?.icons?.length
                  }
                  spaceBetween={15}
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  className="mySwiper px-8  flex items-center justify-between"
                >
                  {" "}
                  {work?.icons?.map((iconName: ISkillDetail, index: number) => {
                    const IconComponent = iconMap[iconName.icon];

                    return IconComponent ? (
                      <SwiperSlide
                        key={index}
                        className="swiper-slider flex items-center justify-center "
                      >
                        <Tooltip title={iconName.text}>
                          <IconComponent size={30} className="cursor-pointer" />
                        </Tooltip>
                      </SwiperSlide>
                    ) : null;
                  })}
                </Swiper>
              )}
            </div>
            <div className="flex items-center gap-3 mt-2">
                        <a
                          href={work?.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 text-xs font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Live Demo</span>
                        </a>
            
                        <a
                          href={work?.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-black text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white py-2.5 px-4 text-xs font-bold rounded-xl transition-all active:scale-95"
                        >
                          <FaGithub size={16} />
                          <span>Code</span>
                        </a>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
