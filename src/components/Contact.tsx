
import { SiGoogleforms } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ContactItem from './ContactItem';
import { useTranslation } from 'react-i18next';
const Contact = () => {

    const {t}=useTranslation();
    return (
        <div id="contact" className='w-full section-content h-auto lg:h-screen flex flex-col    justify-center items-center text-center gap-10  py-16 '>
            <div className="w-full flex items-start ">
                <h1 className="font-bold text-2xl">{t("ContactTitle")}</h1>
            </div>
            <p>{t("ContacteSubtitle")}</p>
            <div className="w-full h-full max-w-5xl flex-col sm:flex-row   flex items-center gap-8 justify-between">
                <ContactItem 
                content='khadir.salim1@gmail.com' 
                subtitle={t("ContactFormGmail")}
                icon={SiGoogleforms} url='https://docs.google.com/forms/d/e/1FAIpQLSdoPW7sl_bl7FTRxpKQmDyXXSkCqmpbEyDrZ-6clQ5B1jwZxA/viewform'/>
                <ContactItem 
                
                subtitle={t("ContactLinkdean")}
                content='Khadir Salim' icon={FaLinkedin} url='https://www.linkedin.com/in/salim-khadir-316aa3219/'/>
                <ContactItem 
                subtitle={t("ContactGithub")}
                content='SalimKh5' icon={FaGithub} url='https://github.com/salimKH5'/>
                
            </div>
        </div>
    )
}

export default Contact