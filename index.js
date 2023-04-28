import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./button";

ReactDOM.render(
  <div>
    <App />
    <div className="container">
      <div>
        <h3 className="h3">Account Settings</h3>
      </div>
      <div>
        <button className="btn1">Update Profile</button>
      </div>
    </div>
    <hr />
    <h4>Your Profile Picture</h4>
    <div className="profile">
      <img src="./images/profile.png" />
      <button className="btn2">Upload New</button>
      <button className="btn3">Remove Profile Picture</button>
    </div>
    <hr />
    <div className="name">
      <div>
        <h4>First Name</h4>
        <form action="" className="form">
          <input
            type="text"
            name="text"
            className="box"
            placeholder="First name"
          ></input>
        </form>
      </div>
      <div>
        <h4>Last Name</h4>
        <form action="" className="form">
          <input
            type="text"
            name="text"
            className="box"
            placeholder="Last Name"
          ></input>
        </form>
      </div>
    </div>
    <div className="branch">
      <div>
        <h4>Branch</h4>
        <form action="" className="form">
          <label>
            <select id="branch">
              <option value="branch">Branch</option>
              <option value="cse">Computer Science</option>
              <option value="eee">Electrical & Electronics</option>
              <option value="et&t">Elecetronics & Telecommunications</option>
              <option value="ce">Civil</option>
              <option value="me">Mechanical</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <h4>Semester</h4>
        <form action="" className="form">
          <label>
            <select id="Semester">
              <option value="Semester">Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </label>
        </form>
      </div>
    </div>
    <h4>Password</h4>
    <div className="password">
      <div>
        <h5>New Password</h5>
        <form action="" className="form">
          <input
            type="password"
            name="password"
            className="box"
            placeholder="password"
          ></input>
        </form>
      </div>
      <div>
        <h5>Confirm</h5>
        <form action="" className="form">
          <input
            type="password"
            name="password"
            className="box"
            placeholder="password"
          ></input>
        </form>
      </div>
    </div>
    <button className="changebtn" onClick="text">
      Change
    </button>
    <h4>Email Address</h4>
    <h5>Your Email Address is user@gmail.com</h5>
    <div className="email">
      <div>
        <h5>New Email Address</h5>
        <form action="" className="form">
          <input
            type="email"
            name="email"
            className="box"
            placeholder="email"
          ></input>
        </form>
      </div>

      <div>
        <h5>Confirm New Email</h5>

        <form action="" className="form">
          <input
            type="email"
            name="email"
            className="box"
            placeholder="email"
          ></input>
        </form>
      </div>
    </div>
    <button className="changebtn">Change</button>
    <h4>About</h4>
    <section>
      lorem orem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </section>
  </div>,
  document.getElementById("root")
);
