import NavigateButton from "./components/NavigateButton";

// | 구분           | 방식            | 예시                           | 설명                  |
// | ------------ | ------------- | ---------------------------- | ------------------- |
// | **정적 라우트**   | 파일 기반         | `app/about/page.tsx`         | URL과 폴더명 1:1 매칭     |
// | **동적 라우트**   | 변수 기반         | `app/products/[id]/page.tsx` | URL 파라미터에 따라 페이지 생성 |
// | **네비게이션**    | `<Link>`      | `<Link href="/about">`       | 클라이언트 사이드 이동        |
// | **프로그래밍 이동** | `useRouter()` | `router.push("/path")`       | 코드로 페이지 이동          |


export default function Home() {
  return (
    <main>
      <h1>Welcome 👋</h1>
      <p>Click below to explore our products!</p>
      <NavigateButton />
    </main>
  );
}
