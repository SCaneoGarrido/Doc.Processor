import React from "react";
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    return (
        <div className={styles.formContainer}>
            <video autoPlay muted loop className={styles.backgroundVideo}>
                <source src={require("./img/background.mp4")} type="video/mp4" />
            </video>
            <div className={styles.overlay}>
                <div className={styles.signUpFormContainer}>
                    <h3 className={styles.headerText}>
                        Registro Doc.Processor <i className="fas fa-robot"></i>
                    </h3>
                    <form className={styles.signUpForm}>
                        <div className={styles.fieldsContainer}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nombre Completo"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="username@xxxxx.com"
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirmar Contraseña"
                            />
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button type="submit" className={styles.signUpBtn}>
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
