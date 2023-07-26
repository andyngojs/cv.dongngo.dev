import React, {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';

const myEducation = [
  {
    university: 'Hanoi Open University',
    website: 'https://hou.edu.vn',
    schoolYear: '2018-2022',
    subHeading:
      'I graduated with a college of electronic and telecommunication engineer, but i developed my career as a software developer.',
    description: 'Major: Electronic and Telecommunication Engineering.',
  },
];

const _Education = () => {
  const renderEducation = useCallback(() => {
    return myEducation.map((item, index) => (
      <div
        key={index}
        className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-2">
            <a href={item.website} target="blank">
              {item.university}
            </a>
          </h3>
          <div className="subheading mb-3">{item.subHeading}</div>
          {item.description && (
            <>
              <div className="mb-2">
                <FaBookmark className="text-warning m-right" />
                {' ' + item.description}
              </div>
            </>
          )}

          <div className="mb-2">
            <FaBookmark className="text-warning m-right" /> Building{' '}
            <a
              target="_blank"
              href="https://github.com/andyngojs/led-cube-4x4x4">
              Led Cube Board
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://youtu.be/6TXw0TIgGFA">
              Controller of temperature and humidity
            </a>
            - Two final-term specialization projects
          </div>

          <div className="mb-2">
            <FaBookmark className="text-warning m-right" />
            I did learn courses on <a target={'_blank'} href={"https://f8.edu.vn"}>F8</a>, such as:
              HTML, CSS ,
              Responsive web design ,
              Javascript Basic and Advanced , ReactJS,...etc
          </div>

          <div className="mb-2">
            <FaBookmark className="text-warning m-right" />
            When I was a 2-year student, I did learn courses on <a target={'_blank'} href={"https://codelearn.io"}>CodeLearn</a>, such as Javascript Basic, C++ Basic, ...etc. <br/>
            I did join the CodeLearn community and wrote blogs there. Such as: <br/>
            <a target={'_blank'} href={"https://codelearn.io/sharing/loop-video-voi-thoi-gian-theo-y-muon"}>
              Lặp Lại Video Youtube Với Thời Gian Theo Ý Muốn
            </a> <br/>
            <a target={'_blank'} href={"https://codelearn.io/sharing/javascript-nen-hoc-hay-khong"}>
              Không Nên Học Javascript, Liệu Có Đúng Như Vậy?
            </a> <br/>
          </div>

        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{item.schoolYear}</span>
        </div>
      </div>
    ));
  }, []);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        {renderEducation()}
      </div>
    </section>
  );
};

export const Education = memo(_Education);
