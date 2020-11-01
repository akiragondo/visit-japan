import "./MustSee.css";
import React, { Component } from 'react'
import Img1 from "../images/arches.jpg"
import Img2 from "../images/osaka_castle.jpg"
import Img3 from "../images/tokyo.jpg"


export default class MustSee extends Component {
    render() {
        return (
            <div className="MustSeeContainer">
                <div className="InformationTitle">Must See Places</div>
                <div className="InformationDescription">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="MustSeeImgRow">
                    <div className="MustSeeImg">
                        <img src={Img1} alt="" className="MustSeeImgs"/>
                        <div className="MustSeeText">
                            <div className="ImgTitle">Kyoto</div>
                            <div className="ImgDescription">aaaaaaa</div>
                        </div>
                    </div>
                    <div className="MustSeeImg">
                        <img src={Img2} alt="" className="MustSeeImgs"/>
                        <div className="MustSeeText">
                            <div className="ImgTitle">Hakone</div>
                            <div className="ImgDescription">aaaaaaa</div>
                        </div>
                    </div>
                    <div className="MustSeeImg">
                        <img src={Img3} alt="" className="MustSeeImgs"/>
                        <div className="MustSeeText">
                            <div className="ImgTitle">Nikko</div>
                            <div className="ImgDescription">aaaaaaa</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
