import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css"

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author="johnny " body="says hello" />
                <Post author="bonny" body="says lets go" />
                <Post author="conny" body="says lets roll" />
                <Post author="sonny" body="says ive got a ponny" />
            </ul>
        </>
    )
}

export default PostList;