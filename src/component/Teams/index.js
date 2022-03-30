import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import flogo from "../../assets/image/logo2.png";
import Logo1 from "../../assets/image/icon1.png";
import Logo2 from "../../assets/image/icon2.png";
import Logo3 from "../../assets/image/icon3.png";
// import U1 from "../../assets/image/u1.png";
// import U2 from "../../assets/image/u2.png";
// import U3 from "../../assets/image/u3.png";
// import U4 from "../../assets/image/u4.png";
// import U5 from "../../assets/image/u5.png";
import user1 from "../../assets/image/user1.jpg";
import user2 from "../../assets/image/user2.jpg";
import user3 from "../../assets/image/user3.jpg";
import user4 from "../../assets/image/user4.jpg";
const Index = () => {
  return (
    <>
      <header id="hero" className="hero overlay">
        <Navbar variant="dark" expand="md">
          <Container>
            <a href="http://xvelopers.com/index.html" className="brand">
              <img src={Logo} alt="Knowledge" />
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="http://xvelopers.com/">Home</Nav.Link>
                <Nav.Link href="http://xvelopers.com/html/knowledge/Demo2/archive.html">
                  Archive
                </Nav.Link>
                <Nav.Link href="http://xvelopers.com/html/knowledge/Demo2/browse.html">
                  Browse
                </Nav.Link>
                <Nav.Link href="http://xvelopers.com/html/knowledge/Demo2/login.html">
                  Login
                </Nav.Link>
                <Nav.Link
                  href="http://xvelopers.com/html/knowledge/Demo2/register.html"
                  className="btn btn-success nav-btn"
                >
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="masthead text-center">
          <Container>
            <div className="row">
              <div className="col-md-8  col-md-offset-2 mx-auto">
                <h1>Knowledgebase</h1>
                <p className="lead text-muted">
                  Sed eget orci eleifend enim mattis suscipit. Suspendisse potenti non ipsum.
                </p>
                <form>
                  <input type="text" className="search-field" placeholder="Search Something ... " />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
                <a href="http://xvelopers.com/html/knowledge/Demo2/#" className="btn btn-hero">
                  <span className="icon-git"></span> Github Project
                  <span className="icon-right"></span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/*<!-- Features --> */}

      <section id="features" className="features bgc-light-gray">
        <div className="container">
          <div className="row features-section">
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon">
                  <img src={Logo1} alt="" />
                </span>
                <h3>Help &amp; Documentation</h3>
                <p className="text-muted">
                  Unlike other Frameworks which try to cover everything, It has been built
                  specifically for wordpress
                </p>
              </div>
            </div>
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon">
                  <img src={Logo2} alt="" />
                </span>
                <h3>Developer Resources</h3>
                <p className="text-muted">
                  An incredibly codex has been created for you to use as reference when developing
                  extensions
                </p>
              </div>
            </div>
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon">
                  <img src={Logo3} alt="" />
                </span>
                <h3>Community Support</h3>
                <p>
                  The source code is available on GitHub, you can grab it and twist it to your
                  heart’s content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  notification */}

      <section className="notification ">
        <Container>
          <div className=" notification-ui_dd">
            <div className="notification-ui_dd-header">
              <h3 className="text-center">Notification</h3>
            </div>
            <div className="notification-ui_dd-content">
              <a href="#!" className="notification-list notification-list--unread text-dark">
                <div className="notification-list_img">
                  <img src={user1} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>John Doe</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>10 mins ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list notification-list--unread text-dark">
                <div className="notification-list_img">
                  <img src={user2} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Richard Miles</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list text-dark">
                <div className="notification-list_img">
                  <img src={user3} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Brian Cumin</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list text-dark">
                <div className="notification-list_img">
                  <img src={user4} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Lance Bogrol</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list notification-list--unread text-dark">
                <div className="notification-list_img">
                  <img src={user1} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>John Doe</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>10 mins ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list notification-list--unread text-dark">
                <div className="notification-list_img">
                  <img src={user2} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Richard Miles</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list text-dark">
                <div className="notification-list_img">
                  <img src={user3} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Brian Cumin</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
              <a href="#!" className="notification-list text-dark">
                <div className="notification-list_img">
                  <img src={user4} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Lance Bogrol</b> <br />
                    <span className="text-muted">reacted to your post</span>
                  </p>
                  <p className="nt-link text-truncate">How to travel long way home from here.</p>
                </div>
                <p>
                  <small>1 day ago</small>
                </p>
              </a>
            </div>
            {/*   <div className="notification-ui_dd-footer">
              <a href="#!" className="btn btn-success btn-block">
                View All
              </a>
  </div>*/}
          </div>
        </Container>
      </section>

      {/*<!-- Topics -->*/}
      <section className="topics">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <header>
                <h2>
                  <span className="icon-pages"></span>Explore Topics
                </h2>
                <p>
                  We did our best to cover all topics related to this product. Each section have
                  number which represent number of topic in each category.
                </p>
              </header>
              <div className="row">
                <div className="col-sm-6">
                  <div className="topics-list">
                    <h3>
                      <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                        <span className="badge">19</span>Introduction
                      </a>
                    </h3>
                    <ul>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/single.html">
                          How to use this documentation?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/single.html">
                          How to find topics?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/single.html">
                          What is included and why?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/single.html">
                          Basic knowledge requirments.
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/single.html">
                          Getting Started &amp; What is next.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="topics-list">
                    <h3>
                      <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                        <span className="badge">7</span>Intallation &amp; Activation
                      </a>
                    </h3>
                    <ul>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to use this documentation?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to find topics?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          What is included and why?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Basic knowledge requirments.
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Getting Started &amp; What is next.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="topics-list">
                    <h3>
                      <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                        <span className="badge">5</span>Import &amp; Export
                      </a>
                    </h3>
                    <ul>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to use this documentation?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to find topics?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          What is included and why?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Basic knowledge requirments.
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Getting Started &amp; What is next.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="topics-list">
                    <h3>
                      <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                        <span className="badge">17</span>Settings &amp; Configuration
                      </a>
                    </h3>
                    <ul>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to use this documentation?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to find topics?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          What is included and why?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Basic knowledge requirments.
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Getting Started &amp; What is next.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget widget-support-forum">
                  <span className="icon icon-forum"></span>
                  <h4>Looking for help? Join Community</h4>

                  <p>
                    Couldn’t find what your are looking for ? Why not join out support forums and
                    let us help you.
                  </p>

                  <a href="http://xvelopers.com/html/knowledge/Demo2/#" className="btn btn-success">
                    Support Forum
                  </a>
                </div>

                {/* <!--******************************* Lists *******************************-->*/}

                <div className="pt-50">
                  <div className="topics-list">
                    <h3>
                      <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                        <span className="badge">10</span>API Guide Lines
                      </a>
                    </h3>
                    <ul>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to use this documentation?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          How to find topics?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          What is included and why?
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Basic knowledge requirments.
                        </a>
                      </li>
                      <li>
                        <a href="http://xvelopers.com/html/knowledge/Demo2/#">
                          Getting Started &amp; What is next.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="topics-btn text-center">
              <a
                className="btn btn-default"
                href="http://xvelopers.com/html/knowledge/Demo2/archive.html"
              >
                <span className="icon-adn"></span> Explore All Topics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- Support Section -->*/}

      {/* <section className="support-section text-white section">
        <div className="container">
          <div className="row">
            <div className="divider">
              <i className="fa fa-support"></i>
            </div>
            <header className="text-center">
              <h2 className="section-title">Get Support From Real People</h2>
              <p className="section-subtitle">
                When you are stuck in something don’t waste your time just let us know we are here
                to help you
              </p>
            </header>
            <ul className="members">
              <li>
                <img src={U1} alt="" />
              </li>
              <li>
                <img src={U2} alt="" />
              </li>
              <li>
                <img src={U3} alt="" />
              </li>
              <li>
                <img src={U4} alt="" />
              </li>
              <li>
                <img src={U5} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>*/}

      {/*<!-- Call To Action -->*/}

      {/*  <section className="section">
        <div className="container">
          <div className="row call-to-action">
            <div className="col-lg-1">
              <span className="icon icon-envelope"></span>
            </div>
            <div className="col-lg-9">
              <h3>Contact Us</h3>
              <p>If you have question which is beyond this knowledgebase Kindly contact us</p>
            </div>
            <div className="col-lg-2">
              <a
                href="http://xvelopers.com/html/knowledge/Demo2/#"
                className="btn btn-success btn-action"
              >
                Write to Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

   <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <a href="http://xvelopers.com/html/knowledge/Demo2/#" className="brand">
                <img src={flogo} alt="Knowledge" />
                <span className="circle"></span>
              </a>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-8">
              <ul className="footer-links">
                <li>
                  <a href="http://xvelopers.com/html/knowledge/Demo2/#">Features</a>
                </li>
                <li>
                  <a href="http://xvelopers.com/html/knowledge/Demo2/#">Blog</a>
                </li>
                <li>
                  <a href="http://xvelopers.com/html/knowledge/Demo2/#">Community</a>
                </li>
                <li>
                  <a href="http://xvelopers.com/html/knowledge/Demo2/login.html">Login</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="copyright">
                <p>© 2016 knowledge Copyrights</p>
              </div>
            </div>
          </div>
        </div>
     </footer>*/}
    </>
  );
};

export default Index;
