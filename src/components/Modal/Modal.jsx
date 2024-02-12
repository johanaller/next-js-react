import styles from "./Modal.module.css"

function Modal({ children }) {
    return (
        <>
            <div className={styles.backdop}>
                <dialog open className={styles.modal}>{children}</dialog>
                Hello from modal
            </div>
        </>
    )
}

export default Modal