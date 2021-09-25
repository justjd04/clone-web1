import React from "react";
import "./CodeEditor.css";
import { IoReloadOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";

const CodeEditor = () => {
  return (
    <div className="code-editor">
      <div className="window">
        <div className="window-header">
          <div className="window-traffic">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow ml-8"></span>
            <span className="window-dot dot-green ml-8"></span>
          </div>
          <div className="window-title">
            <div className="window-tabs">
              <div>index.js</div>
            </div>
          </div>
        </div>
        <div className="window-body">
          <div className="window-body-container">
            <div className="window-body-left">
              <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
            </div>
            <div className="window-body-right">
              <div>
                <div>
                  <span className="fw-700">{"export default function"}</span>
                  <span>{"({ data }) {"}</span>
                </div>
                <div>
                  {"    "}
                  <span className="fw-700">return</span>
                  {" <"}
                  <span className="fw-700 f-blue">Layout</span>
                  {">"}
                </div>
                <div>
                  {"        <"}
                  <span className="fw-700 f-blue">Product</span>
                  {" details={data} />"}
                </div>
                <div>
                  {"    </"}
                  <span className="fw-700 f-blue">Layout</span>
                  {">"}
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Browser = () => {
  return (
    <div className="browser">
      <div className="browser-window">
        <div className="browser-header">
          <div className="window-traffic">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow ml-8"></span>
            <span className="window-dot dot-green ml-8"></span>
          </div>
          <div className="browser-header-item">
            <div className="browser-bar">
              <div className="browser-spacer"></div>
              <div className="browser-url-window">
                <div className="browser-url">
                  <span>localhost:3000</span>
                  <IoReloadOutline className="refresh-icon" />
                </div>
              </div>
              <div className="browser-spacer"></div>
            </div>
          </div>
        </div>
        <div className="browser-body">
          {/* <img src="img/browser.png" alt="browser" /> */}
          <div className="browser-body-wrap">
            <div className="browser-body-left">
              <div className="browser-body-left-item">
                <div className="browser-body-logo">
                  <CgShoppingCart />
                </div>
                <div className="browser-body-title">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="browser-body-img-wrap">
                <img src="img/Plant.png" alt="Plant" />
              </div>
            </div>
            <div className="browser-body-right">
              <div className="browser-body-right-title">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="browser-body-right-content">
                <div></div>
                <div>$$$</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
