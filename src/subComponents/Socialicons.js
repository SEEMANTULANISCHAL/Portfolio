import React from 'react';
import { DarkTheme } from '../components/Themes';
import styled from 'styled-components';
import { Facebook, Github, LinkedIn, Twitter } from '../components/AllSvgs';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

const Socialicons = props => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: 'inherit' }}
          href="https://www.linkedin.com/in/nischal-seemantula-104a46205/"
          target="_blank"
          rel="noopener noreferrer" // Add rel attribute for security
        >
          <LinkedIn
            width={25}
            height={25}
            fill={
              props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
            }
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          href="https://github.com/SEEMANTULANISCHAL"
          target="_blank"
          rel="noopener noreferrer" // Add rel attribute for security
        >
          <Github
            width={25}
            height={25}
            fill={
              props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
            }
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          href="https://facebook.com/NischalSeemantula"
          target="_blank"
          rel="noopener noreferrer" // Add rel attribute for security
        >
          <Facebook
            width={25}
            height={25}
            fill={
              props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
            }
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          href="https://twitter.com/Nischalseemantu"
          target="_blank"
          rel="noopener noreferrer" // Add rel attribute for security
        >
          <Twitter
            width={25}
            height={25}
            fill={
              props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
            }
          />
        </a>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default Socialicons;
