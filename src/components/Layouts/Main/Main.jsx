import React from 'react'
import './Main.css'
import PortafolioSection from '../../Ul/PortafolioSection/Portafolio';
import imageReact from '../../../../public/images/react.png'
import imageNode from '../../../../public/images/nodejs.png'
import imageMongodb from '../../../../public/images/mongodb.png'
import imageJava from '../../../../public/images/java.png'
import ProgressBar from "@ramonak/react-progress-bar";


const Main = () => {
    const projectData = [
        {
            title: "ridex",
            description: "Descripción  ",
            link: "Ir al proyecto",
            projectUrl: "",
            imageUrl: "../../../../public/images/hero-banner.jpg",
        },
        {
            title: "market website",
            description: "Descripción ",
            link: "Ir al proyecto",
            projectUrl: "",
            imageUrl: "../../../../public/images/hero-banners.jpg",
        },
        {
            title: "car _website",
            description: "Descripción",
            link: "Ir al proyecto",
            projectUrl: "",
            imageUrl:"../../../../public/images/services-5.png",
        },
        {
            title: "Portafolio",
            description: "Descripción",
            link: "Ir al proyecto",
            projectUrl: "",
            imageUrl: "../../../../public/images/car-2.jpg",
        },
        
    ];
    const referenceData = [
        {
            name: "Nombre ",
            position: "Cargo ",
            phone: "123456789",
            email: "@example.com",
        },
        {
            name: "Nombre",
            position: "Cargo ",
            phone: "987654321",
            email: "@example.com",
        },
        {
            name: "Nombre ",
            position: "Cargo ",
            phone: "987654321",
            email: "@example.com",
        },
    ];
    return (
        <main className='main'>
            
            <PortafolioSection id="#perfil" title="Perfil" hasBorder={true} progressValue="100" height="5px">
                <href />

            </PortafolioSection>
            <p className='parrafo-perfil'>
            El Lorem Ipsum fue concebido como un texto de relleno, formateado de una ciertamanera para permitir la presentación de elementos gráficos en documentos, sinnecesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunirlos diseños y la forma del contenido antes de que el contenido se haya creado, dandoal diseño y al proceso de producción más libertad.
            </p>

            <PortafolioSection id="proyectos" title="Proyectos" hasBorder={false} progressValue="100" height="5px">
            </PortafolioSection>
            <div className="project-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project">
                        <div className="image-container">
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="content-container">
                            <h2 className='titulo-h2'>{project.title}</h2>
                            <p className='description'>{project.description}</p>
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <button className='button-link'>{project.link}</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <PortafolioSection id="Referencias" title="Referencias" hasBorder={true} progressValue="100" height="5px">
            </PortafolioSection>

            <div className="reference-container">
                {referenceData.map((reference, index) => (
                    <div key={index} className="reference">
                        <div className='reference-texto'>
                            <p>Nombre: {reference.name}</p>
                            <p>Cargo: {reference.position}</p>
                            <p>Teléfono: {reference.phone}</p>
                            <p>Email: {reference.email}</p>
                        </div>
                    </div>
                ))}
            </div>
                
            <PortafolioSection id="experiencia" title="Experiencia" hasBorder={false} progressValue="0" height="5px">
            </PortafolioSection>
            <div className='contenedor-image'>
            <div className='image-react'>
                <img src={imageReact} alt="" />
                
                <ProgressBar completed={70} className='progress-bar-linea'/>
                <h2 className='react-h2'>React</h2>
            </div>
            <div className='image-react'>
                <img src={imageNode} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea'/>
                <h2 className='react-h2'>Nodejs</h2>
            </div>
            <div className='image-react'>
                <img src={imageMongodb} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea' />
                <h2 className='react-h2'>Mongodb</h2>
            </div>
            <div className='image-react'>
                <img src={imageJava} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea'/>
                <h2 className='react-h2'>Java</h2>
            </div>
            </div>
        </main>
    )
}

export default Main