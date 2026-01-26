import Link from "next/link";

export const dynamic = 'force-dynamic'; // 빌드 시 prerender 방지

interface Product {
  id: number;
  title: string;
  price: number;
};

const ProductPage = async () => {
  let products: Product[] = [];

  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=5', {
      next: { revalidate: 3600 } // 1시간마다 재검증
    });

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status}`);
      return (
        <main>
          <h1>🛍 Products</h1>
          <p>제품을 불러오는 중 오류가 발생했습니다.</p>
        </main>
      );
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Invalid content type:', contentType);
      return (
        <main>
          <h1>🛍 Products</h1>
          <p>제품을 불러오는 중 오류가 발생했습니다.</p>
        </main>
      );
    }

    const text = await res.text();
    if (!text || text.trim().startsWith('<!DOCTYPE')) {
      console.error('Received HTML instead of JSON');
      return (
        <main>
          <h1>🛍 Products</h1>
          <p>제품을 불러오는 중 오류가 발생했습니다.</p>
        </main>
      );
    }

    products = JSON.parse(text);
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <main>
        <h1>🛍 Products</h1>
        <p>제품을 불러오는 중 오류가 발생했습니다.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>🛍 Products</h1>
      <ul>{
        products.map(p => {
          return <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.title} - {p.price}</Link>
          </li>
        })
      }</ul>
    </main>
  )
}

export default ProductPage;
