import * as React from "react";
import './App.css';
import MainBody from "./MainBody";
import linkedinimage from './images/LinkedInImage.png'
import githubimage from './images/GitHubImage.png'


function App() {
  return (
      <div className="WholePage">
        <MainBody></MainBody>
        <div className="Footer">
            <div className="FooterContent">
              <div className="LinkImage">
                <a href="https://www.linkedin.com/in/ryan-fell1/">
                  <img src={linkedinimage} className="GitHubImage"/>
                </a>
              </div>
              <div className="ContactInfo">
                <div className="ContactText">
                  Contact Me!
                  <br/>
                  Email: ryanfell10@gmail.com
                  <br/>
                  Phone: 562-619-5319
                </div>
              </div>
              <div className="LinkImage">
                <a href="https://github.com/RyanFellDown">
                  <img src={githubimage} className="GitHubImage"/>
                </a>
              </div>
            </div>
        </div>
      </div>
  );
}

export default App;