export const dynamic = 'force-dynamic'; // SSR 강제 옵션
export const revalidate = 0; // ISR/SSG 비활성화

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // SSR (서버에서 매번 렌더링)
  });

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>📰 Server-Side Rendered Posts</h1>
      <ul>{
        posts.slice(0, 5).map((post) => {
          return <li key={post.id}><strong>{post.title}</strong><p>{post.body}</p></li>
        })
      }</ul>
    </main>
  );
};

export default PostsPage;
