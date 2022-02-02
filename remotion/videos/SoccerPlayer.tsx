import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

import { VIDEO_HEIGHT } from '../../utils/infos';
import { Background } from './Background';
import { Carola } from './Carola';
import { DefaultSoccerPlayer } from './DefaultSoccerPlayer';
import { Jana } from './Jana';
import { SlidingText } from './SlidingText';
import { RED } from './colors';
import { useFont } from './use-font';

export const SoccerPlayer: React.FC<{
  firstName: string;
  lastName: string;
  seasonGoal: number;
  playerNumber: number;
  portraitAction: string;
}> = ({ firstName, lastName, seasonGoal, playerNumber, portraitAction }) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  useFont();

  const translate = height === VIDEO_HEIGHT ? 0 : (1920 - 1080) / 2;

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Background>
          <AbsoluteFill style={{}}>
            {playerNumber === 500 ? (
              <Carola></Carola>
            ) : playerNumber === 500 ? (
              <Jana></Jana>
            ) : (
              <DefaultSoccerPlayer
                playerNumber={playerNumber}
                portrait={portraitAction}
              />
            )}
          </AbsoluteFill>
        </Background>
      </AbsoluteFill>
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        {firstName}
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        {lastName}
      </SlidingText>
      <SlidingText delay={30} fontSize={80} color={RED} left={100} top={530}>
        {seasonGoal} na temporada
      </SlidingText>
    </AbsoluteFill>
  );
};
