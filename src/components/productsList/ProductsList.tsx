import { Grid, Box, Pagination } from "@mui/material";
import Product from "../product/Product";

type ProductsListProps = {
  data: any;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const ProductList = (props: ProductsListProps) => {
  return (
    <Box>
      <Grid container spacing={3} p={3}>
        {props.data?.data.results.map((item: any) => (
          <Grid item sm={12} md={4} lg={3} key={item.id}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} flexDirection={"row"} justifyContent="center">
        <Pagination
          size="large"
          sx={{
            display: "inline-block",
            padding: "20px 0px",
          }}
          count={props.data?.data.info.pages}
          onChange={(event: React.ChangeEvent<unknown>, page: number) =>
            props.setPageNum(page)
          }
        />
      </Box>
    </Box>
  );
};
export default ProductList;
