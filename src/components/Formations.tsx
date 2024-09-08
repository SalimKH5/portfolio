import { useTranslation } from "react-i18next";
import TimelineAcademic from "./TimelineAcademic";

const Formations = () => {
    const {t}=useTranslation();
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-[65px]'>
            <div className="w-full h-full flex-col  flex  gap-3">
                <h1 className='text-4xl'>Academy </h1>
                <div className="w-full px-5">
                <TimelineAcademic events={t("education",{returnObjects:true})}/>
                </div>
               
            </div>


        </div>
    )
}





export default Formations