import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateSelect extends React.Component {

  render() {
    return (
      <div>
        <h2 id="date-select-title">Please select a date between 2015-06-13 & 2019-06-27</h2>
        <DatePicker
          id="calendar-widget"
          selected={this.props.startDate}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


