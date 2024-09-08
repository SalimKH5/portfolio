
import { useState } from "react";
interface IEMail {
    from_name: string,
    form_email: string,
    subject: string,
    message: string,
}


const FormContainer = () => {

    // const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<IEMail>({
        from_name: "",
        form_email: "",
        subject: "",
        message: "",
    });

    // const sendCustomEmail = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     emailsjs.init(import.meta.env.VITE_EMAIL_USER_ID)
    //     emailsjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    //         {
    //             form_email: formData.form_email,
    //             subject: formData.subject,
    //             from_name:formData.from_name,
    //             message:formData.message,

    //         },
    //     ).then((response: EmailJSResponseStatus) => {
    //         console.log({ response })
    //     }).catch((error: any) => {
    //         console.error({ error });
    //     }).finally(() => {
    //         setLoading(false);
    //     })
    // }
    return (
        <div id="contact" className='w-full section-content h-auto lg:h-screen flex flex-col    justify-center items-center text-center gap-10  py-16'>
            <div className="w-full flex items-start ">
                <h1 className="font-bold text-2xl">CONTACT ME</h1>
            </div>

            <p>I would love to hear about your project and how I can help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form  action="" className="w-full px-1 lg:px-8 flex flex-col gap-2">
                <input
                    value={formData.from_name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData((prev:IEMail) => ({ ...prev, from_name: e.target.value }))
                    }
                    type="text" className='w-full placeholder:text-slate-500 outline-none bg-transparent py-3 px-3 border-b-[1.5px] border-white' placeholder='Name' />
                <input 
                  value={formData.form_email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData((prev:IEMail) => ({ ...prev, form_email: e.target.value }))
                  }
                
                type="email" className='w-full outline-none placeholder:text-slate-500  bg-transparent py-3 px-3 border-b-[1.5px] border-white' placeholder='Email' />
                <input 
                  value={formData.subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData((prev:IEMail) => ({ ...prev, subject: e.target.value }))
                  }
                
                type="subject" className='w-full outline-none placeholder:text-slate-500  bg-transparent py-3 px-3 border-b-[1.5px] border-white' placeholder='subject' />
                <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData((prev:IEMail) => ({ ...prev, message: e.target.value }))
                    }
                    className='w-full outline-none bg-transparent placeholder:text-slate-500  py-3 px-3 border-b-[1.5px] border-white' placeholder='Message'>
                </textarea>
                <div className="w-full flex items-center justify-center">
                    <button

                        className='py-3 px-4 hover:bg-[#e3e3e3] hover:text-gray-500 hover:rounded-2xl'>
                        {
                            // loading ?
                            //     <Spin />
                            //     :
                            //     " SEND MESSAGE"
                        }


                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormContainer