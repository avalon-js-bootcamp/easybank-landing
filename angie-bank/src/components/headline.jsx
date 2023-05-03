import "./headline.css";
import svgBG from "/images/bg-intro-desktop.svg";
import mockup from "/images/image-mockups.png";
export default function HeadLine() {
  return (
    <div className="wrapper">
      <div className="head-line-box">
        <h>Next generation digital banking</h>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, savings, budgeting, investing, and much
          more.
        </p>
        <div className="head-line-button">Request Invite</div>
      </div>
      <div className="image-box">
        <img className="background-img" src={svgBG} />

        <img className="mockup-img" src={mockup} />
      </div>
    </div>
  );
}
