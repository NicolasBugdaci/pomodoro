import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-light  bg-dark justify-content-center mb-4">
          <span class="navbar-brand text-white mb-0 h1">
            <h1>
              <a
                href="https://fr.wikipedia.org/wiki/Technique_Pomodoro"
                target="_blank"
                class="text-decoration-none text-white"
              >
                Technique Pomodoro
              </a>
            </h1>
          </span>
        </nav>
      </div>
    );
  }
}

export default Header;
