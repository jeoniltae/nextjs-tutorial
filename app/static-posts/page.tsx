interface Post {
  id: number;
  title: string;
};

const StaticPostsPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache', // SSG (서버에서 데이터 생성 후 캐시, 기본값)
  });

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>🧱 Static Generated Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p>이 데이터는 빌드 시점에 생성된 정적 페이지입니다.</p>
    </main>
  )
}

export default StaticPostsPage;
