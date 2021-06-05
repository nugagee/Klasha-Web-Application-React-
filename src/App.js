import './App.css';
import React, {Component} from 'react';
import Logo from "./assets/logo.png";
import User from "./assets/user.png";



function App() {



  return (
    <div className="App">
        <input id="bar" type="checkbox" />

      <div className="container">
        <div className="nav">
          <img src={Logo} alt="Klasha" />

          <div className="main-nav">
            <h2 className="nav-title">Main pages</h2>
            <div className="main-links">
              <div className="main-link active">
                <i class="fa fa-qrcode" />
                <h2>Dashboard</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-tasks" />
                <h2>Balances</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-handshake-o" />
                <h2>Customers</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-line-chart" />
                <h2>Analytics</h2>
              </div>
            </div>
          </div>
          
          <div className="main-nav">
            <h2 className="nav-title">General</h2>
            <div className="main-links">
              <div className="main-link">
                <i class="fa fa-sliders" />
                <h2>Settings</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-star-o" />
                <h2>Team</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-phone" />
                <h2>Contact</h2>
              </div>
              <div className="main-link">
                <i class="fa fa-sign-out" />
                <h2>Logout</h2>
              </div>
            </div>
          </div>

        </div>
        <div className="section">
            <div className="section-head">
              <div id="title">
                <label for="bar">
                  <i class="fa fa-bars" />
                </label>
                <h2 >Balances</h2>
                <p>Today, 5th June 2021</p>
              </div>
              <div id="icon">
                <i class="fa fa-bell-o" />
                <img src={User} alt="user"/>
              </div>
            </div>

            <div className="balance-section">

              <div className="total-bal">
                <div id="tot">
                  <p>Total account balance</p>
                  <div id="arrow">
                    <h4>USD</h4>
                    <i class="fa fa-chevron-down" />
                  </div>
                </div>
                <div className="val">
                  <div id="value">
                    <h1>$5,332.18</h1>
                    <p>1USD=381.97 NGN</p>
                  </div>
                  <div id="currency">
                    <p>KES</p>
                    <p>NGN</p>
                    <p>GHC</p>
                  </div>
                </div>
              </div>

              <div className="fund-hold">
                <p>Funds on hold</p>
                <h2>$5,332.18</h2>
              </div>
            </div>
            
            <div className="search-sec">
              <h2>Payout table</h2>
              <div className="search">
                <div id="search">
                  <input type="text" placeholder="Search something..." />
                  <i class="fa fa-search" />
                </div>
                <div id="cal">
                  <button id="calend">June 2021</button>
                  <i class="fa fa-calendar" />
                </div>
                <button id="pay">Payout</button>
              </div>
            </div>
            <div className="tab">
            <div className="table head">
              <p className="id">Payout ID</p>
              <p className="source">Source</p>
              <p className="dat">Date</p>
              <p className="amount">Amount</p>
            </div>
            <div className="table body">
              <p className="id">KLA12578DHQ</p>
              <p className="source">Vel pellentesque ornare</p>
              <p className="dat">25th November, 2020</p>
              <p className="amount">$1,200</p>
            </div>
            <div className="table body">
              <p className="id">KLA12578DHQ</p>
              <p className="source">Vel pellentesque ornare</p>
              <p className="dat">25th November, 2020</p>
              <p className="amount">$1,200</p>
            </div>
            <div className="table body">
              <p className="id">KLA12578DHQ</p>
              <p className="source">Vel pellentesque ornare</p>
              <p className="dat">25th November, 2020</p>
              <p className="amount">$1,200</p>
            </div>
            <div className="table body last">
              <p className="id">KLA12578DHQ</p>
              <p className="source">Vel pellentesque ornare</p>
              <p className="dat">25th November, 2020</p>
              <p className="amount">$1,200</p>
            </div>
            </div>
            
            <div className="see-more">
              <p>See more</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
