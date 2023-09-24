import { useState, useEffect } from "react";

const useSingleProduct = (id) => {
  console.log(id);
  const [singleProduct, setSingleProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((res) => setSingleProduct(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { singleProduct, error, loading };
};

export default useSingleProduct;
