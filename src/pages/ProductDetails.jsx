import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import SingleProduct from "../components/SingleProduct";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();

  const { singleProduct, error, loading } = useSingleProduct(id);

  if (error) return <p>A network error was encountered</p>;

  if (loading) return <p>Loading...</p>;
  /*const singleProduct = {
    id: "1",
    image: "some image",
    title: "title",
    description: "desc",
    price: "100",
    rate: "2",
  };*/

  const onClickAddToCart = (id, image, title, price, productQuantity) => {
    const obj = {
      id: id,
      image: image,
      title: title,
      price: price,
      quantity: productQuantity,
    };

    if (cart.length) {
      const duplicateProduct = cart.filter((product) => product.id === id);

      if (!duplicateProduct.length) {
        setCart([...cart, obj]);
        return;
      }

      const updatedCart = cart.map((product) => {
        if (product.id === obj.id) {
          return { ...product, quantity: product.quantity + obj.quantity };
        }
        return product;
      });
      setCart(updatedCart);
      return;
    }

    setCart([...cart, obj]);
    return;
  };

  return (
    <div>
      <SingleProduct
        id={singleProduct.id}
        image={singleProduct.image}
        title={singleProduct.title}
        description={singleProduct.description}
        price={singleProduct.price}
        //rate={singleProduct.rate}
        rate={singleProduct.rating.rate}
        cart={cart}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
    </div>
  );
};

export default ProductDetails;
