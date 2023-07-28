function Footer(){

    return(
        <footer className="section footer-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Rooms</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5">
              <ul className="list-unstyled link">
                <li><a href="#">The Rooms &amp; Suites</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Restaurant</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-5 pr-md-5 contact-info">
              {/* <li>198 West 21th Street, <br> Suite 721 New York NY 10016</li> */}
              <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary" />Address:</span> <span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</span></p>
              <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary" />Phone:</span> <span> (+1) 435 3533</span></p>
              <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary" />Email:</span> <span> info@yourdomain.com</span></p>
            </div>
            <div className="col-md-3 mb-5">
              <p>Sign up for our newsletter</p>
              <form action="#" className="footer-newsletter">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email..." />
                  <button type="submit" className="btn"><span className="fa fa-paper-plane" /></button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-5">
            <p className="col-md-8 text-left">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart text-primary" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <p className="col-md-4 text-right social">
              <a href="#"><span className="fa fa-tripadvisor" /></a>
              <a href="#"><span className="fa fa-facebook" /></a>
              <a href="#"><span className="fa fa-twitter" /></a>
              <a href="#"><span className="fa fa-linkedin" /></a>
              <a href="#"><span className="fa fa-vimeo" /></a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
export default Footer;