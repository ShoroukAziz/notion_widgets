function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component } = React;

class App extends Component {
  constructor() {
    super();_defineProperty(this, "stopTimer",












    timer => {
      clearInterval(timer);
      timer = null;
    });_defineProperty(this, "handleStart",

    () => {
      if (!this.pomodoroStarted) {
        this.timer = setInterval(() => {
          this.setState({ time: this.state.time - 1 });
        }, 1000);
        this.pomodoroStarted = !this.pomodoroStarted;
      }

      if (!this.time) {
        this.time = this.state.time;
        this.breakTime = this.state.breakTime;
      }
    });_defineProperty(this, "handlePause",

    () => {
      if (this.pomodoroStarted) {
        this.isPaused = true;
        this.setState(this.state);
        if (!this.breakStarted) {
          this.stopTimer(this.timer);
        }

        if (this.breakStarted) {
          this.stopTimer(this.breakTimer);
        }
      }
    });_defineProperty(this, "handleResume",

    () => {
      if (this.pomodoroStarted) {
        this.setState(this.state);
        this.isPaused = false;

        if (!this.breakStarted) {
          this.timer = setInterval(() => {
            this.setState({ time: this.state.time - 1 });
          }, 1000);
        }

        if (this.breakStarted) {
          this.breakTimer = setInterval(() => {
            this.setState({ breakTime: this.state.breakTime - 1 });
          }, 1000);
        }
      }
    });_defineProperty(this, "handleReset",

    () => {
      this.setState({
        time: 1500,
        breakTime: 300 });

      this.stopTimer(this.timer);
      this.pomodoroStarted = false;
      this.stopTimer(this.breakTimer);
      this.breakStarted = false;
      this.isPaused = false;
    });_defineProperty(this, "calculateTime",

    time => {
      return `${Math.floor(time / 60)}:${time % 60 > 9 ? "" + time % 60 : "0" + time % 60}`;
    });_defineProperty(this, "increaseTime",

    () => {
      if (!this.pomodoroStarted) {
        this.setState({ time: this.state.time + 60 });
      }
    });_defineProperty(this, "increaseBreakTime",

    () => {
      if (!this.pomodoroStarted) {
        this.breakTime = this.breakTime + 60;
        this.setState({ breakTime: this.state.breakTime + 60 });
      }
    });_defineProperty(this, "decreaseTime",

    () => {
      if (this.state.time > 60 && !this.pomodoroStarted) {
        this.setState({ time: this.state.time - 60 });
      }
    });_defineProperty(this, "decreaseBreakTime",

    () => {
      if (this.breakTime > 60) {
        this.breakTime = this.breakTime - 60;
      }
      if (this.state.breakTime > 60 && !this.pomodoroStarted) {
        this.setState({ breakTime: this.state.breakTime - 60 });
      }
    });this.state = { time: 1500, // Initial length of time
      breakTime: 300 // Initial time of break
    };this.breakTime = 300;this.pomodoroStarted = false;this.breakStarted = false;this.isPaused = false;this.div = false;this.audio = new Audio('https://res.cloudinary.com/lucedesign/video/upload/v1494560703/8bit-laser_z04j15.wav');}componentDidUpdate() {
    if (this.state.time < 1) {
      this.audio.play();
      var audio = new Audio('https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/branch_break.mp3');
      audio.play();
      this.stopTimer(this.timer);
      //After the Pomodoro timer ends, set the time to the stored value set by the user
      this.setState({ time: this.time });
      if (!this.breakStarted) {
        this.startBreak();
        this.breakStarted = true;
      }
    }

    if (this.state.breakTime < 1) {
      this.audio.play();
      this.stopTimer(this.breakTimer);
      //After the break timer ends, set the time to the stored value set by the user
      this.setState({ breakTime: this.breakTime });
      this.pomodoroStarted = false;
      this.breakStarted = false;
      this.handleStart();
    }
  }

  startBreak() {
    this.breakTimer = setInterval(() => {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }, 1000);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "pomodoro" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.increaseTime }, "+")), /*#__PURE__*/

      React.createElement("div", { className: "timer" },
      this.breakStarted ?
      this.calculateTime(this.state.breakTime) :
      this.calculateTime(this.state.time)), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.decreaseTime }, "-"))), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "start-pause" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.handleStart }, "Start"), /*#__PURE__*/
      React.createElement("button", {
        onClick: this.isPaused ? this.handleResume : this.handlePause },

      this.isPaused ? "Resume" : "Pause")), /*#__PURE__*/


      React.createElement("div", { className: "contain-it" }, /*#__PURE__*/
      React.createElement("div", { className: "reset" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.handleReset }, "Reset")), /*#__PURE__*/

      React.createElement("div", { className: "break-length" }, /*#__PURE__*/
      React.createElement("div", { className: "break-time" }, /*#__PURE__*/

      React.createElement("button", { onClick: this.increaseBreakTime }, "+"), /*#__PURE__*/
      React.createElement("div", { className: "break-text" },
      this.calculateTime(this.breakTime)), /*#__PURE__*/

      React.createElement("button", { onClick: this.decreaseBreakTime }, "-"))))), /*#__PURE__*/




      React.createElement("div", null,
      this.dev ? /*#__PURE__*/
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "State"), /*#__PURE__*/
      React.createElement("th", null, "Value")), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "this.state.time:"), /*#__PURE__*/
      React.createElement("td", null, this.state.time)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "this.state.breakTime:"), /*#__PURE__*/
      React.createElement("td", null, this.state.breakTime)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "This.time:"), /*#__PURE__*/
      React.createElement("td", null, this.time)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "This.breakTime:"), /*#__PURE__*/
      React.createElement("td", null, this.breakTime)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "This.pomodoroStarted:"), /*#__PURE__*/
      React.createElement("td", null, this.pomodoroStarted.toString())), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "breakStarted:"), /*#__PURE__*/
      React.createElement("td", null, this.breakStarted.toString())), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "isPaused:"), /*#__PURE__*/
      React.createElement("td", null, this.isPaused.toString())), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "This.timer:"), /*#__PURE__*/
      React.createElement("td", null, this.timer)), /*#__PURE__*/

      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", null, "This.breakTimer:"), /*#__PURE__*/
      React.createElement("td", null, this.breakTimer))) :


      "")));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
