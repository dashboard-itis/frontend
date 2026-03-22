import styles from "./SidebarInfoCard.module.css";

type Props = {
    label: string;
    value?: number | string | null;
};

function SidebarInfoCard({ label, value }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>
                {value ?? "—"}
            </div>
        </div>
    );
}

export default SidebarInfoCard;