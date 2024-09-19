
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

const HomeContainer = () => {
    const { t } = useTranslation();


    return (
        <div
            id="home" className={` w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-20`}>
            <div className="w-full h-full flex-col lg:flex-row flex items-center gap-8 justify-between">
                <motion.div initial={{ width: "100vw", x: "-60vw" }}
                    animate={{ width: "100%", x: 0 }}
                    transition={{ duration: 1, origin: 1 }} className="w-full h-full flex items-center flex-col gap-3 justify-center text-center max-w-sm">
                    <h1 className='font-bold text-5xl'>Salim KHADIR</h1>
                    <h2 className='font-bold text-xl'>FullStack Developper</h2>
                    <p>{t("subtitleSection1")}</p>
                </motion.div >
                <motion.div initial={{ width: "100vw", x: "60vw" }}
                    animate={{ width: "100%", x: 0 }}
                    transition={{ duration: 1, origin: 1 }} className="w-full  h-full flex items-center justify-center lg:justify-end ">
                    <div className="w-[15rem] h-[15rem]  xl:w-[22rem] xl:h-[22rem]  relative">
                        <img src="/ProfilePicture.jpg" alt="" className='object-cover border-[1px] border-black w-full h-full rounded-full' />
                    </div>

                </motion.div>
            </div>


        </div>
    )
}

export default HomeContainer