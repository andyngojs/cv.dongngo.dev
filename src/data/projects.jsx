import {FaTrophy} from 'react-icons/fa';

export const myProjects = [
  {
    projectElement: (
      <li>
        <FaTrophy className="text-warning m-right" />
        Design this <strong>"CV profile online"</strong> with ❤️
      </li>
    ),
  },
  {
    projectElement: (
      <li>
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
      <li>
        <FaTrophy className="text-warning m-right" />
        Building <strong>DobeeRoom</strong> - The platform support students
        looking for rooms
        <em>{'(Graduated-project)'}</em>
      </li>
    ),
  },
];
