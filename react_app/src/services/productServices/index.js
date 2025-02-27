import { api } from "..";

export const getProducts = async () => {
  const res = await api({
    endpoint: "public/randomproducts",
  });
  return res;
};

export const getProduct = async ({ productId }) => {
  const res = await api({
    endpoint: `public/randomproducts/${productId}`,
  });
  return res;
};
