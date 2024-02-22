import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";

function PostList( {isModalOpen, onCloseModal}) {
    
    const [authorName, setAuthorName] = useState("");
    const [bodyText, setBodyText] = useState("");

    const authorChangeHandler = (event) => {
        setAuthorName(event.target.value)
    };

    const bodyChangeHandler = (event) => {
        setBodyText(event.target.value)
    };


    return (
        <>
            { isModalOpen &&<Modal isOpen={isModalOpen} onClose={onCloseModal} >
                <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler} />
            </Modal>}
            <ul className={styles.posts}>
                <Post author={authorName} body={bodyText} />
                <Post author="bonny" body="says lets go" />
            </ul >
        </>
    )
}

export default PostList;