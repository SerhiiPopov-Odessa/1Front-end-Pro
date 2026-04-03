
import PostList from "./components/PostList";
import { notFound } from "next/navigation";

async function fetchTodoAPI() {
  try {
    /* const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
      cache: 'no-store',
    }); */
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    /* if (res.status === 404) throw new Error('NOT_FOUND'); */

    if (res.status === 404) notFound(); // next function /////////////////////////
    
    if (!res.ok) throw new Error(`Failed to fetch post ${id}: ${res.statusText}`);
    
    const result = await res.json();
    return result;
  }
  catch (error) {
    throw error;
  }
};

export default async function Home() {
  const posts = await fetchTodoAPI();
  return (
    <section className="content">
      <h2 className='section-title break-words' >Loading posts from https://jsonplaceholder.typicode.com/posts </h2>
      <PostList posts={posts}/>
    </section>
  );
}
