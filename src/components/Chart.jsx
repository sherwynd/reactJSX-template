import React from "react";
import { Typography, Box } from "@mui/material";
import { LineChart, BarChart, PieChart } from "@mui/x-charts";

export default function Chart() {
  const pData = [104, 42, 574, 701, 178, 771, 913, 420, 354, 962, 221, 229];

  const XMonthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 1,
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            my: 1,
          }}
        >
          Month and Product Sales
        </Typography>
        <LineChart
          xAxis={[{ scaleType: "point", data: XMonthLabels }]}
          series={[{ data: pData, label: "Product Sales" }]}
          width={900}
          height={500}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <Typography
          sx={{
            my: 1,
          }}
        >
          Month and quantity event joined
        </Typography>
        <BarChart
          series={[
            {
              data: [2, 1, 2, 8, 4, 6, 4, 6, 2, 3, 3, 9],
              label: "Event Joined",
            },
            {
              data: [2, 0, 1, 0, 1, 1, 2, 3, 5, 4, 3, 2],
              label: "Event Created",
            },
          ]}
          width={900}
          height={500}
          xAxis={[{ scaleType: "band", data: XMonthLabels }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <Typography
          sx={{
            my: 1,
          }}
        >
          Category and Product Sales
        </Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Running" },
                { id: 1, value: 15, label: "Shirt" },
                { id: 2, value: 69, label: "Badminton" },
                { id: 3, value: 49, label: "Football" },
                { id: 4, value: 20, label: "Swimming" },
                { id: 5, value: 24, label: "Basketball" },
                { id: 6, value: 13, label: "Table Tennis" },
                { id: 7, value: 34, label: "Tennis" },
                { id: 8, value: 10, label: "Squash" },
                { id: 9, value: 1, label: "Hockey" },
              ],
            },
          ]}
          width={900}
          height={500}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
    </>
  );
}
