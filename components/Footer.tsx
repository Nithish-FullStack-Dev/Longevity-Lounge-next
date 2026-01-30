const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src="./assets/images/logo.png" alt="Longevity Lounge Logo" />
          </div>

          <div className="footer-con">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Address</h4>
              <p>
                CHR Lane, Rd Number 1 Seven Hills Colony Gachibowli, Hyderabad,
                Telangana 500032
              </p>
              <div className="follow-us">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
