import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вход</h2>

            <input
                className={styles.input}
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className={styles.input}
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className={styles.button}
                onClick={() => navigate("/")}
            >
                Войти
            </button>

            <div className={styles.link}>
                Нет аккаунта?{" "}
                <span
                    className={styles.linkAction}
                    onClick={() => navigate("/register")}
                >
                    Зарегистрироваться
                </span>
            </div>
        </div>
    );
};

export default LoginForm;