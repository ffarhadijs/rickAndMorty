import { Grid, Box } from "@mui/material";
import { FC } from "react";
import Product from "../product/Product";

interface IProductsListProps {
  data: {
    results: [IProductProps];
  };
}

interface IProps {
  data: IProductsListProps;
}

export interface IProductProps {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
}

const ProductList: FC<IProps> = ({ data }) => {
  return (
    <Box>
      <Grid container spacing={3} p={3}>
        {data.data.results.map((item) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={item.id}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ProductList;
