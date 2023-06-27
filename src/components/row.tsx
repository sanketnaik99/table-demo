import React from "react";

const Row = ({ row }: any) => {
  return (
    <>
      <tr>
        <td rowSpan={4}>{row.name}</td>
      </tr>
      <tr>
        <td>Emissions</td>
        {Object.keys(row.information).map((info: any) => {
          return <td>{row.information[info].Emissions}</td>;
        })}
      </tr>
      <tr>
        <td>COP</td>
        {Object.keys(row.information).map((info: any) => {
          return <td>{row.information[info].COP}</td>;
        })}
      </tr>
      <tr>
        <td>EVAP</td>
        {Object.keys(row.information).map((info: any) => {
          return <td>{row.information[info].EVAP}</td>;
        })}
      </tr>
    </>
  );
};

export default Row;
