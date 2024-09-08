import { IconType } from 'react-icons'
import { LuExternalLink } from "react-icons/lu";

interface IcontactItem {
    icon: IconType,
    content?: string,
    subtitle?: string,
    url: string,
}

//"https://docs.google.com/forms/d/e/1FAIpQLSdoPW7sl_bl7FTRxpKQmDyXXSkCqmpbEyDrZ-6clQ5B1jwZxA/viewform"

const ContactItem = (propos: IcontactItem) => {
    return (

        <a target='_blank' href={propos.url}
            className="relative w-full hover:scale-105 flex items-center gap-1 border-[1px]  dark:bg-white dark:text-black 
                        bg-black text-white p-2 border-black rounded-lg">
            <div className="flex items-center justify-center p-3 bg-slate-100 text-black  rounded-xl">
                <propos.icon size={30} />
            </div>
            <div className="w-full flex flex-col gap-1">
                <p className='text-sm'>{propos?.content}</p>
                <p className='text-sm'>{propos?.subtitle}</p>
            </div>
            <div className="absolute top-2 right-3">
                <LuExternalLink />
            </div>

        </a>

    )
}

export default ContactItem