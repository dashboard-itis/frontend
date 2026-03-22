import styles from "./Sidebar.module.css";
import SidebarInfoCard from "./SidebarInfoCard";
import SidebarButton from "../admin-sidebar/SidebarButton";

const Sidebar = () => {
    const ratingPlace: number = 5;
    const averageScore: number = 4.7;

    return (
        <div className={styles.sidebar}>
            <SidebarInfoCard
                label="Место в рейтинге:"
                value={ratingPlace}
            />

            <SidebarInfoCard
                label="Ваш средний балл:"
                value={averageScore}
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