import CartRow from "../components/CartRow";

const Cart = ({ cart }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Qty</th>
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {cart.map((product) => {
            return (
              <CartRow
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
