import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timerController, resetTimer } from '../Actions/timerActions';
import Timer from '../Components/Timer';

const App = (props) => {
    return (
      <div>
        <Timer 
          time={props.time} 
          startTimer={() => props.startTimer(props.time.hours, props.time.minutes, props.time.seconds, props.time.timer) }
          stopTimer={() => props.stopTimer(props.time.hours, props.time.minutes, props.time.seconds, props.time.timer) }
          resetTimer={() => props.resetTimer() } 
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return{
    time: state.timerReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    startTimer: (hours, minutes, seconds, timer) => {
      dispatch(timerController(hours, minutes, seconds, timer));
    },
    stopTimer: (hours, minutes, seconds, timer) => {
      dispatch(timerController(hours, minutes, seconds, timer));
    },
    resetTimer: () => {
      dispatch(resetTimer());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
