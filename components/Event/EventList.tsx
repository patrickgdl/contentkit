import React from 'react';

import { classNames } from '@utils/classnames';
import { EventI, EVENT_TYPES, TEAMS } from '@utils/infos';

import EventSingle from './EventSingle';

const events: Array<EventI> = [
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 30,
    text: 'Kayzer para Bissoli',
    team: TEAMS.athletico,
    formValues: {
      //minute: 30,
      //player2: 19,
      //player1: 43,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 33,
    text: 'David Terans 1:0',
    team: TEAMS.athletico,
    formValues: {
      minute: 33,
      playerIndex: 16,
      homeScore: 1,
      awayScore: 0,
      awayTeam: TEAMS.corinthians,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 42,
    text: 'Renan Lodi 2:0',
    team: TEAMS.athletico,
    formValues: {
      //minute: 42,
      //playerIndex: 7,
      //homeScore: 2,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 52,
    text: 'Matheus Babi 3:0',
    team: TEAMS.athletico,
    formValues: {
      //minute: 52,
      //playerIndex: 4,
      //homeScore: 3,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 60,
    text: 'Thiago Heleno 4:0',
    team: TEAMS.athletico,
    formValues: {
      //minute: 60,
      //playerIndex: 99,
      //homeScore: 4,
      //awayScore: 0,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 65,
    text: 'David Terans por Leo Cittadini',
    team: TEAMS.athletico,
    formValues: {
      minute: 65,
      //player2: 6, solução alternativa porque não temos
      player2: 30,
      player1: 16,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 67,
    text: 'Ze Ivaldo por Abner Vinicius',
    team: 'basel',
    formValues: {
      //minute: 67,
      //player2: 6,
      //player1: 37,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 70,
    text: 'Matheus Babi 5:0',
    team: TEAMS.athletico,
    formValues: {
      minute: 70,
      playerIndex: 20,
      homeScore: 5,
      awayScore: 0,
      awayTeam: TEAMS.flamengo,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 71,
    text: 'Erick por Christian',
    team: TEAMS.athletico,
    formValues: {
      //minute: 71,
      //player2: 17,
      //player1: 7,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 73,
    text: 'Fulano por Oskar',
    team: TEAMS.coritiba,
    formValues: {
      //minute: 73,
      //player2: 33,
      //player1: 11,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 75,
    text: 'Nome de Jogador Adversário 5:1',
    team: 'basel',
    formValues: {
      //minute: 75,
      //playerIndex: 9,
      //homeScore: 5,
      //awayScore: 1,
      //awayTeam: 'basel',
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 80,
    text: 'Leo Cittadini 6:1',
    team: TEAMS.athletico,
    formValues: {
      minute: 80,
      //playerIndex: 6
      playerIndex: 30,
      homeScore: 6,
      awayScore: 1,
      awayTeam: TEAMS.palmeiras,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 86,
    text: 'Fulano por De Tal',
    team: TEAMS.coritiba,
    formValues: {
      //minute: 86,
      //player2: 19,
      //player1: 22,
    },
  },
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 89,
    text: 'Christian 7:1',
    team: TEAMS.athletico,
    formValues: {
      //minute: 89,
      //playerIndex: 17,
      //homeScore: 7,
      //awayScore: 1,
      //awayTeam: 'basel',
    },
  },
];

const EventList = ({
  setActiveType,
  setDefaultValues,
}: {
  className?: string;
  setActiveType?: (str: string) => void;
  setDefaultValues?: (str: Object) => void;
}) => {
  return (
    <div className="w-96 h-screen overflow-y-auto">
      <section
        aria-labelledby="timeline-title"
        className="lg:col-start-3 lg:col-span-1"
      >
        <h3>Athletico - Coritiba 23.09.18</h3>
        <table>
          <tbody>
            <tr>
              <th>Local</th>
              <td>Arena da Baixada</td>
            </tr>
            <tr>
              <th>Público</th>
              <td>31120</td>
            </tr>
            <tr>
              <th>Juiz</th>
              <td>Daronco</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-white px-4 py-2 shadow sm:rounded-lg sm:px-6">
          <div className="mt-6 flow-root">
            <ul role="list" className="-mb-8">
              {events.map((event, evtIdx) => (
                <EventSingle
                  setActiveType={setActiveType}
                  key={evtIdx}
                  event={event}
                  className="border-t-2 border-gray-200 border-dashed py-3"
                  setDefaultValues={setDefaultValues}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventList;
