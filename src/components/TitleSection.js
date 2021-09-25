import React from "react";
import "./TitleSection.css";

const DevelopTitle = () => {
  return (
    <div className="title-section">
      <div className="line fade-blue"></div>
      <div className="circle-section">
        <span className="circle blue">1</span>
        <h3 className="section-label">
          <span className="section-label-text blue">Develop</span>
        </h3>
      </div>
      <h4 className="section-title" id="develop">
        Start with the Developer
      </h4>
      <div className="section-content">
        <div className="content-item">
          <p>
            Developers love{" "}
            <a href="/#develop" className="section-link blue-font">
              Next.js
            </a>
            , the open source React framework Vercel built together with Google
            and Facebook. Next.js powers the biggest websites like{" "}
            <a href="/#develop" className="section-link blue-font">
              Twilio
            </a>
            , for use cases in{" "}
            <a href="/#develop" className="section-link blue-font">
              e-commerce
            </a>
            ,{" "}
            <a href="/#develop" className="section-link blue-font">
              travel
            </a>
            ,{" "}
            <a href="/#develop" className="section-link blue-font">
              news
            </a>
            , and{" "}
            <a href="/#develop" className="section-link blue-font">
              marketing
            </a>
            .
          </p>
        </div>
        <div className="content-item right-item">
          <p>
            Vercel is the best place to deploy any frontend app. Start by
            deploying with zero configuration to our{" "}
            <a href="/#develop" className="section-link blue-font">
              global edge network
            </a>
            .{" "}
            <a href="/#develop" className="section-link blue-font">
              Scale dynamically
            </a>{" "}
            to millions of pages without breaking a sweat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopTitle;
