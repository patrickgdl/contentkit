import React from 'react';
import { Img } from 'remotion';

export const TeamLogo: React.FC<{
  team: string;
}> = ({ team }) => {
  return (
    <Img
      style={{
        height: 180,
        width: 180,
      }}
      src={`https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/${team}.png?alt=media`}
    />
  );
};
