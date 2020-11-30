import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "./home.css";

import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  return (
    <div className="centered">
      <div className="homeContainer">
        <div className="homeGreets"></div>
        <div className="homeBooking">
          <h2 className="homeTitle">Book a table</h2>
          <div className="homeTitleLine"></div>
          <form action="#" autoComplete="on">
            <div className="inputDiv">
              <input
                className="bookName"
                type="text"
                placeholder="Full name"
                id="name"
                required
              />
              <label for="name">Full name</label>
            </div>
            <div className="inputDiv">
              <input
                className="bookEmail"
                type="email"
                placeholder="Email"
                id="Email"
              />
              <label for="Email">Email</label>
            </div>
            <div className="inputDiv">
              <input
                className="bookPhone"
                type="tel"
                id="phone"
                placeholder="Phone"
              />
              <label for="phone">Phone</label>
            </div>
            <div className="bookBottom">
              <div className="bookDate">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="bookTime">
                <TimePicker
                  placeholder="Time"
                  selected={time}
                  onChange={(time) => setTime(time)}
                />
              </div>

              <button className="bookbtn inputDiv">book now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
