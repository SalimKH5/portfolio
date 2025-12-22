import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const AboutContainer = () => {
  const { t } = useTranslation();

  const [skills, setSkills] = useState<ISkills[]>([]);
  useEffect(() => {
    setSkills(t("GeneralSkills", { returnObjects: true }));
  }, [t]);

  return (
    <div
      id="about"
      className="w-full section-content h-auto lg:h-screen flex flex-col    justify-center items-center text-center gap-10 py-24 "
    >
      <div className="w-full text-start">
        <h1 className="text-5xl">{t("titleAbout")}</h1>
      </div>

      <p className="text-lg">{t("subtitleAbout")}</p>
      <div className="w-full text-start">
        <h2 className="text-2xl">{t("GeneralSkillsTitle")}</h2>
      </div>
      <div className="relative w-full px-11">
        <Swiper
          autoplay={{ delay: 5000 }}
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
                        "1200": {
                            slidesPerView: 3,

                            spaceBetween: 30
                        },
                    }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        className="w-full swiper-slide h-auto  "
        >
          {skills.map((skill: ISkills, index: number) => (
            <SwiperSlide
              key={index}
            >
              <ModalComponent Skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutContainer;
