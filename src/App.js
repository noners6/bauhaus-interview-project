import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import CustomCard from "./CustomCard";

//const category = ["dog", "cat"];

const { getData } = require("./api");
function App() {
  const [data, setData] = useState([]);

  // useEffect takes effect after the button is clicked.
  // Button can be clicked any number of times.
  useEffect(() => {
    getData().then(({ data }) => {
      setData(data);
    });
  }, []);

  const [category, setCategory] = useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log("category", event.target.value);
  };
  return (
    <div>
      <CssBaseline />
      <Container>
        <FormControl
          sx={{ marginLeft: "620px", marginTop: "20px", width: "100px" }}
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select value={category} label="Category" onChange={handleChange}>
            <MenuItem value={"dog"}>Dog</MenuItem>
            <MenuItem value={"cat"}>Cat</MenuItem>
            <MenuItem value={"all"}>All</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={1} sx={{ maxWidth: 850 }}>
          {data.length > 0 &&
            data
              .filter(
                (filteredCategory) =>
                  category === "all" || filteredCategory.category === category
              )
              .map((singleCard) => (
                <Grid item xs={2} sm={4} m={6}>
                  <div>{<CustomCard props={singleCard}></CustomCard>}</div>
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
