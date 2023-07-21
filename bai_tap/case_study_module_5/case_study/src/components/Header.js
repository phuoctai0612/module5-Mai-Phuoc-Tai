
function Header(){
    return(
        <div>
        <header className="header sticky sticky--top js-header">
        <div className="grid">
          <nav className="navigation">
            <ul className="navigation__list navigation__list--inline">
              <li className="navigation__item"><span className="navigation__link " style={{fontSize: 'x-small'}}>
                  <i className="fa-sharp fa-solid fa-location-dot" />
                  103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</span>
              </li>
              <li className="navigation__item"><span className="navigation__link" style={{fontSize: 'x-small'}}><i className="fa-solid fa-phone" />
                  84-236-3847 333/888</span></li>
              <li style={{textAlign: 'left', fontSize: 'x-small'}}><span>Date time: </span>  <span className="navigation__item" id="current-time" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html"><span style={{color: 'green'}}>Fu</span>rama</a>
          <div className="site-menu-toggle js-site-menu-toggle  ml-auto" data-aos="fade" data-toggle="collapse" data-target="#templateux-navbar-nav" aria-controls="templateux-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </div>
          {/* END menu-toggle */}
          <div className="collapse navbar-collapse" id="templateux-navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-rooms">Rooms</a></li>
              <li className="nav-item"><a className="nav-link" href="edit.html">Menus</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-events">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <script>
      var currentdate = new Date();
      var datetime = + currentdate.getUTCDate() + "/" + ((currentdate.getUTCMonth()*1)+1)
              + "/" + currentdate.getUTCFullYear()+" "
              + currentdate.getHours() + ":"
              + (+currentdate.getMinutes())
      document.getElementById("current-time").innerHTML=datetime;
    </script>
    </div>
    
  );
}
export default Header;