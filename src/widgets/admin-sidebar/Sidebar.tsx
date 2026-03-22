import SidebarButton from "./SidebarButton";
import styles from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.sidebar}>
            <SidebarButton
                text="Импорт данных"
                active={location.pathname.includes("/admin/import")}
                onClick={() => navigate("/admin/import")}
            />

            <SidebarButton
                text="Управление пользователями"
                active={location.pathname.includes("/admin/users")}
                onClick={() => navigate("/admin/users")}
            />

            <div className={styles.bottom}>
                <SidebarButton
                    text="Выйти из аккаунта"
                    variant="danger"
                    onClick={() => alert("Выход")}
                />
            </div>
        </div>
    );
};

export default Sidebar;