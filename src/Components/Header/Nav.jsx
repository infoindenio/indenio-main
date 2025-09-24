import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      {/* <li className="menu-item-has-children"> */}
      <li>
        <Link to="/">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      {/* <li className="menu-item-has-children"> */}
      <li className="menu-item-has-children">
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/ourprocess" onClick={() => setMobileToggle(false)}>
                Our Process
              </Link>
            </li>
            {/* <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                          */}
          </ul>
        </DropDown>
      </li>  

      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {/* Development Dropdown */}
            <li className="menu-item-has-children">
              {/* <Link to="/service/development" onClick={(e) => e.preventDefault()}> */}
              <Link to="/service/development" onClick={() => setMobileToggle(false)}>
                Development
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/service/web" onClick={() => setMobileToggle(false)}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/mobile" onClick={() => setMobileToggle(false)}>
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/ecommerce" onClick={() => setMobileToggle(false)}>
                      E-commerce Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/software" onClick={() => setMobileToggle(false)}>
                      Custom Software Development
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>

            {/* UI/UX Design Dropdown */}
            <li className="menu-item-has-children">
              {/* <Link to="/service/uiux" onClick={(e) => e.preventDefault()}> */}
              <Link to="/service/uiux" onClick={() => setMobileToggle(false)}>
                UI/UX Design
              </Link>
            </li>

            {/* UI/UX Design Dropdown */}
            <li className="menu-item-has-children">
              {/* <Link to="/service/graphics" onClick={(e) => e.preventDefault()}> */}
              <Link to="/service/graphics" onClick={() => setMobileToggle(false)}>
                Graphics
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/service/branding" onClick={() => setMobileToggle(false)}>
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/stationary" onClick={() => setMobileToggle(false)}>
                      Stationary Work
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>

            {/* Marketing Dropdown */}
            <li className="menu-item-has-children">
              {/* <Link to="/service/marketing" onClick={(e) => e.preventDefault()}> */}
              <Link to="/service/marketing" onClick={() => setMobileToggle(false)}>
                Marketing
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/service/media" onClick={() => setMobileToggle(false)}>
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/seo" onClick={() => setMobileToggle(false)}>
                      SEO
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* <li className="menu-item-has-children"> */}
      <li>
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Portfolio
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>          
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li> 
      
      {/* <li className="menu-item-has-children"> */}
      {/* <li> */}
        {/* <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link> */}
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      {/* </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
