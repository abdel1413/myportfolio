import React, { Component } from "react";
import "../App.css";
import "tachyons";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      phone: "",
      email: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ Name: e.target.value });
    // console.log(e.target.value)
    const fm = e.target.value;

    //alert(`hey ${fm} your message was successful sent`);
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();
    console.log(this.state);

    alert(
      `hey ${this.state.Name} ,your phone ${this.state.phone}  and your email ${this.state.email} were successful registered`
    );

    this.setState({ Name: "", phone: "", email: "" });
  };

  render() {
    return (
      <form className="register_components  grow-5">
        <div className="register-form">
          <h2 className="register">register </h2>
          <label>
            Name :
            <input
              type="text"
              name="name"
              onChange={this.handleNameChange}
              value={this.state.Name}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Phone :
            <input
              type="text"
              name="phone"
              onChange={this.handlePhoneChange}
              value={this.state.phone}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Email :
            <input
              type="text"
              name="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </label>
        </div>
        <button
          style={{
            borderRadius: "10px",
            background: "#833ab4",
            padding: "5px",
            width: "90px",
            color: "white",
            marginLeft: "120px",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={this.onFormSubmit}
        >
          {" "}
          Submit
        </button>
      </form>
    );
  }
}

export default Contact;
