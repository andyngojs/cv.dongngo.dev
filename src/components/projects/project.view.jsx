import React, { memo } from "react";

const _Project = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Write tech blog since 2016 -
              <a href="https://trungquandev.com" target="blank">
                <strong><em>https://trungquandev.com</em></strong>
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Front-End Engineer at
              <a href="https://podfoods.co/" target="blank">
                  <strong>Pod Foods</strong>
              </a>. Responsible for develop Front-end <strong>(ReactJS, Javascript...)</strong> for web app (web browsers)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Back-End API develop <strong>(NodeJS, TypeScript, DynamoDB, Amazon Web Services (AWS)...etc)</strong> for web app (web browsers), native apps (IOS, Android). <em>(Private Customer)</em>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Self-building a 
              <a href="https://trungquandev.com/nodejs-mongodb-xay-dung-mot-ung-dung-messenger-tro-chuyen-truc-tuyen/" target="blank">
                <strong><em>"Programing course", teaching NodeJS, Javascript, MongoDB...etc</em></strong>
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Front-End develop a web app tool for <strong><em>"Shorten link"</em></strong> <em>(Private Internal)</em>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Develop a web app tool for <strong><em>"Personal management"</em></strong> <em>(Private Internal)</em>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Building
              <a href="https://framgia-event.trungquandev.com/" target="blank">
                <strong><em>"Event organization website"</em></strong>
              </a>
              <em>(Project-Based Learning)</em>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Building
              <a href="https://bakeryshopdemo.trungquandev.com/" target="blank">
                <strong><em>"Ecommerce website"</em></strong>
              </a>
              <em>(Project-Based Learning)</em>
            </li>
            <li>
              <i className="fa-li fa fa-user text-warning"></i>
              Design this <strong><em>"CV profile online"</em></strong> with
              <span role="img" aria-label="heart" className="icon-heart">❤️</span>
            </li>
          </ul>
        </div>
      </section>
  )
};

export const Project = memo(_Project);
