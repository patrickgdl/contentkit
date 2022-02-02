import React from 'react';
import { Img } from 'remotion';

export const Stadium: React.FC = () => {
  return (
    <Img
      style={{
        position: 'absolute',
        bottom: 0,
        height: '100%',
        mixBlendMode: 'soft-light',
        opacity: 0.2,
      }}
      src="https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/arena-baixada.jpeg?alt=media"
    ></Img>
  );
};
