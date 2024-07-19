import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieCharts({ data: datas }) {
  const NoofUsers = datas?.length;
  const members = datas?.filter(
    (user) => user.profile.is_paid_membership === true
  );
  const conference = datas?.filter(
    (user) => user.profile.is_paid_conference === true
  );
  const Students = datas?.filter((user) => user.profile.is_student === true);

  const data = [
    { id: 0, value: NoofUsers, label: "Users" },
    { id: 1, value: conference?.length, label: "Conference" },
    { id: 2, value: Students?.length, label: "Students" },
    { id: 2, value: members?.length, label: "Members" },
  ];
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={280}
    />
  );
}
