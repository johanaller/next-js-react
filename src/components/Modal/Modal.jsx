import styles from "./Modal.module.css"

function Modal({ children, onClose, isOpen }) {
    const handleClose = () => {
        // Call the onClose function when the backdrop is clicked
        console.log("onClose clicked")
        onClose();
    };

    const handleModalClick = (event) => {
        // Prevent the click event from bubbling up to the backdrop
        event.stopPropagation();
    };

    return (
        <>
            {isOpen && (<div className={styles.backdrop} onClick={handleClose}>
                <dialog open className={styles.modal} onClick={handleModalClick}>{children}</dialog>
                Hello from modal
            </div>)}
        </>
    )
}

export default Modal