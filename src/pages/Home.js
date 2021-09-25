import React from "react";
import "./Home.css";
import DevelopTitle from "../components/TitleSection";
import CodeEditor, { Browser } from "../components/CodeEditor";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-wrapper">
        <div className="develop ">Develop.</div>
        <div className="preview">Preview.</div>
        <div className="ship">Ship.</div>
        <div className="deploy-demo">
          <button className="deploy-btn">Start Deploying</button>
          <button className="demo-btn">Get a Demo</button>
        </div>
      </h1>
      <h2 className="dev-line">
        Vercel combines the best developer experience with an obsessive focus on
        end-user performance. <br /> Our platform enables frontend teams to do
        their best work.
      </h2>
      <div className="tiny-heading">
        {" "}
        <small className="tiny-heading-text">Explore the vercel way</small>
      </div>
      <DevelopTitle />
      <div className="dev-content-wrapper">
        <div className="dev-content">
          <div className="dev-content-left">
            <div>
              <CodeEditor />
              <Browser />
            </div>
          </div>
          <div className="dev-content-right">
            <div className="dev-content-right-item">
              <h5>Fast Refresh</h5>
              <div>
                Reliable live-editing experience for your UI components.
              </div>
            </div>

            <div className="dev-content-right-item">
              <h5>Flexible Data Fetching</h5>
              <div>
                Connect your pages to any data source, headless CMS, or API and
                make it work in everyone’s dev environment.
              </div>
            </div>

            <div className="dev-content-right-item">
              <h5>Edge on Localhost</h5>
              <div>
                From caching to Serverless Functions, all our cloud primitives
                work perfectly on localhost.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
