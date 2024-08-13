import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2024 Doc.Processor. Todos los derechos reservados.</p>
                <p>Hecho con ❤️ por Sebastián Caneo</p>
            </div>
        </footer>
    );
};

export default Footer;
