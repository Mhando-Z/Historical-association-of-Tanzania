import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
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
    date,
    count: counts[date],
  }));

  return data;
};

export default function RegistrationStatsBar({ registrations }) {
  const data = processData(registrations);
  const xAxisData = data.map((item) => item.date);
  const seriesData = data.map((item) => item.count);

  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band", // Set scale type to band
          data: xAxisData,
        },
      ]}
      series={[
        {
          data: seriesData,
          //   color: ["blue", "red", "purple", ""],
          //   color: (index) => colors[index], // Assign dynamic colors
        },
      ]}
      width={600}
      height={400}
      animation // Enable animations
    />
  );
}

// Usage example
const registrations = [
  {
    id: 7,
    email: "miltonbloz10@gmail.com",
    username: "MhandoZuberi",
    is_active: true,
    is_staff: false,
    profile: {
      date_registered: "2024-07-17T11:30:01.969604Z",
    },
  },
  {
    id: 8,
    email: "anotheruser@gmail.com",
    username: "AnotherUser",
    is_active: true,
    is_staff: false,
    profile: {
      date_registered: "2024-07-17T15:22:01.969604Z",
    },
  },
  {
    id: 9,
    email: "thirduser@gmail.com",
    username: "ThirdUser",
    is_active: true,
    is_staff: false,
    profile: {
      date_registered: "2024-07-18T09:11:01.969604Z",
    },
  },
];

export function App() {
  return <RegistrationStatsBar registrations={registrations} />;
}
