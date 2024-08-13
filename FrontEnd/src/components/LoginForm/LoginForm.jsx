import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { ReactComponent as LogoSVG } from "./img/icon_form.svg";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError("Por favor complete los campos.");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log("Inicio de sesión exitoso");
                // Maneja el éxito, por ejemplo, redirigiendo al usuario
                window.location.href = "/dashboard";
            } else {
                const data = await response.json();
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            setError("Error de red. Intenta nuevamente más tarde.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSignUp = (event) => {
        window.location.href = '/signUp'
    }
    
    return (
        <div className={styles.formContainer}>
            <video autoPlay muted loop className={styles.backgroundVideo}>
                <source src={require("./img/background2.mp4")} type="video/mp4" />
            </video>            
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <div className={styles.svgContainer}>
                    <LogoSVG className={styles.svg} />
                </div> 
                <h3 className={styles.headerText}>
                 Bienvenido 
            </h3>
            
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.fieldsContainer}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="username@xxxxx.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="passwd"
                        placeholder="*********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.whiteSpace}></div>
                
                   
                <div className={styles.buttonsContainer}>
                    <label>
                        <input type="checkbox" name="rememberme" id="remember-check" />
                        Recordarme
                    </label>
                    <button type="submit" className={styles.signIpBtn} disabled={isLoading}>
                        {isLoading ? "Cargando..." : "Ingresar"}
                    </button>
                    <button type="button" className={styles.signUpBtn} disabled={isLoading} onClick={handleSignUp}>
                        {isLoading ? "Cargando..." : "Registrarte"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
