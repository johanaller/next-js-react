import styles from "./Modal.module.css"

function Modal({ children, onClose, isOpen }) {

    const handleModalClick = (event) => {
        // Prevent the click event from bubbling up to the backdrop
        event.stopPropagation();
    };

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <dialog open className={styles.modal} onClick={handleModalClick}>{children}</dialog>
        </div>
    )
}

export default Modal