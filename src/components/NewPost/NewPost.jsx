import styles from "./NewPost.module.css"

function NewPost({ onAuthorChange, onBodyChange }) {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="name"> Your name</label>
                <input type="text" id="name" placeholder="Ett placeholder namn..." required onChange={onAuthorChange} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea 
                    id="body" 
                    required rows={3} 
                    placeholder={'Det här är en placeholder...'} 
                    onChange={onBodyChange} />
            </p>
        </form>
    )
}

export default NewPost
