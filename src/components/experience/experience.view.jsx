import React, { memo } from 'react'

const _Experience = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="https://podfoods.co/" target="blank">
                  Pod Foods
                </a>
              </h3>
              <div className="subheading mb-3">Front-end Engineer</div>
              <div className="mb-0">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Main project with American customers: <strong>Responsible for develop Front-end (ReactJS, Javascript...)</strong> for web app (web browsers)<br />
                <a href="https://medium.com/@podfoodsco/pod-foods-raises-3m-to-expand-next-generation-distribution-platform-for-emerging-food-beverage-16642aff1bc1" target="blank">
                  <strong>- Pod Foods</strong>
                </a>
                is a software and data-enabled distribution and logistics platform designed to efficiently bring emerging food brands to retailers across the nation.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="https://sun-asterisk.com" target="blank">
                  Sun* Vietnam Inc. (Framgia)
                </a>
              </h3>
              <div className="subheading mb-3">Full Stack Web Developer, NodeJS Trainer</div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Main project with Japanese customers: <strong>Responsible for develop API Back-end (NodeJS, TypeScript, DynamoDB, Amazon Web Services (AWS)...etc)</strong> for web app (web browsers), native apps (IOS, Android). <br />
                The project manage shifts, connect part-time workers with their store managers. <em>(Private Project's Customer)</em>
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Self-building a <strong><em>"Programing course"</em>, teaching NodeJS, Javascript, MongoDB, Bootstrap...etc,</strong> reached more than <strong>50 students</strong> as yet, and this number is still increasing. Look at my introduction video course on youtube or my post on blog:<br />
                <a href="https://trungquandev.com/nodejs-mongodb-xay-dung-mot-ung-dung-messenger-tro-chuyen-truc-tuyen/" target="blank">
                  <strong>&nbsp;- Blog: NodeJS MongoDB Messenger Course</strong>
                </a>
                <br />
                <a href="https://youtu.be/fMlxVDCWPKY" target="blank">
                  <strong>&nbsp;- Youtube: NodeJS MongoDB Messenger Course (Introduction Video).</strong>
                </a>
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Participate in Front-end develop a web app tool for <strong><em>"Shorten link"</em></strong>, using ReactJS, NodeJS. <i>(Private Internal)</i>
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Participate in develop a web app tool for <strong><em>"Personal management"</em></strong>, using VueJS, Laravel, Mysql...etc. <em>(Private Internal)</em>
              </div>
              <div className="mb-0">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Building <strong><em>"Ecommerce website"</em></strong> using PHP, Laravel, Javascript, Mysql Bootstraps...etc, using Pusher to make real-time comments for each product.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2017 - Oct 2019 (2 years 3 months)</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="https://vccorp.vn" target="blank">
                  Vietnam Communication Corporation (VCCorp)
                </a>
              </h3>
              <div className="subheading mb-3">Web Developer Talent Internship</div>
              <div className="mb-1">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Participate in develop real-time chat service with Javascript.
              </div>
              <div className="mb-0">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Develop Back-end website with PHP - Laravel.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2016 - Dec 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="https://www.tigren.com" target="blank">
                  Tigren VietNam Inc.
                </a>
              </h3>
              <div className="subheading mb-3">PHP - Magento Internship</div>
              <div className="mb-0">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                Participate in develop Ecommerce websites using PHP, Magento.
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2015 - Dec 2015</span>
            </div>
          </div>

        </div>

      </section>
  )
}

export const Experience = memo(_Experience)
