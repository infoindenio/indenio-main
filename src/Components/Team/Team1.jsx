import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Team1 = () => {
  const [showAll, setShowAll] = useState(false);

  const teamContent = [
    { img: '/assets/images/creative-agency/team/team1.png', name: 'Project Manager', content: 'Mrs. Hira Arfat' },
    { img: '/assets/images/creative-agency/team/team2.png', name: 'Team Lead', content: 'Mr. Chaudry Waqar' },
    { img: '/assets/images/creative-agency/team/team3.png', name: 'MERN Developer', content: 'Mr. Syed Hashir Hussain' },
    { img: '/assets/images/creative-agency/team/team4.png', name: 'Social Media Manager', content: 'Mr. Uraib Nazir' },
    { img: '/assets/images/creative-agency/team/team5.png', name: 'Senior Full Stack Developer', content: 'Mr. Imran Faiz' },
    // You can add more members later here
  ];

  // Show first 4 or all depending on state
  const visibleMembers = showAll ? teamContent : teamContent.slice(0, 4);

  return (
    <section className="agk-team pt-130 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title mb-50 text-center text-lg-start pf_fadeup">
              <span className="sub-title">Our Team</span>
              <h2>
                Meet Our Talented <br />
                Skillful Team
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {visibleMembers.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12">
              <div className="agenko-team-item style-one mb-40 pf_fadeup">
                <div className="member-image">
                  <img src={item.img} alt={item.content} />
                </div>
                <div className="member-info">
                  <span className="position">{item.name}</span>
                  <h5 className="title">{item.content}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {teamContent.length > 4 && (
          <div className="text-center mt-4">
            <button
              className="theme-btn style-one"
              onClick={() => setShowAll(!showAll)}
            >
              <span className="text-flip">
                <span className="text">{showAll ? 'View Less' : 'View More'}</span>
                <span className="text">{showAll ? 'View Less' : 'View More'}</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team1;
