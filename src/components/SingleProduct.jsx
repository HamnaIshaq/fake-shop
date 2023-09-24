import { useState } from "react";

const SingleProduct = ({
  id,
  image,
  title,
  description,
  price,
  rate,
  cart,
  setCart,
  onClickAddToCart,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const disabled = productQuantity === 1 ? true : false;

  const onClickDecrementProductQuantity = () => {
    setProductQuantity(productQuantity - 1);
  };

  const onClickIncrementProductQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  return (
    <div>
      <img style={{ width: "100px" }} src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Rating: {rate} / 5.0 </p>
      <div>
        <button
          type="button"
          disabled={disabled}
          onClick={onClickDecrementProductQuantity}
        >
          -
        </button>
        <span data-testid="product-quantity">{productQuantity}</span>
        <button type="button" onClick={onClickIncrementProductQuantity}>
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() =>
            onClickAddToCart(id, image, title, price, productQuantity)
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
