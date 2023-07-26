import {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';
import {getRelativeTime} from '../../utils';

const myEducation = [
  {
    university: 'Hanoi Open University',
    website: 'https://hou.edu.vn',
    schoolYear: '2018 - 2022',
    startDate: '2018',
    endDate: '2022',
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
            <a rel="noreferrer" href={item.website} target="_blank">
              {item.university}
            </a>
          </h3>
          <div className="subheading mb-3 mb-sm-2">{item.subHeading}</div>
          <div className="resume-date d-lg-none d-sm-block text-md-right mb-2">
            {item.schoolYear && (
              <span className="text-primary">
                {item.schoolYear +
                  ' (' +
                  getRelativeTime(item.startDate, item.endDate) +
                  ')'}
              </span>
            )}
          </div>
          {item.description && (
            <>
              <div className="mb-2">
                <FaBookmark className="text-warning m-right" />
                {item.description}
              </div>

              <div className="mb-2">
                <FaBookmark className="text-warning m-right" />
                When I was a student, I studied a lot about career development
                in information technology and then I learned courses on software
                programing on the{'  '}
                <a
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={'https://codelearn.io'}>
                  CodeLearn
                </a>
                , such as <strong>Javascript Basic</strong>,{' '}
                <strong>C++ Basic</strong>, ...etc. <br />
                I did join the CodeLearn community and wrote blogs on Codelearn.
                Such as <br />
                <a
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={
                    'https://codelearn.io/sharing/loop-video-voi-thoi-gian-theo-y-muon'
                  }>
                  Lặp Lại Video Youtube Với Thời Gian Theo Ý Muốn
                </a>{' '}
                <br />
                <a
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={
                    'https://codelearn.io/sharing/javascript-nen-hoc-hay-khong'
                  }>
                  Không Nên Học Javascript, Liệu Có Đúng Như Vậy?
                </a>{' '}
                <br />
              </div>

              <div className="mb-2">
                <FaBookmark className="text-warning m-right" />I also learned on{' '}
                <a
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={'https://f8.edu.vn'}>
                  F8
                </a>{' '}
                as an online form with free courses about web development such
                as
                <strong> HTML, CSS</strong>,
                <strong> Responsive web design</strong>,
                <strong> Javascript Basic and Advanced</strong>,
                <strong> ReactJS</strong>, ...etc. I also wrote blogs there.
                Such as:
                <br />
                <a
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={'https://f8.edu.vn/blog/thoi-gian-va-dong-luc.html'}>
                  Thời gian và Động lực
                </a>
              </div>

              <div className="mb-2">
                <FaBookmark className="text-warning m-right" /> Building{' '}
                <a
                  rel={'noreferrer'}
                  target="_blank"
                  href="https://github.com/andyngojs/led-cube-4x4x4">
                  Led Cube Board
                </a>{' '}
                and{' '}
                <a
                  rel={'noreferrer'}
                  target="_blank"
                  href="https://youtu.be/6TXw0TIgGFA">
                  Controller of temperature and humidity
                </a>
                - Two final-term specialization projects.
              </div>
            </>
          )}
        </div>

        <div className="resume-date d-none d-lg-block text-md-right">
          {item.schoolYear && (
            <span className="text-primary">
              {item.schoolYear +
                ' (' +
                getRelativeTime(item.startDate, item.endDate) +
                ')'}
            </span>
          )}
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
