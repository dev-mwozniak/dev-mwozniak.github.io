import React, { Component } from "react";

import '../../sass/footer.scss';

class Footer extends Component {

  componentDidMount = () => {
    this.displayYear();
  }

  displayYear = () => {
    const year = document.getElementById("year");
    const date = new Date();
    const currentYear = date.getFullYear();
    year.innerHTML = currentYear;
  }

  render() {
    return (
      <footer className="footer row">
        <div className="footer-container">
          <div className="row footer-row">
              
          </div>
          <div className="row footer-row footer-row-second">
            <div className="col-12">
              <div className="col-12 footer-copyright">
                <p>
                  &copy; Copyright <span id="year"></span> by Maciej Woźniak. Wszystkie prawa zastrzeżone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
