import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { SoccerPlayer } from './SoccerPlayer';

export const Goal: React.FC<{
  firstName: string;
  lastName: string;
  playerNumber: number;
  seasonGoal: number;
  portraitAction: string;
}> = ({ firstName, lastName, seasonGoal, playerNumber, portraitAction }) => {
  return (
    <Background>
      <SoccerPlayer
        firstName={firstName}
        lastName={lastName}
        seasonGoal={seasonGoal}
        portraitAction={portraitAction}
        playerNumber={playerNumber}
      />
    </Background>
  );
};
