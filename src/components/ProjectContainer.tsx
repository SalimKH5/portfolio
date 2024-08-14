import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectContainer = ({ propos }: { propos: IWork }) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <a
            href={`/${propos.id}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='w-full h-full relative flex flex-col cursor-pointer text-black rounded-3xl overflow-hidden'
        >
            <div
                className={`absolute inset-0 left-0 right-0 flex items-center justify-center  bg-[#000000] rounded-3xl transition-transform  duration-700 ease-in-out ${hover ? 'opacity-95 translate-y-0' : 'opacity-0 translate-y-full'}`}
            >
                <h1 className='font-bold text-xl text-white'>{propos.title}</h1>
            </div>
            <img src={propos.image} alt="" className="w-full h-full rounded-3xl" />
        </a>
    );
};

export default ProjectContainer;
