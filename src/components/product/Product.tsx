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

const CardContentNoPadding = styled(CardContent)(`
  padding: 8px;
  &:last-child {
    padding-bottom: 0;
  }
`);
type ProductProps = {
  item: any;
};
const Product = (props: ProductProps) => {
  const { state, dispatch } = useContext(FavoriteContext);

  return (
    <Card>
      <Link to={`/${props.item.id}`}>
        <CardMedia
          component="img"
          height="180"
          image={props.item.image}
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
            {props.item.name}
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              {props.item.gender}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                color:
                  props.item.status === "Dead"
                    ? "red"
                    : props.item.status === "Alive"
                    ? "green"
                    : "black",
              }}
            >
              {props.item.status}
            </Typography>
          </Stack>
        </CardContentNoPadding>
      </Link>
      <IconButton
        color="error"
        onClick={() =>
          dispatch({
            type: state.favoriteList.find(
              (object) => object.id === props.item.id
            )
              ? "REMOVE"
              : "ADD",
            payload: props.item,
          })
        }
      >
        {state.favoriteList.find((object) => object.id === props.item.id) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </Card>
  );
};

export default Product;
