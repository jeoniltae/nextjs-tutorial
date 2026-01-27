'use client';

import { useState } from "react";

// ✅ 반드시 "use client" 가 필요한 경우
// useState / useEffect
// onClick / onChange
// 모달 / 드롭다운
// 탭 UI
// 슬라이더
// 검색 필터
// form 입력

interface Post {
  id: number;
  title: string;
}

interface Props {
  posts: Post[];
}

const PostsClient = ({ posts }: Props) => {
  const [filter, setFilter] = useState("");

  const filtered = posts.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="검색.." value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filtered.map(c => {
          return <li key={c.id}>{c.title}</li>
        })}
      </ul>
    </div>
  )
}

export default PostsClient;
