import React, { Component } from 'react';
import '../style/Agenda.css';
import Agenda from 'pages/Agenda';

class Schedule extends Component {    
  render() {
    return (
      <div>
      <h1>Agenda</h1>               
        <Agenda />
      </div>
    );
  }
}

export default Schedule;