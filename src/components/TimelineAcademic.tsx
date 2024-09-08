
const TimelineAcademic = ({events}:{events:EducationExperience[]}) => {
  return (
    <div className="container ">
            <div className="relative border-l-2 flex flex-col gap-6 xl:gap-8 border-black dark:border-white">
                {events.map((event, index) => (
                    <div key={index} className="relative flex flex-col gap-3  pl-6">
                        <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-[5px] top-1.5"></div>
                        <h1 className=' left-16 text-sm xl:text-base font-semibold text-gray-800 dark:text-gray-400'>
                            {event.degree}
                        </h1>
                        <p className="text-sm">{event?.start_date}  {event?.end_date?`to ${event?.end_date}`:""}</p>
                        <h2 className="abosulte left-16 text-sm xl:text-base font-semibold text-gray-800 dark:text-gray-400">
                            {event.institution}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default TimelineAcademic