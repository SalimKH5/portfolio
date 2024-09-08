
import { useTranslation } from 'react-i18next';
import Timeline from './Timeline';
const WorkStrory = () => {
   

    
    const {t}=useTranslation();
    
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-[65px]'>
            <div className="w-full h-full flex-col  flex gap-3 xl:gap-5 ">
                <h1 className='text-4xl'>Experiences</h1>
                <div className="w-full px-5">
                    <Timeline events={t("experiences", { returnObjects: true })} />
                </div>
            </div>


        </div>
    )
}

export default WorkStrory