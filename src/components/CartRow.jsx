const CartRow = ({ id, image, title, price, quantity, cart, setCart }) => {
  return (
    <tr key={id} data-testid="cart-row">
      <td>
        <img style={{ width: "150px" }} src={image} alt="" />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default CartRow;
