import React, { memo } from 'react'

const _Education = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                <a href="http://actvn.edu.vn/" target="blank">
                  Academy Of Cryptography Techniques
                </a>
              </h3>
              <div className="subheading mb-3">
                I graduated with a college degree of Information Systems Security Engineer, but I developed my career as a developer.
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                When I was a student, I studied a lot about career development in information technology and then I decided to choose web programming because I particularly like customize and draw on my websites.
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                I really enjoy my school, where I make new friends and we study together. I also had moments standing on lectern to teach my classmates about programming.
              </div>
              <div className="mb-2">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                After 5 years of college, I succeeded with graduate thesis on programming:
                <a>
                  <strong>NodeJS and MongoDB, building an online chat messenger application.</strong>
                </a>
              </div>
              <div className="m-0">
                <i className="fa-custom-list fa fa-bookmark text-warning"></i>&nbsp;
                My graduate thesis was granted <strong>9.7/10</strong>, reached <strong>the top 3rd highest score</strong> in the whole school. I was very happy about that moment.
                You can see that moment of mine on youtube:
                <a href="https://youtu.be/uSuvb2ah2_w" target="blank">
                  <strong>&nbsp;- https://youtu.be/uSuvb2ah2_w</strong>
                </a>
              </div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2013 - June 2018</span>
            </div>
          </div>

          {/* <!-- <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div> --> */}

        </div>
      </section>
  )
}

export const Education = memo(_Education)
