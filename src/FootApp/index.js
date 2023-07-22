import React from 'react';
import './FootApp.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function FootApp () {

  const linkGitHub = () => {
    window.open('https://github.com/rodragon737');
  };

  const linkLinkedin = () => {
    window.open('https://www.linkedin.com/in/rodrigo-rosales-18626b33/');
  };

  const onClickMailtoHandler = () => {
    window.location.href = ('mailto:rosales.rodrigo.martin@gmail.com?subject=Hola%20Rodrigo%20me%20gustaria%20contactarte?body=Hola%20Rodrigo%20contato%20por');
  };

  return (
    <div className='DivSearch'>
      <button className='MediaButtonG' onClick={linkGitHub} ><AiFillGithub /></button>
      <ul></ul>
      <button className='MediaButtonL' onClick={linkLinkedin} ><AiFillLinkedin /></button>
      <ul></ul>
      <button className='DevAvatar' onClick={onClickMailtoHandler}></button>
    </div>
  );
}

export { FootApp };