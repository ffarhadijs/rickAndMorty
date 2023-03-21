import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Favorite from "../../components/favorite/Favorite";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import ProductDetail from "../../components/productDetail/ProductDetail";
import Box from "@mui/material/Box";

const ProductDetails = () => {
  const { state } = useContext(FavoriteContext);
  const params = useParams();
  const id = params?.id;

  const getProduct = (id: { queryKey: any[] }) => {
    return axios.get(
      `https://rickandmortyapi.com/api/character/${id.queryKey[1]}`
    );
  };

  const { data, error, status } = useQuery(["getProduct", id], getProduct);

  return (
    <Box marginX={"auto"} padding="20px">
      {status === "error" && error instanceof Error && (
        <Typography variant={"body1"} textAlign="center">
          {error.message}
        </Typography>
      )}
      {status === "success" && <ProductDetail data={data} />}
      {status === "loading" && (
        <Typography variant="body1" textAlign="center">
          loading...
        </Typography>
      )}
    </Box>
  );
};

export default ProductDetails;
