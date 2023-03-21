import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { useContext } from "react";
import { FC } from "react";
import { IProductProps } from "../productsList/ProductsList";

const CardContentNoPadding = styled(CardContent)(`
  padding: 8px;
  &:last-child {
    padding-bottom: 0;
  }
`);

interface IProps {
  item: IProductProps;
}
const Product: FC<IProps> = ({ item }) => {
  const { state, dispatch } = useContext(FavoriteContext);

  return (
    <Card>
      <Link to={`/${item.id}`}>
        <CardMedia
          component="img"
          height="180"
          image={item.image}
          alt="avatar"
        />
        <CardContentNoPadding>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              minHeight: "50px",
            }}
          >
            {item.name}
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              {item.gender}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                color:
                  item.status === "Dead"
                    ? "red"
                    : item.status === "Alive"
                    ? "green"
                    : "black",
              }}
            >
              {item.status}
            </Typography>
          </Stack>
        </CardContentNoPadding>
      </Link>
      <IconButton
        color="error"
        onClick={() =>
          dispatch({
            type: state.favoriteList.find((object) => object.id === item.id)
              ? "REMOVE"
              : "ADD",
            payload: item,
          })
        }
      >
        {state.favoriteList.find((object) => object.id === item.id) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </Card>
  );
};

export default Product;
