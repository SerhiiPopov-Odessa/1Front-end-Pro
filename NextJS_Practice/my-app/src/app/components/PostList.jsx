import Post from "./Post";

const PostList = ({ posts = []}) => {
    return (
        <div className="users-list">
            {/* !todos.length */posts.length === 0 && <h3>Posts list is empty</h3>}
            {posts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    )
}


export default PostList