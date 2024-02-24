import styles from "./NewPost.module.css"
import { useState } from "react";

function NewPost({  onSubmit }) {
   
    const [authorName, setAuthorName] = useState("");
    const [bodyText, setBodyText] = useState("");

    const authorChangeHandler = (event) => {
        setAuthorName(event.target.value)
    };

    const bodyChangeHandler = (event) => {
        setBodyText(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const postData = ({
            author: authorName,
            body: bodyText
        });

        console.log(postData)
        setAuthorName("")
        setBodyText("")
        console.log(bodyText, authorName)
    }

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name"> Your name</label>
                    <input type="text" id="name" placeholder="Ett placeholder namn..." required onChange={authorChangeHandler} />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        required rows={3}
                        placeholder={'Det här är en placeholder...'}
                        onChange={bodyChangeHandler} />
                </p>
                <button type="button"></button>
                <button type="submit">Create post </button>

            </form>
        )
    }

export default NewPost
