import React from 'react';
import { Series } from 'remotion';
import { Goal } from './Goal';
import { Minute } from './Minute';
import { NewScore } from './NewScore';
import { Score } from './Score';

export const MainComp: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
  minute: number;
  awayScore: number;
  homeScore: number;
  awayTeam: string;
  sponsor: string;
  portraitAction: string;
  playerNumber: number;
}> = ({
  firstName,
  lastName,
  seasonGoal,
  minute,
  awayScore,
  awayTeam,
  homeScore,
  sponsor,
  portraitAction,
  playerNumber,
}) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={40}>
        <Minute minute={minute}></Minute>
      </Series.Sequence>
      <Series.Sequence durationInFrames={70}>
        <Score></Score>
      </Series.Sequence>
      <Series.Sequence durationInFrames={90}>
        <Goal
          firstName={firstName}
          lastName={lastName}
          seasonGoal={seasonGoal}
          portraitAction={portraitAction}
          playerNumber={playerNumber}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={65}>
        <NewScore
          awayScore={awayScore}
          awayTeam={awayTeam}
          homeScore={homeScore}
          sponsor={sponsor}
        />
      </Series.Sequence>
    </Series>
  );
};
