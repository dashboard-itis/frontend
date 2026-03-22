import styles from "./Sidebar.module.css";
import SidebarButton from "../admin-sidebar/SidebarButton";
import SidebarInfoCard from "../student-sidebar/SidebarInfoCard";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const averageGroupScore: number = 4.3;

    return (
        <div className={styles.sidebar}>
            <SidebarInfoCard
                label="Средний балл группы:"
                value={averageGroupScore}
            />

            <SidebarButton
                text="Распределение оценок"
                active={location.pathname.includes("distribution")}
                onClick={() => navigate("/curator/distribution")}
            />

            <SidebarButton
                text="Динамика"
                active={location.pathname.includes("analytics")}
                onClick={() => navigate("/curator/analytics")}
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
}

export default Sidebar;