import React from 'react';
// hooks
import useApp from './app.hook';
// components
import {
  NavBar,
  About,
  Education,
  Experience,
  Project,
  Skill,
  Modal,
  TheEnd,
} from '../components';

export default function App() {
  useApp();

  return (
    <>
      <NavBar />

      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skill />
        <hr className="m-0" />
        <Project />
        <hr className="m-0" />
        <TheEnd />
      </div>

      <Modal />
    </>
  );
}
