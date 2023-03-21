import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface ProductDetailType {
  data: {
    data: {
      image: string;
      name: string;
      gender: string;
      status: string;
      species: string;
      location: {
        name: string;
      };
    };
  };
}
const ProductDetail: FC<ProductDetailType> = ({ data }) => {
  return (
    <Grid
      container
      sx={{
        marginX:"auto",
        width: { xs: "270px", sm: "max-content" },
        height: "auto",
        backgroundColor: "#F5F7FA",
      }}
    >
      <Grid item xs={12} sm={4}>
        <img
          src={data.data.image}
          alt={data.data.name}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} sx={{ backgroundColor: "" }}>
        <Stack flexDirection={"column"} p={2} rowGap={1}>
          <Typography variant="h6">{data.data.name}</Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                data.data.status === "Dead"
                  ? "red"
                  : data.data.status === "Alive"
                  ? "green"
                  : "black",
            }}
          >
            <Typography
              variant="body1"
              component={"span"}
              sx={{ fontWeight: "bold", color: "black" }}
            >
              status:
            </Typography>{" "}
            {data.data.status}
          </Typography>
          <Typography variant="body1">
            <Typography
              variant="body1"
              component={"span"}
              sx={{ fontWeight: "bold", color: "black" }}
            >
              gender:
            </Typography>{" "}
            {data.data.gender}
          </Typography>
          <Typography variant="body1">
            <Typography
              variant="body1"
              component={"span"}
              sx={{ fontWeight: "bold", color: "black" }}
            >
              location:
            </Typography>{" "}
            {data.data.location.name}
          </Typography>
          <Typography variant="body1">
            <Typography
              variant="body1"
              component={"span"}
              sx={{ fontWeight: "bold", color: "black" }}
            >
              species:
            </Typography>{" "}
            {data.data.species}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
