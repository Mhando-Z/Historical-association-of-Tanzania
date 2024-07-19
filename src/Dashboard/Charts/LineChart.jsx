import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { format, parseISO } from "date-fns";

// Function to process the registration data and convert dates to timestamps
const processData = (registrations) => {
  const counts = {};

  registrations.forEach((reg) => {
    const date = format(parseISO(reg.profile.date_registered), "yyyy-MM-dd");
    if (!counts[date]) {
      counts[date] = 0;
    }
    counts[date]++;
  });

  const sortedDates = Object.keys(counts).sort();
  const data = sortedDates.map((date) => ({
    date: new Date(date).getTime(), // Convert date to timestamp
    count: counts[date],
  }));

  return data;
};

// Custom formatter for the x-axis ticks
const xAxisTickFormatter = (value) => {
  return format(new Date(value), "yyyy-MM-dd");
};

export default function RegistrationStats({ registrations }) {
  const data = processData(registrations);
  const xAxisData = data.map((item) => item.date);
  const seriesData = data.map((item) => item.count);

  return (
    <LineChart
      xAxis={[
        {
          data: xAxisData,
          tickFormatter: xAxisTickFormatter, // Apply custom formatter
        },
      ]}
      series={[
        {
          data: seriesData,
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
