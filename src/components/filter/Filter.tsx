import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

type FilterProps = {
  searchParams: URLSearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<any>>;
};

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

const Filter = (props: FilterProps) => {
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value) {
      props.searchParams.set(e.target.name, e.target.value);
      props.setSearchParams(props.searchParams);
    } else {
      props.setSearchParams({});
    }
  };
  const resetFiltersHandler = () => {
    if (props.searchParams.get("name")) {
      props.searchParams.delete("name");
    }
    if (props.searchParams.get("status")) {
      props.searchParams.delete("status");
    }
    if (props.searchParams.get("gender")) {
      props.searchParams.delete("gender");
    }
    props.setSearchParams(props.searchParams);
  };
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
        Rick and Morty
      </Typography>
      <Box>
        <FormLabel id="name" sx={{ color: "#434A54", fontWeight: "bold" }}>
          Name
        </FormLabel>
        <TextField
          value={props.searchParams.get("name") || ""}
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
              checked={props.searchParams.get("status") == item.value}
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
              checked={props.searchParams.get("gender") === item.value}
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
