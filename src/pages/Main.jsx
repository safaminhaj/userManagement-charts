import { USAMap } from "../Components/USAMap/USAMap";
import { LineChart } from "../Components/LineChart/LineChart";
import { BarChart } from "../Components/BarChart/BarChart";
import { Table } from "../Components/Table/Table";

export const Main = () => {
  return (
    <div className="main">
      <USAMap />
      <LineChart />
      <BarChart />
      <Table />
    </div>
  );
};
