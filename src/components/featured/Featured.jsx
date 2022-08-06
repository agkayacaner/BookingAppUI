import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/976538.webp?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h2>1.891 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="fea"
          src="https://cf.bstatic.com/xdata/images/city/540x270/971373.webp?k=8ab3bac236f2b64230e74b50eca464353ce147966ce4ea9eb2c83cff22e70795&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Athens</h1>
          <h2>1.211 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="fea"
          src="https://cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>7.431 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
