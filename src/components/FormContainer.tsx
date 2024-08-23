

const FormContainer = () => {
    return (
        <div id="contact" className='w-full section-content h-auto lg:h-screen flex flex-col    justify-center items-center text-center gap-10 mb-8 py-20'>
            <div className="w-full flex items-start py-2">
                <h1 className="font-bold text-2xl">CONTACT ME</h1>
            </div>

            <p>I would love to hear about your project and how I can help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form action="" className="w-full px-1 lg:px-8 flex flex-col gap-4">
                <input type="text" className='w-full outline-none bg-transparent py-3 border-b-[1.5px] border-white' placeholder='Name' />
                <input type="email" className='w-full outline-none bg-transparent py-3 border-b-[1.5px] border-white' placeholder='Email' />
                <textarea
                    rows={4}
                    className='w-full outline-none bg-transparent py-3 border-b-[1.5px] border-white' placeholder='Message'>
                </textarea>
                <div className="w-full flex items-center justify-center">
                    <button className='py-3 px-4 hover:bg-[#e3e3e3] hover:text-gray-500 hover:rounded-2xl'>SEND MESSAGE</button>
                </div>
            </form>
        </div>
    )
}

export default FormContainer