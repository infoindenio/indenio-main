import React from "react";
import { Link } from "react-router-dom";

const TellUs = () => {
  return (
    <section className="agk-about pt-100 pb-100 text-white">
      <div className="container tell-us bg-black text-white pt-100 pb-100 pl-100">
        <h2 className="mb-4 text-2xl font-bold">Tell us about your project</h2>
      <div className="main-button">
                <Link to="/contact" className="theme-btn style-one">
                    <span className="text-flip">
                        <span className="text">Say Hello</span>
                        <span className="text">Say Hello</span>
                    </span>
                </Link>                  

                  </div>
                  </div>
    </section>
  );
};

export default TellUs;