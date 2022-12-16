import { Stack } from "@mui/material";
import Favorite from "../../components/favorite/Favorite";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productsList/ProductsList";

const Home = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Filter />
      <ProductList />
      <Favorite />
    </Stack>
  );
};

export default Home;
