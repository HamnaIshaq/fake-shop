import { Link } from "react-router-dom";

import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, error, loading } = useProducts();
  console.log(products);
  if (error) return <p>A network error was encountered</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ border: "1px solid" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <p>{product.title}</p>
            <Link to={"/product/" + product.id}>View Details</Link>
            {/*<p>{product.description}</p>
            <p>Price: {product.price}</p>*/}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
