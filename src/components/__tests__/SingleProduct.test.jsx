/*
  1- on clicking "+" button, increment the product quantity (DONE)
  2- on clicking "-" button when quantity is 1 does not change quantity (DONE)
  3- on clicking "+" button and then clicking the "-" button makes the product quantity 1  (DONE)
  4- on clicking "add to cart" button, function to update cart with product data is called (DONE)
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SingleProduct from "../SingleProduct";

const product = {
  id: 1,
  image: "/image.jpg",
  title: "bracelet",
  description: "A colorful friendship bracelet",
  price: 100,
  rate: 2,
};
const cart = [];
const setCart = vi.fn();
const onClickAddToCart = vi.fn();

describe("Single Product component", () => {
  it("Make the quantity 2 on clicking '+' button", async () => {
    const user = userEvent.setup();

    render(
      <SingleProduct
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        rate={product.rate}
        cart={cart}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
    );

    const incrementQuantityBtn = screen.getByRole("button", { name: "+" });

    await user.click(incrementQuantityBtn);

    expect(screen.getByTestId("product-quantity").textContent).toMatch("2");
  });

  it("The '-' button is unclickable when quantity is 1", async () => {
    const user = userEvent.setup();

    render(
      <SingleProduct
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        rate={product.rate}
        cart={cart}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
    );

    const decrementQuantityBtn = screen.getByRole("button", { name: "-" });

    await user.click(decrementQuantityBtn);

    expect(screen.getByTestId("product-quantity").textContent).toMatch("1");
  });

  it("on clicking '+' button will make quantity to 2 and then clicking '-' button will change the quantity to 1", async () => {
    const user = userEvent.setup();

    render(
      <SingleProduct
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        rate={product.rate}
        cart={cart}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
    );

    const decrementQuantityBtn = screen.getByRole("button", { name: "-" });
    const incrementQuantityBtn = screen.getByRole("button", { name: "+" });

    await user.click(incrementQuantityBtn);

    expect(screen.getByTestId("product-quantity").textContent).toMatch("2");

    await user.click(decrementQuantityBtn);

    expect(screen.getByTestId("product-quantity").textContent).toMatch("1");
  });

  it("on clicking 'Add to cart' button, function to add product to cart will be called", async () => {
    const user = userEvent.setup();

    render(
      <SingleProduct
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        rate={product.rate}
        cart={cart}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
    );

    const addToCart = screen.getByRole("button", { name: "Add to cart" });

    await user.click(addToCart);

    expect(onClickAddToCart).toHaveBeenCalled(1);
  });
});
