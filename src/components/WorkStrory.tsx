
import Timeline from './Timeline';
const WorkStrory = () => {
    const events: IEvent[] = [
        {
            date: 'Octobre 2023 - Mars 2024 · 6 mois', title: "Frontend Delveloper in IMMERSIVE DIGITAL DEVELOPPEMENT (IDD)",
            localisation: "Cheragga Algeria"
            , descriptions: [
                "Creation of intuitive and engaging user interfaces",
                "Using the Next.js framework for dynamic and responsive frontend solutions",
                "Collaborating with the design team to enhance the user experience"
            ]
        },
        { date: 'August 2023 - October 2023 · 3 months', title: "Full-stack Developer Algitech.sol · Freelance",
            descriptions:["Developed essential features for an e-commerce site using the PHP Yii2 framework",
            "Optimized site performance and improved the user experience"] },
        // Add more events as needed
    ];
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-[65px]'>
            <div className="w-full h-full flex-col  flex gap-3 xl:gap-5 ">
                <h1 className='text-4xl'>Experiences</h1>
                <div className="w-full px-16">
                    <Timeline events={events} />
                </div>
            </div>


        </div>
    )
}

export default WorkStrory