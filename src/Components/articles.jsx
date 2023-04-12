import "./articles.css";
import currency from "./images/image-currency.jpg";
import resturant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";
import confetti from "./images/image-confetti.jpg";

export default function articles() {
  return (
    <div className="articles-section">
      <div className="article-title-main">Latest Articles</div>
      <div className="articles-list">
        <div className="article-card">
          <div className="article-image">
            <img src={currency} alt="Currency" />
          </div>
          <div className="article-author"> By Claire Robinson</div>
          <div className="article-title">
            <a href=""> Receive money in any currency with no fees</a>
          </div>
          <div className="article-info">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </div>
        </div>
        <div className="article-card">
          <div className="article-image">
            <img src={resturant} alt="Restaurant" />
          </div>
          <div className="article-author"> By Wilson Hutton</div>
          <div className="article-title">
            <a href="">Treat yourself without worrying about money</a>
          </div>
          <div className="article-info">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </div>
        </div>
        <div className="article-card">
          <div className="article-image">
            <img src={plane} alt="Plane" />
          </div>
          <div className="article-author">By Wilson Hutton</div>
          <div className="article-title">
            <a href="">Take your Easybank card wherever you go</a>
          </div>
          <div className="article-info">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </div>
        </div>
        <div className="article-card">
          <div className="article-image">
            <img src={confetti} alt="Confetti" />
          </div>
          <div className="article-author">By Claire Robinson</div>
          <div className="article-title">
            <a href="">Our invite-only Beta accounts are now live!</a>
          </div>
          <div className="article-info">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </div>
        </div>
      </div>
    </div>
  );
}
