import { useParams } from "react-router";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/productServices";
import useAPIStatus from "../../hooks/useAPIStatus";
import PageWrapper from "../../components/pageWrapper";

const Product = () => {
  const { productId } = useParams();
  const { isDone, isError, isLoading, setStatus } = useAPIStatus();
  const [product, setProduct] = useState(null);

  const showProduct = isDone && !!product;
  const noProduct = isDone && !product;

  const fetchProduct = async () => {
    try {
      setStatus("loading");
      const res = await getProduct({ productId });
      if (res) {
        setProduct(res);
      }
      setStatus("done");
    } catch (e) {
      const { cause } = e;
      if (cause && cause.status == 404) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);
  return (
    <PageWrapper id={`prodcut-page-${productId}`} title="Product">
      {isLoading && <h2>Loading....</h2>}
      {isError && <h2>Something Went wrong</h2>}
      {noProduct && <h2>Product Not Available</h2>}
      {showProduct && (
        <div>
          <h1>{product.title}</h1>
          <h3>{product.price}Rs</h3>
        </div>
      )}
    </PageWrapper>
  );
};

export default Product;
