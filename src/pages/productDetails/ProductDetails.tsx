import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Favorite from "../../components/favorite/Favorite";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import ProductDetail from "../../components/productDetail/ProductDetail";

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
    <Grid container>
      <Grid
        item
        xs={3}
        sx={{
          backgroundColor: "#CCD1D9",
          p: "20px",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "center",
            pb: "20px",
            color: "#434A54",
            borderBottom: "1px solid gray",
            fontWeight: "900",
          }}
        >
          Rick and Morty
        </Typography>
      </Grid>
      <Grid item p={4} xs={6}>
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
      </Grid>
      <Grid
        item
        xs={3}
        minHeight={"100vh"}
        display={state.favoriteList.length > 0 ? "block" : "none"}
      >
        <Favorite />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
