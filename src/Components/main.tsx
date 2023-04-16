import "./main.css";
import BackgroundArt from "/images/bg-intro-desktop.svg";
import BackgroundArtMobile from "/images/bg-intro-mobile.svg"
import PhoneImg from "/images/image-mockups.png";
import RequestInvite from "./request-invite-button";

export default function main() {
  return (
    <div className="main-section">
      <div className="left-column">
        <div className="main-title">Next generation digital banking</div>
        <div className="main-subtitle">
          Take your financial life online, Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </div>
        <div className="main-button">
          <RequestInvite />
        </div>
      </div>
      <div className="right-column">
        <div className="background-image-desktop">
          <img src={BackgroundArt} alt="background desktop" />
        </div>
        <div className="background-image-mobile">
        <img src={BackgroundArtMobile} alt="bavkground mobile" />
        </div>
        <div className="overlapping-phone-image">
          <img src={PhoneImg} alt="phone mockup" />
        </div>
      </div>
    </div>
  );
}
