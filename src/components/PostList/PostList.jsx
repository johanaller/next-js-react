import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";

function PostList() {
    
    const [authorName, setAuthorName] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const changeAuthorHandler = (event) => {
        setAuthorName(event.target.value)
    };

    const changeBodyHandler = (event) => {
        setBodyText(event.target.value)
    };

    const closeModalHandler = () => {
        // Call the onClose function when the backdrop is clicked
        console.log("onClose clicked")
        setIsModalOpen(false); 
    };

    return (
        <>
            { isModalOpen &&<Modal isOpen={isModalOpen} onClose={closeModalHandler}>
                <NewPost onAuthorChange={changeAuthorHandler} onBodyChange={changeBodyHandler} />
            </Modal>}
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