import styles from "./NewPost.module.css"
import { useState } from "react";

function NewPost() {

    const [text, setText] = useState("");

    const keyDownHandler = (event) => {
        console.log("Key pressed:", event.key);
        setText(event.target.value)
    };

    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onKeyDown={keyDownHandler} />
            </p>
            <p>
                <label htmlFor="name"> Your name</label>
                <input type="text" id="name" />
            </p>
        </form>
    )
}

export default NewPost