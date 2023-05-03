import "./news.css";

import currency from "/images/image-currency.jpg";
import restaurant from "/images/image-restaurant.jpg";
import plane from "/images/image-plane.jpg";
import confetti from "/images/image-confetti.jpg";
export default function News() {
  return (
    <div className="latest-news">
      <div className="main-title">Latest Articles</div>
      <div className="news-box">
        <div className="article1">
          <div className="image">
            <img src={currency} />
          </div>
          <div className="article1-detail">
            <div className="author">By Claire Robinson</div>
            <div className="title">
              <a class="title-link" href="#">
                Receive money in any currency with no fees
              </a>
            </div>
            <div className="paragraph">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single ...
            </div>
          </div>
        </div>
        <div className="article2">
          <div className="image">
            <img src={restaurant} />
          </div>
          <div className="article2-detail">
            <div className="author">By Wilson Hutton</div>
            <div className="title">
              <a class="title-link" href="#">
                Treat yourself without worrying about money
              </a>
            </div>
            <div className="paragraph">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ...
            </div>
          </div>
        </div>
        <div className="article3">
          <div className="image">
            <img src={plane} />
          </div>
          <div className="article3-detail">
            <div className="author">By Wilson Hutton</div>
            <div className="title">
              <a class="title-link" href="#">
                Take your Easybank card wherever you go
              </a>
            </div>
            <div className="paragraph">
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're aborad. We'll even show you ...
            </div>
          </div>
        </div>
        <div className="article4">
          <div className="image">
            <img src={confetti} />
          </div>
          <div className="article4-detail">
            <div className="author">By Claire Robinson</div>
            <div className="title">
              <a class="title-link" href="#">
                Our invite-only Beta accounts are now live!
              </a>
            </div>
            <div className="paragraph">
              After a lot of hard work by the whole team. We're excited to
              launch out closed beta. It's easyy to request an invite through
              the site ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
