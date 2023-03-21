import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useContext, Fragment } from "react";
import { SearchParams } from "../../contexts/SearchParamsContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const statusFormControl = [
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
  { value: "Unknown", label: "Unknown" },
];

const genderFormControl = [
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
  { value: "Genderless", label: "Genderless" },
  { value: "Unknown", label: "Unknown" },
];

const Filter = ({
  setOpenDrawer,
}: {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { searchParams, setSearchParams } = useContext(SearchParams);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      searchParams.set(e.target.name, e.target.value);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  };
  const resetFiltersHandler = () => {
    if (searchParams.get("name")) {
      searchParams.delete("name");
    }
    if (searchParams.get("status")) {
      searchParams.delete("status");
    }
    if (searchParams.get("gender")) {
      searchParams.delete("gender");
    }
    setSearchParams(searchParams);
  };
  return (
    <Box
      p={"20px"}
      width="300px"
      height={"auto"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"30px"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid gray",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "center",
            color: "#434A54",
            fontWeight: "900",
          }}
        >
          Rick and Morty
        </Typography>
        <IconButton onClick={() => setOpenDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        <FormLabel id="name" sx={{ color: "#434A54", fontWeight: "bold" }}>
          Name
        </FormLabel>
        <TextField
          value={searchParams.get("name") || ""}
          onChange={changeHandler}
          name="name"
          aria-labelledby="name"
          variant={"outlined"}
          size={"small"}
          sx={{ bgcolor: "white" }}
          fullWidth
        />
      </Box>
      <Box>
        <FormLabel id="status" sx={{ color: "#434A54", fontWeight: "bold" }}>
          Status
        </FormLabel>
        <RadioGroup
          aria-labelledby="status"
          name="status"
          onChange={changeHandler}
        >
          {statusFormControl.map((item, index) => (
            <FormControlLabel
              key={index}
              sx={{ height: "30px" }}
              value={item.value}
              checked={searchParams.get("status") == item.value}
              control={<Radio size="small" />}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </Box>
      <Box>
        <FormLabel id="gender" sx={{ color: "#434A54", fontWeight: "bold" }}>
          Gender
        </FormLabel>
        <RadioGroup
          aria-labelledby="gender"
          name="gender"
          onChange={changeHandler}
        >
          {genderFormControl.map((item, index) => (
            <FormControlLabel
              key={index}
              sx={{ height: "30px" }}
              value={item.value}
              checked={searchParams.get("gender") === item.value}
              control={<Radio size="small" />}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </Box>
      <Button variant={"contained"} onClick={resetFiltersHandler}>
        Reset Filters
      </Button>
    </Box>
  );
};
export default Filter;
