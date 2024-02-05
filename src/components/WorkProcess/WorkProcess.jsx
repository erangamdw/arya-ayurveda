import React from "react";
import { work_process } from "../../constants/data";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className="workprocess section-p bg-white" id="workprocess">
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <h3 className="text-brown">
              working <span className="text-dark">process</span>
            </h3>
            <p className="text">
              Explore our range of Ayurvedic treatments designed to enhance your
              well-being and bring balance to mind, body, and spirit.
            </p>
          </div>

          <div className="workprocess-list grid">
            {work_process.map((workprocess, index) => {
              return (
                <div className="workprocess-item text-center" key={index}>
                  <div className="workprocess-item-title flex">
                    {/* <span className="text-brown fw-7">0 {index + 1}</span> */}
                    <h3 className="text-brown fw-6">{workprocess.title}</h3>
                  </div>
                  <p className="text">{workprocess.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
