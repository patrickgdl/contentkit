import React, { Children } from 'react';
import { AbsoluteFill } from 'remotion';
import { SoccerPlayer } from './SoccerPlayer';
import { Stadium } from './Stadium';
import texture from './texture.jpg';

const container: React.CSSProperties = {
  backgroundColor: '#222',
};

const background: React.CSSProperties = {
  backgroundImage: `url(${texture})`,
  backgroundSize: 'cover',
  opacity: 0.12,
};

export const Background: React.FC<{}> = ({ children }) => {
  return (
    <AbsoluteFill style={container}>
      <AbsoluteFill style={background}></AbsoluteFill>
      <Stadium></Stadium>

      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};
