import { FavoriteContext } from "../../contexts/FavoriteContext";
import { useContext } from "react";
import { Stack, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Favorite = ({
  setOpenFavoriteDrawer,
}: {
  setOpenFavoriteDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { state } = useContext(FavoriteContext);
  return (
    <Box
      p={"20px"}
      height="auto"
      width="270px"
    >
      <Stack
        flexDirection={"row-reverse"}
        alignItems="center"
        justifyContent={"start"}
        sx={{ borderBottom: "1px solid gray", textAlign: "center" }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            color: "#434A54",
            fontWeight: "900",
            marginX: "auto",
          }}
        >
          Favorites
        </Typography>
        <IconButton onClick={() => setOpenFavoriteDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      {state.favoriteList.map((item: any) => (
        <Stack
          key={item.id}
          width={"100%"}
          flexDirection="row"
          justifyContent={"start"}
          alignItems="center"
          marginY={"20px"}
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
