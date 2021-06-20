import React from "react";
import styled from "styled-components";

function SliderSpecs() {
  return (
    <Container>
      <Table data-scroll data-scroll-speed="1">
        <TableItems>
          <tr>
            <td>Max Power</td>
            <th>804HP</th>
          </tr>
          <tr>
            <td>Torque</td>
            <th>760Nm</th>
          </tr>
          <tr>
            <td>Acceleration 0-100km/h</td>
            <th>3.1seconds</th>
          </tr>
          <tr>
            <td>Motor</td>
            <th>Liquid cooled Dual Motor AWD</th>
          </tr>
          <tr>
            <td>Weight</td>
            <th>1,900KG</th>
          </tr>
          <tr>
            <td>Battery Capacity</td>
            <th>55kWh NMC Gen 2 Battery Pack</th>
          </tr>
          <tr>
            <td>Range</td>
            <th>300Km</th>
          </tr>
        </TableItems>
      </Table>
    </Container>
  );
}

export default SliderSpecs;

const Container = styled.div`
  max-height: 100vh;
  min-height: 1060px;
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
`;
const Table = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: #ffffff;
  width: 100%;
  height: 100%;
  margin: auto 150px;
`;

const TableItems = styled.table`
  width: 1455px;
  height: 622px;
  border-collapse: collapse;
  th,
  td {
    border-bottom: 0.01em solid white;
  }
  th {
    text-align: right;
  }
  td {
    text-align: left;
    height: 60px;
    vertical-align: center;
  }
`;
