import "./ExploreSection.css";
import React, { Component } from "react";
import img1 from "../images/arches.jpg";
import img2 from "../images/fuji.jpg";
import img3 from "../images/bamboo.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class ExploreSection extends Component {
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
    let descriptionStyle;
    if (window.innerWidth < 700) {
      descriptionStyle = {
        width: "90%",
      };
    }
    return (
      <div className="ExploreSection">
        <div className="TitleDescriptionContainer">
          <div className="InformationTitle ExploreTitle">Explore Japan</div>
          <div className="InformationDescription" style={descriptionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={
            window.innerWidth > 1000
              ? 205
              : window.innerWidth > 800
              ? 280
              : window.innerWidth > 500
              ? 420
              : 600
          }
          totalSlides={3}
          className="Carousel"
          infinite={true}
          touchEnabled={false}
          dragEnabled={false}
        >
          <div className="SliderContainer">
            <Slider>
              {/* Todo: Make the japan highlight dots */}
              <Slide index={0}>
                <div className="CarouselShadow">
                  <img src={img3} alt="Carousel" className="CarouselImg" />
                  <div
                    className="ImgTextContainer"
                    style={
                      window.innerWidth < 700
                        ? { padding: "7% 0 0 15%" }
                        : { padding: "10% 0 0 12%" }
                    }
                  >
                    <div
                      className="SliderTitle"
                      style={
                        window.innerWidth > 400
                          ? { fontSize: "3em" }
                          : { fontSize: "2.2em" }
                      }
                    >
                      Sagano Arashiyama
                    </div>
                    <div className="SliderDivider" />
                    <div className="SliderDescription">
                      Visit the beautiful bamboo forest of Sagano in Kyoto
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="CarouselShadow">
                  <img src={img2} alt="Carousel" className="CarouselImg" />
                  <div
                    className="ImgTextContainer"
                    style={
                      window.innerWidth < 700
                        ? { padding: "7% 0 0 15%" }
                        : { padding: "10% 0 0 12%" }
                    }
                  >
                    <div
                      className="SliderTitle"
                      style={
                        window.innerWidth > 400
                          ? { fontSize: "3em" }
                          : { fontSize: "2.2em" }
                      }
                    >
                      Mount Fuji
                    </div>
                    <div className="SliderDivider" />
                    <div className="SliderDescription">
                      Climb the most famous Mountain in Japanese history
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="CarouselShadow">
                  <img src={img1} alt="Carousel" className="CarouselImg" />
                  <div
                    className="ImgTextContainer"
                    style={
                      window.innerWidth < 700
                        ? { padding: "7% 0 0 15%" }
                        : { padding: "10% 0 0 12%" }
                    }
                  >
                    <div
                      className="SliderTitle"
                      style={
                        window.innerWidth > 400
                          ? { fontSize: "3em" }
                          : { fontSize: "2.2em" }
                      }
                    >
                      Fushimi Inari-Taisha
                    </div>
                    <div className="SliderDivider" />
                    <div className="SliderDescription">
                      Explore the famous arches of Kyoto at the Fushimi
                      Inari-Taisha Shrine
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonBack className="SliderButton LeftButton">
              <i className="fas fa-chevron-left fa-3x SliderIcon" />
            </ButtonBack>
            <ButtonNext className="SliderButton RightButton">
              <i className="fas fa-chevron-right fa-3x SliderIcon" />
            </ButtonNext>
            <DotGroup className="DotGroups" />
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
