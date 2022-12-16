import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const Filter = () => {
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
        Rick and Morty
      </Typography>
      <Box>
        <FormLabel id="name" sx={{ color: "#434A54" }}>
          Name
        </FormLabel>
        <TextField
          name="name"
          aria-labelledby="name"
          variant={"outlined"}
          size={"small"}
          sx={{ bgcolor: "white" }}
          fullWidth
        />
      </Box>
      <Box>
        <FormLabel id="status" sx={{ color: "#434A54" }}>
          Status
        </FormLabel>
        <RadioGroup aria-labelledby="status">
          <FormControlLabel
            sx={{ height: "30px" }}
            value=""
            control={<Radio size="small" />}
            label="All"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Alive"
            control={<Radio size="small" />}
            label="Alive"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Dead"
            control={<Radio size="small" />}
            label="Dead"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Unknown"
            control={<Radio size="small" />}
            label="Unknown"
          />
        </RadioGroup>
      </Box>
      <Box>
        <FormLabel id="gender" sx={{ color: "#434A54" }}>
          Gender
        </FormLabel>
        <RadioGroup aria-labelledby="gender">
          <FormControlLabel
            sx={{ height: "30px" }}
            value=""
            control={<Radio size="small" />}
            label="All"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Female"
            control={<Radio size="small" />}
            label="Female"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Male"
            control={<Radio size="small" />}
            label="Male"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Genderless"
            control={<Radio size="small" />}
            label="Genderless"
          />
          <FormControlLabel
            sx={{ height: "30px" }}
            value="Unknown"
            control={<Radio size="small" />}
            label="Unknown"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};
export default Filter;
