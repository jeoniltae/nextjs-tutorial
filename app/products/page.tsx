import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
};

const ProductPage = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const products: Product[] = await res.json();

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
