import { Grid, Typography, Pagination, Box } from "@mui/material";
import axios from "axios";
import { useState, useContext, ChangeEvent, FC } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Favorite from "../../components/favorite/Favorite";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productsList/ProductsList";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { SearchParams } from "../../contexts/SearchParamsContextProvider";

const Home: FC = () => {
  const { searchParams } = useContext(SearchParams);
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
    <Box>
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
              onChange={(e: ChangeEvent<unknown>, page: number) =>
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
    </Box>
  );
};

export default Home;
