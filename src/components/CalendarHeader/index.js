import React from 'react';
import { connect } from 'react-redux';

import { setNextMonth, setPreviousMonth } from '../../model/actions';
import { months } from '../../utils/calendar';

class CalendarHeader extends React.Component {
  render() {
    const { selectedMonth, selectedYear, setNextMonth, setPreviousMonth } = this.props;

    return (
      <>
        <button onClick={setPreviousMonth}>{`<`}</button>
        <div>{`${months[selectedMonth]} / ${selectedYear}`}</div>
        <button onClick={setNextMonth}>{`>`}</button>
      </>
    );
  }
};

const mapStateToProps = ({ calendar }) => {
  return {
    selectedMonth: calendar.selectedMonth,
    selectedYear: calendar.selectedYear
  }
};

const mapDispatchToProps = { setNextMonth, setPreviousMonth };

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);