import { Grid, Box } from "@mui/material";
import Product from "../product/Product";

type ProductsListProps = {
  data: any;
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
      
    </Box>
  );
};
export default ProductList;
