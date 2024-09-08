
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const CvPage = () => {
    return (
        <div className="w-full h-full max-w-sm sm:max-w-md md:max-w-5xl xl:max-w-6xl px-5 py-10 ">
            <object
                data="/CV Salim Khadir.pdf" // Replace with your PDF path or URL
                width="100%"
                type="application/pdf"
                height="100%"
                title="PDF Viewer"
                
            />

        </div>
    )
}

export default CvPage