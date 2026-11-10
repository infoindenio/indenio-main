import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';

const WhoWeAre = () => {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };

  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <section className="agk-who-we gray-dark pt-130 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="agk-content-box mb-50 pf_fadeup">
              <div className="section-title mb-30">
                <span className="sub-title">Who We Are</span>
                <h2>One Team for Your Website, SEO &amp; Marketing</h2>
              </div>
              <ul className="check-list style-one mb-40">
                <li>
                  <i className="bi bi-check2-circle"></i>Custom-built websites and stores, never cookie-cutter templates
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>SEO built in from day one, so Google can find and rank you
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>Talk directly to the people building your project on WhatsApp
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>Clients in the UK, USA, Norway, Australia and Pakistan
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>Ongoing support, security cleanups, updates and growth after launch
                </li>
              </ul>
              <div className="agk-button">
                <Link to="/about" className="theme-btn style-one">
                  <span className="text-flip">
                    <span className="text">LEARN MORE</span>
                    <span className="text">LEARN MORE</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="agk-play-image-box mb-50 pf_fadeup">
              <div className="agk-image style-four">
                <img
                  src="/assets/svg/who.svg"
                  className="rounded-2"
                  alt="About INDENIO"
                />
                {/* <div onClick={handelClick} className="play-box">
                  <a className="video-popup">
                    <i className="bi bi-play-fill"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="big-text text-center mt-80 pt-70">
            <h2 className="text-anm-two">WEB · SEO · MARKETING</h2>
          </div>
        </div>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </section>
  );
};

export default WhoWeAre;
