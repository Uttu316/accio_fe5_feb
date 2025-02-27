import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router";
import { getProducts } from "../../services/productServices";
import useAPIStatus from "../../hooks/useAPIStatus";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { isDone, isError, isLoading, setStatus } = useAPIStatus();

  const hasProducts = isDone && products.length !== 0;
  const noProducts = isDone && products.length === 0;

  const fetchProducts = async () => {
    try {
      setStatus("loading");
      const res = await getProducts();
      if (res) {
        const data = res.data;
        setProducts(data);
      }
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.products_container}>
      <h2>Products</h2>
      {hasProducts && (
        <div className={styles.products}>
          {products.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className={styles.product}>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {noProducts && <h2>No Product Avaailable</h2>}
      {isError && <h2>Something went Wrong</h2>}
      {isLoading && <h2>Loading....</h2>}
    </div>
  );
};
export default Products;
