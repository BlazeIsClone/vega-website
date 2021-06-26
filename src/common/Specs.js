import React from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";

function SliderSpecs() {
  return (
    <Container>
      <HeadlineWrapper>
        <Headline paddingLeft="card" color="white" content="specifications" />
      </HeadlineWrapper>
      <Table>
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

const HeadlineWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 0 125px 0 0;
  padding: 220px 0 0 0;
`;
const Container = styled.div`
  padding: 0 100px 0 80px;
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
  margin: auto 0 160px 0;
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
