import React, {memo, useCallback} from 'react';

const NAV_BAR_LIST = [
  {
    id: '#about',
    name: 'About',
  },
  {
    id: '#experience',
    name: 'Experience',
  },
  {
    id: '#education',
    name: 'Education',
  },
  {
    id: '#skills',
    name: 'Skills',
  },
  {
    id: '#projects',
    name: 'Projects',
  },
  {
    id: '#the-end',
    name: 'The End',
  },
];

const _NavBarList = () => {
  const renderItem = useCallback(() => {
    return NAV_BAR_LIST.map((item, index) => (
      <li className="nav-item" key={item.id}>
        <a className="nav-link js-scroll-trigger" href={item.id}>
          {item.name}
        </a>
      </li>
    ));
  }, []);

  return <ul className="navbar-nav">{renderItem()}</ul>;
};

export const NavBarList = memo(_NavBarList);
