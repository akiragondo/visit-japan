import "./MustSee.css";
import React, { Component } from "react";
import Img1 from "../images/arches.jpg";
import Img2 from "../images/osaka_castle.jpg";
import Img3 from "../images/tokyo.jpg";

export default class MustSee extends Component {
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
    let imgRowStyle;
    let mustSeeImg;
    if (window.innerWidth < 700) {
      imgRowStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: "4vh",
      };
      mustSeeImg = {
        height: "32vh",
      };
    } else {
      imgRowStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: "4vh",
      };
      mustSeeImg = {
        height: "28vh",
      };
    }

    return (
      <div className="MustSeeContainer">
        <div className="InformationTitle">Must See Places</div>
        {/* <div className="InformationDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div> */}
        <div className="MustSeeImgRow" style={imgRowStyle}>
          <div className="MustSeeImg" style={mustSeeImg}>
            <div className="shadow">
              <img src={Img1} alt="" className="MustSeeImgs" />
            </div>
            <div className="MustSeeText">
              <div className="ImgTitle">Kyoto</div>
              <div className="Divider" />
              <div className="ImgDescription">
                Visit wonderful temples and parks
              </div>
            </div>
          </div>
          <div className="MustSeeImg" style={mustSeeImg}>
            <div className="shadow">
              <img src={Img2} alt="" className="MustSeeImgs" />
            </div>
            <div className="MustSeeText">
              <div className="ImgTitle">Hakone</div>
              <div className="Divider" />
              <div className="ImgDescription">
                Enjoy your time in hot springs and Ryokans
              </div>
            </div>
          </div>
          <div className="MustSeeImg" style={mustSeeImg}>
            <div className="shadow">
              <img src={Img3} alt="" className="MustSeeImgs" />
            </div>
            <div className="MustSeeText">
              <div className="ImgTitle">Tokyo</div>
              <div className="Divider" />
              <div className="ImgDescription">
                Visit the most famous spots in all of Japan!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
