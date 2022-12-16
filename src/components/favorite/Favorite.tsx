import { Box, Typography } from "@mui/material";

const Favorite = () => {
  return (
    <Box
      bgcolor={"#CCD1D9"}
      width={"300px"}
      minHeight={"100vh"}
      p={"20px"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"30px"}
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
        Favorites
      </Typography>
    </Box>
  );
};
export default Favorite;
