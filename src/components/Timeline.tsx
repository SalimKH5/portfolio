

const Timeline = ({events}:{events:IEvent[]}) => {
   

    return (
        <div className="container ">
            <div className="relative border-l-2 flex flex-col gap-6 xl:gap-8 border-white">
                {events.map((event, index) => (
                    <div key={index} className="relative flex flex-col gap-3 text-white pl-6">
                        <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-[5px] top-1.5"></div>
                        <p className="text-sm">{event?.date}</p>
                        <h2 className="abosulte left-16 text-sm xl:text-base font-semibold text-gray-400">{event.title}</h2>
                        <ul className="pl-8 list-disc">
                        {
                            event?.descriptions?.map((description,index)=>(
                                   <li  key={index}>{description}</li>         
                            ))
                        }
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
