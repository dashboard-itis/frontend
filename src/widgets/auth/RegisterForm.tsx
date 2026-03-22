import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Регистрация</h2>

            <input
                className={styles.input}
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <input
                className={styles.input}
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                className={styles.input}
                placeholder="Отчество"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
            />

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

            <input
                className={styles.input}
                type="password"
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
                className={styles.button}
                onClick={() => {
                    if (password !== confirmPassword) {
                        alert("Пароли не совпадают");
                        return;
                    }

                    // потом тут будет регистрация
                    navigate("/login");
                }}
            >
                Зарегистрироваться
            </button>

            <div className={styles.link}>
                Уже есть аккаунт?{" "}
                <span
                    className={styles.linkAction}
                    onClick={() => navigate("/login")}
                >
                    Войти
                </span>
            </div>
        </div>
    );
};

export default RegisterForm;