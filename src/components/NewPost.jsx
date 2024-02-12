import styles from "./NewPost.module.css"

function NewPost({ changeBodyHandler, changeAuthorHandler }) {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} placeholder={'Det här är en placeholder...'} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name"> Your name</label>
                <input type="text" id="name" placeholder="Ett placeholder namn..." required onChange={changeAuthorHandler} />
            </p>
        </form>
    )
}

export default NewPost


// import React from "react";
// import styles from "./NewPost.module.css";
// import { useState } from "react";

// function NewPost({ changeBodyHandler, changeAuthorHandler }) {
//     const [modalOpen, setModalOpen] = useState(false);

//     const toggleModal = () => {
//         setModalOpen(!modalOpen);
//     };

//     const closeModal = () => {
//         setModalOpen(false);
//     };

//     return (
//         <div>
//             <button onClick={toggleModal}>Open Modal</button>
//             {modalOpen && (
//                 <div className={styles.modal}>
//                     <div className={styles.modalContent}>
//                         <span className={styles.close} onClick={closeModal}>&times;</span>
//                         <form className={styles.form}>
//                             <p>
//                                 <label htmlFor="body">Text</label>
//                                 <textarea id="body" required rows={3} placeholder={"Det här är en placeholder..."} onChange={changeBodyHandler} />
//                             </p>
//                             <p>
//                                 <label htmlFor="name"> Your name</label>
//                                 <input type="text" id="name" placeholder="Ett placeholder namn..." required onChange={changeAuthorHandler} />
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default NewPost;