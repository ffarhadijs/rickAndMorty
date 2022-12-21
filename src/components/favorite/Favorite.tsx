import { FavoriteContext } from "../../contexts/FavoriteContext";
import { useContext } from "react";
import { Stack, Typography, Box } from "@mui/material";
const Favorite = () => {
  const { state } = useContext(FavoriteContext);
  return (
    <Box
      bgcolor={"#CCD1D9"}
      p={"20px"}
      height={"100%"}
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
      {state.favoriteList.map((item: any) => (
        <Stack
          key={item.id}
          width={"100%"}
          flexDirection="row"
          justifyContent={"start"}
          alignItems="center"
          sx={{
            backgroundColor: "#F5F7FA",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "60px", height: "100%", marginRight: "10px" }}
            src={item.image}
            alt={item.name}
          />
          <Typography variant={"body1"}>{item.name}</Typography>
        </Stack>
      ))}
    </Box>
  );
};
export default Favorite;
