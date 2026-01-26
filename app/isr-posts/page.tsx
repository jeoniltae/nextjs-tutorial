interface Post {
  id: number;
  title: string;
};

export const revalidate = 10; // 10초마다 새 데이터로 갱신

const ISRPostsPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10,
    }
  });

  const posts: Post[] = await res.json();

  // 현재 시간을 구합니다 (서버에서 실행되는 시점의 시간)
  const time = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>⏳ ISR (Regenerated every 10s)</h1>
      <h2 style={{ color: 'red' }}>생성된 시간: {time}</h2>
      <ul>
        {
          posts.slice(0, 5).map((post) => {
            return <li key={post.id}>{post.title}</li>
          })
        }
      </ul>
      <p>이 페이지는 10초마다 자동으로 새 데이터를 반영합니다.</p>
    </main>
  )
}

export default ISRPostsPage;
