import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import Modal from "../Modal/Modal";

function PostList( {isModalOpen, onCloseModal}) {

    return (
        <>
            { isModalOpen &&<Modal isOpen={isModalOpen} onClose={onCloseModal} >
            <NewPost  />
            </Modal>}
            <ul className={styles.posts}>
                <Post  />
                <Post author="bonny" body="says lets go" />
            </ul >
        </>
    )
}

export default PostList;