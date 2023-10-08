import React from "preact/compat";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};
export default Bar;
