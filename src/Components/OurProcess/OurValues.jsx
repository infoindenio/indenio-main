import React from "react";

const OurValue = () => {
  return (
    <section className="style-one pf_fadeup">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
            <div className="section-title">
          <span className="sub-title">Our Values</span>
          </div>
          <div className="col-lg-10">
            <h2 className="fw-bold mb-3">Our Values</h2>
            <p className="text-gray-300 fs-7">
              We strive to stay at the forefront of emerging trends and technologies,
              continuously adapting and innovating to meet the ever-evolving needs of
              our clients. Our commitment to excellence drives us to invest in
              cutting-edge research, leverage the latest advancements in software
              development and tools.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="row g-4">
          {/* Innovation */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Innovation.</span>
                Continuously pushing the boundaries with creative and forward-thinking
                solutions.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Excellence.</span>
                Striving for superior quality and exceptional performance in every
                aspect of our work.
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Integrity.</span>
                Maintaining trust and credibility through unwavering honesty and
                transparency in all our interactions.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Collaboration.</span>
                Fostering a collaborative environment where teamwork and open
                communication drive success.
              </p>
            </div>
          </div>

          {/* Agility */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Agility.</span>
                Embracing change and quickly adapting to new challenges and opportunities
                with flexibility.
              </p>
            </div>
          </div>

          {/* Quality */}
          <div className="col-md-6 col-lg-4">
            <div>
              <p className="mb-0 text-gray-400">
                <span className="fw-bold text-white">Quality.</span>
                Commitment to delivering top-notch products and services that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;