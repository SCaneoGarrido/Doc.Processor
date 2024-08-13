import React, { useState, useRef,useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

// Importación de imágenes y video
import Imagen1 from './img/Imagen1.jpeg';
import Imagen2 from './img/Imagen2.jpeg';
import Imagen3 from './img/Imagen3.jpeg';
import VisionImage from './img/vision.jpeg';
import SpeechImage from './img/speech.jpeg';
import SearchImage from './img/search.jpeg';
import Video1 from './video/hero-background1.mp4';
import Video2 from './video/hero-background2.mp4';
import Video3 from './video/hero-background3.mp4';
import Video4 from './video/hero-background4.mp4';

// Importación de imágenes para la sección AiML
import AiImageML from './img/ai-ml.jpeg'; // Reemplaza con la imagen adecuada
import AiImageAI from './img/ai-ai.jpeg'; // Reemplaza con la imagen adecuada


const videos = [Video1, Video2, Video3, Video4];

const HomePage = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
    
        const handleEnded = () => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                setTransitioning(false);
            }, 1000)
        };
    
        const playVideo = async () => {
            try {
                await videoElement.play(); // Espera a que el video comience a reproducirse
            } catch (error) {
                console.error("Error al intentar reproducir el video:", error);
            }
        };
    
        videoElement.addEventListener('ended', handleEnded);
    
        // Cargar y reproducir el nuevo video
        videoElement.load(); // Cargar el nuevo video
        playVideo(); // Intentar reproducir el video
    
        return () => {
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [currentVideoIndex]);


    return (
        <div className={styles.homePage}>
            <Header />
            <section className={styles.heroSection}>
                <video
                    key={currentVideoIndex} // Añade la clave para forzar el re-renderizado
                    autoPlay
                    muted
                    className={styles.backgroundVideo}
                    ref={videoRef}
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className={styles.transitionOverlay} style={{ opacity: transitioning ? 1 : 0 }}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Bienvenido a Doc.Processor</h1>
                    <p className={styles.heroSubtitle}>La solución definitiva para tus tareas académicas</p>
                    <button className={styles.getStartedBtn}>Empieza Ahora</button>
                </div>
            </section>
            <div className={styles.sectionWrapper}>
                <section className={styles.AiMLsection}>
                    <div className={styles.AiMLsectionContent}>
                        <div className={styles.AiMLContentItem} data-aos="fade-left">
                            <div className={styles.textContent}>
                                <h2>Inteligencia Artificial</h2>
                                <p>
                                    La Inteligencia Artificial (IA) es una rama de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.
                                    Esto incluye aprendizaje, razonamiento y auto-corrección. La IA utiliza algoritmos para procesar datos y tomar decisiones, simulando aspectos de la cognición humana.
                                </p>
                            </div>
                            <img src={AiImageAI} alt="Inteligencia Artificial" className={styles.imageContent} />
                        </div>
                        <div className={styles.AiMLContentItem} data-aos="fade-right">
                            <div className={styles.textContent}>
                                <h2>Machine Learning</h2>
                                <p>
                                    El Machine Learning (ML) es un subcampo de la IA que se centra en el desarrollo de algoritmos que permiten a las máquinas aprender de datos y hacer predicciones o decisiones sin ser programadas explícitamente.
                                    Utiliza técnicas como el deep learning, donde redes neuronales profundas analizan grandes volúmenes de datos para mejorar la precisión de las predicciones.
                                </p>
                            </div>
                            <img src={AiImageML} alt="Machine Learning" className={styles.imageContent} />
                        </div>
                    </div>
                </section>
                <section className={styles.benefitsSection}>
                    <div className={styles.benefitsExplanation} data-aos="fade-up">
                        <h2>Beneficios de Usar Doc.Processor</h2>
                        <p>
                            Doc.Processor te ayuda a simplificar y automatizar tus tareas académicas. Gracias a nuestras herramientas basadas en inteligencia artificial de Azure, puedes ahorrar tiempo, mejorar tu eficiencia en el estudio y acceder a nuestros servicios en cualquier momento y desde cualquier dispositivo.
                        </p>
                    </div>

                    <div className={styles.benefits}>
                        <div className={styles.benefit} data-aos="fade-up" data-aos-delay="100">
                            <h3 className={styles.benefitTitle}>Ahorra Tiempo</h3>
                            <img src={Imagen1} alt="Ahorra Tiempo" className={styles.imgContent} />
                            <p className={styles.benefitDescription}>
                                Automatiza tareas manuales y realiza resúmenes, transcripciones y conversiones en menos tiempo. Nuestro sistema está diseñado para ayudarte a ser más productivo en tus estudios.
                            </p>
                        </div>
                        <div className={styles.benefit} data-aos="fade-up" data-aos-delay="200">
                            <h3 className={styles.benefitTitle}>Eficiencia Mejorada</h3>
                            <img src={Imagen2} alt="Eficiencia Mejorada" className={styles.imgContent} />
                            <p className={styles.benefitDescription}>
                                Aprovecha la inteligencia artificial de Azure para obtener resultados precisos en tareas complejas. Nuestro sistema te brinda resultados rápidos y de alta calidad, optimizando tus esfuerzos.
                            </p>
                        </div>
                        <div className={styles.benefit} data-aos="fade-up" data-aos-delay="300">
                            <h3 className={styles.benefitTitle}>Acceso en Cualquier Momento</h3>
                            <img src={Imagen3} alt="Acceso en Cualquier Momento" className={styles.imgContent} />
                            <p className={styles.benefitDescription}>
                                Con nuestra plataforma basada en la nube, puedes acceder a nuestras herramientas desde cualquier lugar. Ya sea que estés en casa o en movimiento, siempre tendrás acceso a tus recursos.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.howItWorksSection}>
                    <div className={styles.howItWorksExplanation} data-aos="fade-up">
                        <h2>Cómo Funciona Doc.Processor</h2>
                        <p>
                            Doc.Processor utiliza tecnologías avanzadas de Azure para ofrecerte soluciones de procesamiento de texto y datos. Desde análisis de imágenes hasta transcripción de audio, nuestras herramientas están diseñadas para integrarse fácilmente en tu flujo de trabajo académico.
                        </p>
                    </div>

                    <div className={styles.howItWorks}>
                        <div className={styles.step} data-aos="fade-up" data-aos-delay="100">
                            <img src={VisionImage} alt="Visión Artificial" className={styles.stepImage} />
                            <h3 className={styles.stepTitle}>Visión Artificial</h3>
                            <p className={styles.stepDescription}>
                                Utilizamos los modelos de visión artificial de Azure para analizar imágenes, detectar objetos, extraer texto y reconocer patrones con alta precisión. Esta tecnología te ayuda a obtener información relevante de tus imágenes rápidamente.
                            </p>
                        </div>
                        <div className={styles.step} data-aos="fade-up" data-aos-delay="200">
                            <img src={SpeechImage} alt="Reconocimiento de Voz" className={styles.stepImage} />
                            <h3 className={styles.stepTitle}>Reconocimiento de Voz</h3>
                            <p className={styles.stepDescription}>
                                La funcionalidad de reconocimiento de voz de Azure convierte audios en texto de forma eficiente. Ideal para transcribir conferencias, reuniones y más, facilitando la captura y análisis de la información hablada.
                            </p>
                        </div>
                        <div className={styles.step} data-aos="fade-up" data-aos-delay="300">
                            <img src={SearchImage} alt="Búsqueda de Información" className={styles.stepImage} />
                            <h3 className={styles.stepTitle}>Búsqueda de Información</h3>
                            <p className={styles.stepDescription}>
                                Azure Search optimiza la búsqueda de información en grandes volúmenes de datos, proporcionando resultados rápidos y relevantes para tus consultas. Esto te permite encontrar la información que necesitas de manera eficiente.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.comienzaYaSection}>
                    <h2 className={styles.comienzaYaTitle}>¡Comienza Ya!</h2>
                    <p>Descubre todas las posibilidades que Doc.Processor puede ofrecerte. Explora nuestras herramientas y optimiza tu experiencia académica.</p>
                    <div className={styles.comienzaYaCollage}>
                        <div className={styles.comienzaYaImageContainer}>
                            <img src={Imagen1} alt="Posibilidad 1" className={styles.comienzaYaImage} />
                            <div className={styles.comienzaYaImageOverlay}>
                                <p className={styles.comienzaYaOverlayText}>Automatización de tareas</p>
                            </div>
                        </div>
                        <div className={styles.comienzaYaImageContainer}>
                            <img src={Imagen2} alt="Posibilidad 2" className={styles.comienzaYaImage} />
                            <div className={styles.comienzaYaImageOverlay}>
                                <p className={styles.comienzaYaOverlayText}>Mejora de eficiencia</p>
                            </div>
                        </div>
                        <div className={styles.comienzaYaImageContainer}>
                            <img src={Imagen3} alt="Posibilidad 3" className={styles.comienzaYaImage} />
                            <div className={styles.comienzaYaImageOverlay}>
                                <p className={styles.comienzaYaOverlayText}>Acceso desde cualquier lugar</p>
                            </div>
                        </div>
                        {/* Agrega más imágenes según sea necesario */}
                    </div>
                    <br />
                    <button className={styles.button89}>Comienza Ya</button>
                </section>


            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
