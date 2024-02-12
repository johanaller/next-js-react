import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";

function PostList() {
    const [bodyText, setBodyText] = useState("");
    const changeBodyHandler = (event) => {
        setBodyText(event.target.value)
    };

    const [authorName, setAuthorName] = useState("");
    const changeAuthorHandler = (event) => {
        setAuthorName(event.target.value)
    };

    return (
        <>
            <Modal>
                <NewPost  onAuthorChange={changeAuthorHandler} onBodyChange={changeBodyHandler} />
            </Modal>
            <ul className={styles.posts}>
                <Post author={authorName} body={bodyText} />
                <Post author="bonny" body="says lets go" />
                <Post author="conny" body="says lets roll" />
                <Post author="sonny" body="says ive got a ponny" />
            </ul >
        </>
    )
}

export default PostList;