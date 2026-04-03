
import Link from "next/link";

const PostId = ({post}) => {
    return (
        <div className='item'>
            
            <h2 className=' item-sub'>{post.title}</h2>
            <p className='item-title'>{post.body}</p>
            <strong>Avtor ID: {post.userId}</strong>
            <Link className="nav-link !text-amber-500/50 border" href='/'>Назад</Link>
        </div>
    )
}


export default PostId