import PostId from '@/app/components/PostId'
import { notFound } from 'next/navigation';

export async function generateMetadata ({params}) {
  const { id } = await params;
  const postInfo = await fetchTodoAPI(id)
  return{
    title: 'Статья - '+postInfo.title ,
    description: postInfo.body
  }
};

async function fetchTodoAPI(id) {
  try {
    /* const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id ,{
      cache: 'no-store',
    }); */
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id );

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

export default async function PostForId({ params }) {
  const { id } = await params;
  const post = await fetchTodoAPI(id);

  return (
    <section>
      <h1 className='section-title text-center' >Post id: {id} </h1>
      <PostId post={post} />
    </section>
  );
}
