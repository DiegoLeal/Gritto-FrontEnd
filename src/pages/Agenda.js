import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import TimePicker from "material-ui/TimePicker";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from "components/Footer";
require("react-big-calendar/lib/css/react-big-calendar.css");

BigCalendar.momentLocalizer(moment);

/* eslint-disable */

class Agenda extends Component {  
  constructor() {
    super();
    this.state = {
      events: [],
      title: "",
      start: "",
      end: "",
      desc: "",
      event:"",
      openSlot: false,
      openEvent: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }

   componentDidMount(){
      this.getCachedEvents();
 }

    getCachedEvents(){
     const cachedEvents = localStorage.getItem("cachedEvents");
     console.log("Cached Events", JSON.parse(cachedEvents));
     if(cachedEvents){
     this.setState({events: JSON.parse(cachedEvents)})
    }
    return;
   }

  //fecha os modais
  handleClose() {
    this.setState({ openEvent: false, openSlot: false });
  }

  // Permite ao usuário clicar no slot do calendário e controlar se existe um compromisso.
  handleSlotSelected(slotInfo) {
    console.log("Real slotInfo", slotInfo);
    this.setState({
      title: "",
      desc: "",
      start: slotInfo.start,
      end: slotInfo.end,
      openSlot: true
    });
  }

  handleEventSelected(event) {
    console.log("event", event);
    this.setState({
      openEvent: true,
      clickedEvent: event,
      start: event.start,
      end: event.end,
      title: event.title,
      desc: event.desc
    });
  }

  setTitulo(e) {
    this.setState({ title: e });
  }

  setDescription(e) {
    this.setState({ desc: e });
  }

  handleStartTime = (event, date) => {
    this.setState({ start: date });
  };

  handleEndTime = (event, date) => {
    this.setState({ end: date });
  };

  // Função de retorno de chamada que coloca um novo compromisso na matriz de eventos.
  setNewAppointment() {
    const { start, end, title, desc } = this.state;
    let appointment = { title, start, end, desc };
    let events = this.state.events.slice();
    events.push(appointment);
     localStorage.setItem("cachedEvents", JSON.stringify(events));
    this.setState({ events });
  }

  //  Updates Compromissos Existentes Titulo ou Descricao
  updateEvent() {
    const { title, desc, start, end, events, clickedEvent } = this.state;
    const index = events.findIndex(event => event === clickedEvent);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
     localStorage.setItem("cachedEvents", JSON.stringify(updatedEvent));
    this.setState({
      events: updatedEvent
    });
  }

  //  filtra o evento específico que deve ser excluído e define essa variável para o estado
  deleteEvent() {
    let updatedEvents = this.state.events.filter(
      event => event["start"] !== this.state.start
    );
    // localStorage.setItem("cachedEvents", JSON.stringify(updatedEvents));
    this.setState({ events: updatedEvents });
  }
  

  render() {
    console.log("render()");
    
    const eventActions = [
      <FlatButton
        label="Cancelar"
        primary={false}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Excluir"
        secondary={true}
        keyboardFocused={true}
        onClick={() => {
          this.deleteEvent(), this.handleClose();
        }}
      />,
      <FlatButton
        label="Confirmar Edição"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
        onClick={() => {
          this.updateEvent(), this.handleClose();
        }}
      />
    ];
    const appointmentActions = [
      <FlatButton label="Cancelar" secondary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Enviar"
        primary={true}
        keyboardFocused={true}
        onClick={ () => {
          this.setNewAppointment(), this.handleClose();
        }}
      />
    ];
    return (
      <>
      <div id="Calendar">
         <MuiThemeProvider>
        {/* react-big-calendar biblioteca utilizada para renderizar calendar*/}
        <BigCalendar
          events={this.state.events}
          views={["month", "week", "day", "agenda"]}
          timeslots={2}
          defaultView="month"
          defaultDate={new Date()}
          selectable={true}
          onSelectEvent={event => this.handleEventSelected(event)}
          onSelectSlot={slotInfo => this.handleSlotSelected(slotInfo)}
        />

        {/* Material-ui Modal para marcar um novo compromisso */}
        <Dialog
          title={`Book an appointment on ${moment(this.state.start).format(
            "MMMM Do YYYY"
          )}`}
          actions={appointmentActions}
          modal={false}
          open={this.state.openSlot}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Titulo"
            onChange={e => {
              this.setTitulo(e.target.value);
            }}
          />
          <br />
          <TextField
            floatingLabelText="Descrição"
            onChange={e => {
              this.setDescription(e.target.value);
            }}
          />
          <TimePicker
            format="ampm"
            floatingLabelText="Hora Inicial"
            minutesStep={5}
            value={this.state.start}
            onChange={this.handleStartTime}
          />
          <TimePicker
            format="ampm"
            floatingLabelText="Hora Final"
            minutesStep={5}
            value={this.state.end}
            onChange={this.handleEndTime}
          />
        </Dialog>

        {/* Material-ui Modal para Evento Existente */}
        <Dialog
          title={`View/Edit Appointment of ${moment(this.state.start).format(
            "MMMM Do YYYY"
          )}`}
          actions={eventActions}
          modal={false}
          open={this.state.openEvent}
          onRequestClose={this.handleClose}
        >
          <TextField
            defaultValue={this.state.title}
            floatingLabelText="Titulo"
            onChange={e => {
              this.setTitulo(e.target.value);
            }}
          />
          <br />
          <TextField
            floatingLabelText="Descrição"
            multiLine={true}
            defaultValue={this.state.desc}
            onChange={e => {
              this.setDescription(e.target.value);
            }}
          />
          <TimePicker
            format="ampm"
            floatingLabelText="Start Time"
            minutesStep={5}
            value={this.state.start}
            onChange={this.handleStartTime}
          />
          <TimePicker
            format="ampm"
            floatingLabelText="End Time"
            minutesStep={5}
            value={this.state.end}
            onChange={this.handleEndTime}
          />
        </Dialog>
        </MuiThemeProvider>        
      </div>
      <Footer />
      </>
    );
  }
}

export default Agenda;
