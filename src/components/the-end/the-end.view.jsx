import React from 'react';
import {ReactSVG} from 'react-svg';
import appConfig from '../../app/config';

export const TheEnd = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="the-end">
      <div className="my-auto">
        <h2 className="mb-5">The End</h2>
        <p>
          Finally, I would like to say <strong>"Thank You"</strong> for spent
          time to look at my CV profile.
        </p>
        <p>
          <em>
            You're a flower on earth, let's make your life beautiful and
            meaningful (◕‿↼)
          </em>
        </p>

        <div className="cat-typing">
          <ReactSVG src={appConfig.iconTheEnd} />
        </div>
      </div>
    </section>
  );
};
