import React from "react";
import Header from "./header";
import "./style.css";
import Row from "./row";

// @ts-ignore
const data: any = [
  {
    name: "EU",
    information: {
      ICE: {
        Emissions: "test1",
        COP: "test2",
        EVAP: "test3",
      },
      MHEV: {
        Emissions: "test4",
        COP: "test5",
        EVAP: "test6",
      },
      PHEV: {
        Emissions: "test7",
        COP: "test8",
        EVAP: "test9",
      },
      BEV: {
        Emissions: "test7",
        COP: "test8",
        EVAP: "test9",
      },
    },
  },
  {
    name: "CHINA",
    information: {
      ICE: {
        Emissions: "test1",
        COP: "test2",
        EVAP: "test3",
      },
      MHEV: {
        Emissions: "test4",
        COP: "test5",
        EVAP: "test6",
      },
      PHEV: {
        Emissions: "test7",
        COP: "test8",
        EVAP: "test9",
      },
      BEV: {
        Emissions: "test7",
        COP: "test8",
        EVAP: "test9",
      },
    },
  },
];

const Table = () => {
  return (
    <>
      <table>
        <Header />
        <tbody>
          {data.map((row: any) => (
            <Row row={row} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
