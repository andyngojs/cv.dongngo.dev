import React, {memo, useCallback} from 'react';
import {FaTrophy} from 'react-icons/fa';

const myProjects = [
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Design this <strong>"CV profile online"</strong> with ❤️
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building <strong>MiniGame</strong> - A Mini game based on game
        <a
          target="_blank"
          href="https://www.nytimes.com/games/wordle/index.html">
          {' ' + 'Wordle' + ' '}
        </a>
        , developed on the platforms mobile.
        <em>{'(Project-Based Learning)'}</em>
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building <strong>DobeeRoom</strong> - The platform support students
        looking for rooms
        <em>{'(Graduated-project)'}</em>
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building{' '}
        <a target="_blank" href="https://github.com/andyngojs/led-cube-4x4x4">
          <strong>Led Cube Board</strong>
        </a>{' '}
        and{' '}
        <a target="_blank" href="https://youtu.be/6TXw0TIgGFA">
          <strong>Controller of temperature and humidity </strong>
        </a>
        - Two specialization projects
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building{' '}
        <a
          target="_blank"
          href="https://andyngojs.github.io/who_want_to_be_a_millionaire/">
          <strong>Who Want To Be A Millionaire Game</strong>
        </a>
        - A project of HTML, CSS, and Javascript
        <em>{' ' + '(Project-Based Learning)'}</em>
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building{' '}
        <a target="_blank" href="https://andyngojs.github.io/crush-love">
          <strong>Crush Love</strong>
        </a>
        - A funny project of HTML, CSS, and Javascript
        <em>{' ' + '(Project-Based Learning)'}</em>
      </li>
    ),
  },
  {
    projectElement: (
      <li className="mb-1">
        <FaTrophy className="text-warning m-right" />
        Building{' '}
        <a target="_blank" href="https://andyngojs.github.io/dobee-shop/">
          <strong>DobeeShop</strong>
        </a>{' '}
        and{' '}
        <a target="_blank" href="https://andyngojs.github.io/w3_band/">
          <strong>W3Band </strong>
        </a>
        - Two projects of HTML, CSS and Javascript in the course of{' '}
        <a target="_blank" href="https://fullstack.edu.vn/">
          <strong>F8</strong>
        </a>
        <em>{' ' + '(Project-Based Learning)'}</em>
      </li>
    ),
  },
];

const _Project = () => {
  const renderProjects = useCallback(() => {
    return myProjects.map((item, index) => {
      return <React.Fragment key={index}>{item.projectElement}</React.Fragment>;
    });
  });

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>

        <ul className="fa-ul ul-project mb-0">{renderProjects()}</ul>
      </div>
    </section>
  );
};

export const Project = memo(_Project);
