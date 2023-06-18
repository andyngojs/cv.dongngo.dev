import React, { memo } from 'react'

const _Skill = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="devicon-react-original colored" title="ReactJS"></i>
            </li>
            <li className="list-inline-item">
              {/* <!-- <i className="fab fa-node-js" title="NodeJS"></i> --> */}
              <i className="devicon-nodejs-plain colored" title="NodeJS"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-typescript-plain colored" title="TypeScript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-amazonwebservices-original colored" title="Amazon Web Services"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-mysql-plain colored" title="MySQL"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-html5-plain-wordmark colored" title="HTML5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-css3-plain-wordmark colored" title="CSS3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-php-plain colored" title="PHP"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-laravel-plain-wordmark colored" title="Laravel"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-github-plain colored" title="GitHub"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-jquery-plain-wordmark colored" title="Jquery"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-bootstrap-plain-wordmark colored" title="Bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-docker-plain-wordmark colored" title="Docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-bower-line-wordmark colored" title="Bower"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-wordpress-plain-wordmark colored" title="Wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-trello-plain-wordmark colored" title="Trello"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-slack-plain-wordmark colored" title="Slack"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-babel-plain colored" title="Babel"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm" title="NPM"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Git, Github for Teamwork
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Amazon Web Services
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Responsive Web Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              ...
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              <i>If you do not have an awesome brain, you have to ceaselessly learn!</i>
            </li>
          </ul>
        </div>
      </section>
  )
}

export const Skill = memo(_Skill)