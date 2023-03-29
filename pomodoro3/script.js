import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const SESSION = "Sessão";
const BREAK = "Intervalo";
const SESSIONLEN = 25;
const BREAKLEN = 5;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLen: BREAKLEN, // min
      sessionLen: SESSIONLEN, // min
      timeLeft: SESSIONLEN * 60, // sec
      timerType: SESSION,
      isTimerRunning: false,
      intervalId: "" };

    this.changeTimerType = this.changeTimerType.bind(this);
    this.handleDecrementBreak = this.handleDecrementBreak.bind(this);
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this);
    this.handleDecrementSession = this.handleDecrementSession.bind(this);
    this.handleIncrementSession = this.handleIncrementSession.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStartStopTimer = this.toggleStartStopTimer.bind(this);
  }

  changeTimerType() {
    this.setState(
    {
      timerType: this.state.timerType === SESSION ? BREAK : SESSION,
      timeLeft:
      this.state.timerType === SESSION ?
      this.state.breakLen * 60 :
      this.state.sessionLen * 60 },

    () => {
      this.runTimer();
    });

  }

  handleDecrementBreak() {
    if (!this.state.isTimerRunning && this.state.breakLen > 1) {
      this.setState({
        breakLen: this.state.breakLen - 1,
        timeLeft:
        this.state.timerType === BREAK ?
        (this.state.breakLen - 1) * 60 :
        this.state.timeLeft });

    }
  }

  handleIncrementBreak() {
    if (!this.state.isTimerRunning && this.state.breakLen < 60) {
      this.setState({
        breakLen: this.state.breakLen + 1,
        timeLeft:
        this.state.timerType === BREAK ?
        (this.state.breakLen + 1) * 60 :
        this.state.timeLeft });

    }
  }

  handleDecrementSession() {
    if (!this.state.isTimerRunning && this.state.sessionLen > 1) {
      this.setState({
        sessionLen: this.state.sessionLen - 1,
        timeLeft:
        this.state.timerType === SESSION ?
        (this.state.sessionLen - 1) * 60 :
        this.state.timeLeft });

    }
  }

  handleIncrementSession() {
    if (!this.state.isTimerRunning && this.state.sessionLen < 60) {
      this.setState({
        sessionLen: this.state.sessionLen + 1,
        timeLeft:
        this.state.timerType === SESSION ?
        (this.state.sessionLen + 1) * 60 :
        this.state.timeLeft });

    }
  }

  resetTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      breakLen: BREAKLEN, // min
      sessionLen: SESSIONLEN, // min
      timeLeft: SESSIONLEN * 60, // sec
      timerType: SESSION,
      isTimerRunning: false,
      intervalId: "" });

    this.beepSound.pause();
    this.beepSound.currentTime = 0;
  }

  runTimer() {
    let intervalId = setInterval(() => {
      this.setState(
      {
        timeLeft: this.state.timeLeft - 1 },

      () => {
        if (this.state.timeLeft === 0) {
          this.beepSound.play();
        }
        if (this.state.timeLeft < 0) {
          if (this.state.intervalId) clearInterval(this.state.intervalId);
          this.changeTimerType();
        }
      });

    }, 1000);
    this.setState({
      intervalId });

  }

  toggleStartStopTimer() {
    if (!this.state.isTimerRunning) {
      this.runTimer();
      this.setState({ isTimerRunning: true });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        isTimerRunning: false,
        intervalId: "" });

    }
  }

  clockify() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }

  render() {
    let stopStartTimer = this.state.isTimerRunning ?
    "fa fa-pause" :
    "fa fa-play";

    return /*#__PURE__*/(
      React.createElement("div", { className: "clock-container" }, /*#__PURE__*/
      React.createElement(Timer, {
        timeLeft: this.clockify(),
        timerType: this.state.timerType,
        resetTimer: this.resetTimer,
        stopStartTimer: stopStartTimer,
        toggleStartStopTimer: this.toggleStartStopTimer }), /*#__PURE__*/

      React.createElement("div", { className: "length-container" }, /*#__PURE__*/
      React.createElement("div", { className: "break-container" }, /*#__PURE__*/
      React.createElement(SetTimerLength, {
        timerLabelId: "break-label",
        timerLabel: "Tempo de intervalo",
        timerLen: this.state.breakLen,
        timerLenId: "break-length",
        decTimerId: "break-decrement",
        handleDecrementTimer: this.handleDecrementBreak,
        incTimerId: "break-increment",
        handleIncrementTimer: this.handleIncrementBreak })), /*#__PURE__*/


      React.createElement("div", { className: "session-container" }, /*#__PURE__*/
      React.createElement(SetTimerLength, {
        timerLabelId: "session-label",
        timerLabel: "Tempo de sess\xE3o",
        timerLen: this.state.sessionLen,
        timerLenId: "session-length",
        decTimerId: "session-decrement",
        handleDecrementTimer: this.handleDecrementSession,
        incTimerId: "session-increment",
        handleIncrementTimer: this.handleIncrementSession }))), /*#__PURE__*/



      React.createElement("audio", {
        id: "beep",
        load: "auto",
        ref: audio => {
          this.beepSound = audio;
        },
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));



  }}


class SetTimerLength extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRefInc = React.createRef();
    this.buttonRefDec = React.createRef();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: this.props.timerLabelId }, this.props.timerLabel), /*#__PURE__*/
      React.createElement("span", { id: this.props.timerLenId, className: "timer-length" },
      this.props.timerLen), /*#__PURE__*/

      React.createElement("div", { className: "inc-dec-btn-container" }, /*#__PURE__*/
      React.createElement("button", {
        ref: this.buttonRefInc,
        className: "inc-arrow",
        onClick: () => {
          this.props.handleIncrementTimer();
          this.buttonRefInc.current.blur();
        } }, /*#__PURE__*/

      React.createElement("i", { id: this.props.incTimerId, className: "fa fa-arrow-up" })), /*#__PURE__*/

      React.createElement("button", {
        ref: this.buttonRefDec,
        onClick: () => {
          this.props.handleDecrementTimer();
          this.buttonRefDec.current.blur();
        } }, /*#__PURE__*/

      React.createElement("i", { id: this.props.decTimerId, className: "fa fa-arrow-down" })))));




  }}


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRefStartStop = React.createRef();
    this.buttonRefReset = React.createRef();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, this.props.timeLeft), /*#__PURE__*/
      React.createElement("div", { id: "display-controls" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label" }, this.props.timerType), /*#__PURE__*/
      React.createElement("div", { id: "timer-ssr" }, /*#__PURE__*/
      React.createElement("button", {
        ref: this.buttonRefStartStop,
        id: "start-stop",
        onClick: () => {
          this.props.toggleStartStopTimer();
          this.buttonRefStartStop.current.blur();
        } }, /*#__PURE__*/

      React.createElement("i", { className: this.props.stopStartTimer, "aria-hidden": "true" })), /*#__PURE__*/

      React.createElement("button", {
        ref: this.buttonRefReset,
        id: "reset",
        onClick: () => {
          this.props.resetTimer();
          this.buttonRefReset.current.blur();
        } }, /*#__PURE__*/

      React.createElement("i", { className: "fa fa-refresh", "aria-hidden": "true" }))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));