import React, { Component } from 'react';
import './css/style.css';
import './css/media.css';
import './css/media1600.css';
import './css/media1400.css';
import './css/media1200.css';
import './css/media992.css';
import './css/media768.css';
import './css/media320.css';
import Cinamon from './assets/pictures/img/cinnamon.jpg';
import Clock from './assets/pictures/svg/clock.svg';
import People from './assets/pictures/svg/group.svg';

class App extends Component {
  render() {
    return (
      <div className="App">


          <header className="header">

              <div className="header-wrapper">

                  <img src="../src/assets/pictures/svg/logowhite.svg" className="header-logo-mob" alt=""/>

                  <nav className="header-navigation">

                      <ul className="navigation-list">
                          <li className="navigation-item"><a href="#" className="navigation-item-link">Home</a></li>
                          <li className="navigation-item"><a href="#" className="navigation-item-link">My
                              structure</a></li>
                          <li className="navigation-item"><a href="#" className="navigation-item-link">Instruments</a>
                          </li>
                          <li className="navigation-item"><a href="#"
                                                             className="navigation-item-link">School</a></li>
                          <li className="navigation-item"><a href="#" className="navigation-item-link">Shop</a></li>
                          <li className="navigation-item"><a href="#" className="navigation-item-link">Chat</a></li>
                      </ul>

                      <form className="header-form" action="">
                          <input id="search" name="search" type="search" placeholder="Search..."/>
                              <input id="search_submit" value="Research" type="submit"/>
                      </form>

                      <a href="#" className="logout-link">Logout</a>

                  </nav>

              </div>

          </header>

          <main className="main">

              <div className="wrapper">

                  <article className="newsfeed-post">

                      <figure className="newsfeed__image gradient">
                          <img src={Cinamon} className="newsfeed-img" alt=""/>
                          <figcaption>
                              <h2 className="newsfeed-caption">Lorem ipsum</h2>
                          </figcaption>
                      </figure>

                      <div className="post-info__container">

                          <img src="../src/assets/pictures/svg/calendar.svg" className="post-icon" alt=""/>
                          <time className="post-data post-date">08.08.2017</time>

                      </div>

                      <div className="post-info__container">

                          <img src={Clock} className="post-icon" alt=""/>
                          <time className="post-data post-time">11:11</time>

                      </div>

                      <div className="post-info__container--right">

                          <img src={People} className="post-icon" alt=""/>
                          <span className="post-data post-wievers">2K visitors</span>

                      </div>

                      <h1 className="post-caption">Lorem ipsum</h1>
                      <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ultricies
                          dictum. Phasellus ultrices, libero ac scelerisque congue, diam sem tristique urna, ut tincidunt diam
                          nibh in ligula. Vestibulum sapien ex, suscipit et risus at, lobortis euismod nulla. Proin nec ex felis.
                          Suspendisse dignissim ipsum arcu. Duis finibus laoreet tempus. </p>

                      <a href="#" className="post-readmore-link">Read more</a>

                  </article>

                  <article className="newsfeed-post">

                      <figure className="newsfeed__image gradient">
                          <img src={Cinamon} className="newsfeed-img" alt=""/>
                          <figcaption>
                              <h2 className="newsfeed-caption">Lorem ipsum</h2>
                          </figcaption>
                      </figure>

                      <div className="post-info__container">

                          <img src="../src/assets/pictures/svg/calendar.svg" className="post-icon" alt=""/>
                          <time className="post-data post-date">08.08.2017</time>

                      </div>

                      <div className="post-info__container">

                          <img src={Clock} className="post-icon" alt=""/>
                          <time className="post-data post-time">11:11</time>

                      </div>

                      <div className="post-info__container--right">

                          <img src={People} className="post-icon" alt=""/>
                          <span className="post-data post-wievers">2K visitors</span>

                      </div>

                      <h1 className="post-caption">Lorem ipsum</h1>
                      <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ultricies
                          dictum. Phasellus ultrices, libero ac scelerisque congue, diam sem tristique urna, ut tincidunt diam
                          nibh in ligula. Vestibulum sapien ex, suscipit et risus at, lobortis euismod nulla. Proin nec ex felis.
                          Suspendisse dignissim ipsum arcu. Duis finibus laoreet tempus. </p>

                      <a href="#" className="post-readmore-link">Read more</a>

                  </article>

                  <article className="newsfeed-post">

                      <figure className="newsfeed__image gradient">
                          <img src={Cinamon} className="newsfeed-img" alt=""/>
                          <figcaption>
                              <h2 className="newsfeed-caption">Lorem ipsum</h2>
                          </figcaption>
                      </figure>


                      <div className="post-info__container">

                          <img src="../src/assets/pictures/svg/calendar.svg" className="post-icon" alt=""/>
                          <time className="post-data post-date">08.08.2017</time>

                      </div>

                      <div className="post-info__container">

                          <img src={Clock} className="post-icon" alt=""/>
                          <time className="post-data post-time">11:11</time>

                      </div>

                      <div className="post-info__container--right">

                          <img src={People} className="post-icon" alt=""/>
                          <span className="post-data post-wievers">2K visitors</span>

                      </div>

                      <h1 className="post-caption">Lorem ipsum</h1>
                      <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ultricies
                          dictum. Phasellus ultrices, libero ac scelerisque congue, diam sem tristique urna, ut tincidunt diam
                          nibh in ligula. Vestibulum sapien ex, suscipit et risus at, lobortis euismod nulla. Proin nec ex felis.
                          Suspendisse dignissim ipsum arcu. Duis finibus laoreet tempus. </p>

                      <a href="#" className="post-readmore-link">Read more</a>

                  </article>

              </div>

          </main>

          <footer className="footer">
              <p className="footer-text">All rights reserved.
                  <br/> 2017 | <span className="diavita">DiaVita</span></p>
          </footer>
      </div>
    );
  }
}

export default App;
