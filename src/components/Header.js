import React, { Component } from "react";
import "./Header.css";
import logo from "../images/logo_place.png";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let HeaderLinks;
    let descriptionStyle;
    if (window.innerWidth < 700) {
      HeaderLinks = (
        <div className="MenuLogo">
          <i className="fas fa-bars fa-2x" />
        </div>
      );
      descriptionStyle = {
        width: "100%",
      };
    } else {
      HeaderLinks = (
        <ul className="LinksRow">
          <li className="HeaderLink Hover">Places</li>
          <li className="HeaderLink Hover">Visit</li>
          <li className="HeaderLink Hover">Explore</li>
          <li className="HeaderLink Hover">Plan</li>
        </ul>
      );
    }
    return (
      <div className="HeaderContainer">
        {/* <div className="ImageContainer">
          <img
            src="/images/tokyo.jpg"
            alt="toyko"
            className="ImageSectionImage"
          />
        </div> */}
        <div className="Navbar">
          <img src={logo} alt="Logo" className="HeaderLogo" />
          {HeaderLinks}
        </div>
        <div className="TitleContainer">
          <div className="Title">Travel To Japan</div>
          <div className="Description" style={descriptionStyle}>
            This website is about japan and all the weaboos. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    );
  }
}
