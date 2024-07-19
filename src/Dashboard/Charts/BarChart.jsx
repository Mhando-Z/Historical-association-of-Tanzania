import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarsChart({ data }) {
  const NoofUsers = data?.length;
  const members = data?.filter(
    (user) => user.profile.is_paid_membership === true
  );
  const conference = data?.filter(
    (user) => user.profile.is_paid_conference === true
  );
  const Students = data?.filter((user) => user.profile.is_student === true);
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Users", "Conference", "students", "Members"],
        },
      ]}
      series={[
        {
          data: [
            NoofUsers,
            conference?.length,
            Students?.length,
            members?.length,
          ],
        },
      ]}
      width={500}
      height={400}
    />
  );
}
