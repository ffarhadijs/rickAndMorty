import { Stack, Typography } from "@mui/material";

type ProductDetailType = {
  data: any;
};
const ProductDetail = (props: ProductDetailType) => {
  return (
    <Stack
      flexDirection={"row"}
      sx={{
        height: "200px",
        width: "auto",
        backgroundColor: "#F5F7FA",
      }}
    >
      <img src={props.data.data.image} alt={props.data.data.name} />
      <Stack flexDirection={"column"} p={2} rowGap={1}>
        <Typography variant="h5">{props.data.data.name}</Typography>
        <Typography
          variant="body1"
          sx={{
            color:
              props.data.data.status === "Dead"
                ? "red"
                : props.data.data.status === "Alive"
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
          {props.data.data.status}
        </Typography>
        <Typography variant="body1">
          <Typography
            variant="body1"
            component={"span"}
            sx={{ fontWeight: "bold", color: "black" }}
          >
            gender:
          </Typography>{" "}
          {props.data.data.gender}
        </Typography>
        <Typography variant="body1">
          <Typography
            variant="body1"
            component={"span"}
            sx={{ fontWeight: "bold", color: "black" }}
          >
            location:
          </Typography>{" "}
          {props.data.data.location.name}
        </Typography>
        <Typography variant="body1">
          <Typography
            variant="body1"
            component={"span"}
            sx={{ fontWeight: "bold", color: "black" }}
          >
            species:
          </Typography>{" "}
          {props.data.data.species}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
