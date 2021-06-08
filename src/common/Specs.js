import React, { Component } from "react";

class Specs extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Max Power</th>
            <th>804HP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Torque</td>
            <td>760Nm</td>
          </tr>
          <tr>
            <td>Acceleration 0-100km/h</td>
            <td>3.1seconds</td>
          </tr>
          <tr>
            <td>Motor</td>
            <td>Liquid cooled Dual Motor AWD</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>1,900KG</td>
          </tr>
          <tr>
            <td>Battery Capacity</td>
            <td>55kWh NMC Gen 2 Battery Pack</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>300Km</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Specs;
