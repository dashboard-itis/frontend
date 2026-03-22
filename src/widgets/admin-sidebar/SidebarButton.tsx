import styles from "./SidebarButton.module.css";

type Props = {
    text: string;
    onClick?: () => void;
    active?: boolean;
    variant?: "default" | "danger";
};

function SidebarButton({
                           text,
                           onClick,
                           active = false,
                           variant = "default",
                       }: Props) {
    return (
        <button
            onClick={onClick}
            className={`
        ${styles.button}
        ${active ? styles.active : ""}
        ${variant === "danger" ? styles.danger : ""}
      `}
        >
            {text}
        </button>
    );
}

export default SidebarButton;