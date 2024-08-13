import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>Doc.Processor</h1>
            </div>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <div className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}></div>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
                <Link to="/" className={styles.navLink} onClick={toggleMenu}>Inicio</Link>
                <Link to="/login" className={styles.navLink} onClick={toggleMenu}>Iniciar Sesión</Link>
                <Link to="/signUp" className={styles.navLink} onClick={toggleMenu}>Registrarse</Link>
            </nav>
        </header>
    );
};

export default Header;


