
import Link from "next/link";

const Post = ({post}) => {
    return (
        <div className='item'>
          <h3 className='item-sub'>{post.title}</h3>
          <p className='item-title'>{post.body}</p>
          <Link className="nav-link !text-amber-500/50 border" href={`/post/` + post.id}>Подробнее</Link>
        </div>
    )
}

export default Post