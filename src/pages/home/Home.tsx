import { Grid, Typography, Pagination, Box } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Favorite from "../../components/favorite/Favorite";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productsList/ProductsList";
import { FavoriteContext } from "../../contexts/FavoriteContext";

const Home = () => {
  const { state } = useContext(FavoriteContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(1);
  const getApi = (params: { queryKey: any }) => {
    return axios.get(
      `https://rickandmortyapi.com/api/character/?page=${params.queryKey[4]}`,
      {
        params: {
          name: params.queryKey[1],
          status: params.queryKey[2],
          gender: params.queryKey[3],
        },
      }
    );
  };

  const { data, error, status } = useQuery(
    [
      "getQuery",
      searchParams.get("name"),
      searchParams.get("status"),
      searchParams.get("gender"),
      pageNum,
    ],
    getApi
  );
  return (
    <Grid container>
      <Grid item xs={2.5} minHeight={"100vh"}>
        <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      </Grid>
      <Grid item xs={state.favoriteList.length > 0 ? 7 : 9.5}>
        {status === "success" && (
          <>
            <ProductList data={data} />
            <Box display={"flex"} flexDirection={"row"} justifyContent="center">
              <Pagination
                size="large"
                sx={{
                  display: "inline-block",
                  padding: "20px 0px",
                }}
                page={pageNum}
                count={data?.data.info.pages}
                onChange={(event: React.ChangeEvent<unknown>, page: number) =>
                  setPageNum(page)
                }
              />
            </Box>
          </>
        )}
        {status === "loading" && (
          <Typography variant="body1" textAlign={"center"}>
            ...loading
          </Typography>
        )}
        {status === "error" && error instanceof Error && (
          <Typography variant="body1" textAlign={"center"}>
            {error.message}
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={2.5}
        m={0}
        display={state.favoriteList.length > 0 ? "block" : "none"}
      >
        <Favorite />
      </Grid>
    </Grid>
  );
};

export default Home;
