
import ProjectContainer from './ProjectContainer'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';



const WorkContainer = () => {

    const {t}=useTranslation();
     const [works, setWorks] = useState<IWork[]>([]);
      useEffect(() => {
        setWorks(t("projects", { returnObjects: true }));
      }, [t]);
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
                    className="w-full h-auto "
                >
                    {
                        works.map((work: IWork,index:number) => (

                            <SwiperSlide key={index} className='w-full swiper-slide h-auto  '>
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