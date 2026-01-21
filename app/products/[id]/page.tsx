interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Params {
  params: { id: string };
};

const ProductDetailPage = async ({ params }: Params) => {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store', // SSR로 매 요청마다 데이터 새로 fetch
  });
  const product: Product = await res.json();

  return (
    <main>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <strong>{product.price}</strong>
    </main>
  );
};

export default ProductDetailPage;
