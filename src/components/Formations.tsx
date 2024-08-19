import Timeline from "./Timeline"

const Formations = () => {
    const events = [
        { date: '2024-04-02 /currently', title: "Master 's in Web Architecture at Digital School of Paris" },
        { date: '2023-07-17/2021-09-26', title: "Diplome in Master's 2 degree in Bioinformatics at University of Science and Technology Houari Boumediene" },
        { date: '2021-06-15', title: "Diplome in Bachelor's degree in Computer Science at University of Science and Technology Houari Boumediene" },
        { date: '2018-07-20', title: "Baccalaureate in Mathematics" },
        // Add more events as needed
    ];
    return (
        <div id="home" className='w-full section-content h-auto lg:h-screen flex flex-col  lg:flex-row  py-[65px]'>
            <div className="w-full h-full flex-col  flex  gap-3">
                <h1 className='text-4xl'>Academy </h1>
                <div className="w-full px-16">
                <Timeline events={events}/>
                </div>
               
            </div>


        </div>
    )
}





export default Formations