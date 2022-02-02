import React from 'react';
import { AbsoluteFill, Img } from 'remotion';

export const SponsorLogo: React.FC<{
  sponsor: string;
}> = ({ sponsor }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Img
        style={{
          width: '30%',
          marginBottom: 30,
        }}
        src={`https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/${sponsor}.png?alt=media`}
      ></Img>
    </AbsoluteFill>
  );
};
