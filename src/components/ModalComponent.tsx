import {  useState } from 'react';
import { Modal } from 'antd';
import { FaAngular, FaCss3Alt, FaHtml5, FaJira, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiJavascript } from 'react-icons/si';
import { DiMongodb, DiMysql, DiYii } from 'react-icons/di';
import { AiOutlineDotNet } from 'react-icons/ai';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { PiMicrosoftPowerpointLogoLight } from 'react-icons/pi';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase } from 'react-icons/io5';




// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
    FaAngular: FaAngular,
    FaCss3Alt: FaCss3Alt,
    FaHtml5: FaHtml5,
    FaJira: FaJira,
    FaPhp: FaPhp,
    FaReact: FaReact,
    RiNextjsFill: RiNextjsFill,
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
};


interface ModalComponentProps {

    Skill?: ISkills
}

const ModalComponent = ({  Skill }: ModalComponentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <button className='py-8 bg-transparent border-none' onClick={showModal}>
            {Skill?.title}
            </button>
            <Modal title={Skill?.title} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel} className='w-full px-12 flex items-center justify-center flex-col gap-8 '>
                <div className="w-full h-full bg-white flex flex-col gap-4">
                    {Skill?.details?.map((iconName, index) => {
                        const IconComponent = iconMap[iconName.icon];
                        return IconComponent ?
                            <div key={index} className="w-full flex items-center gap-2">
                                <IconComponent size={30} />
                                <h1>{iconName.text}</h1>
                            </div>
                            :
                            null;
                    })}
                </div>

            </Modal>
        </>
    );
};


export default ModalComponent