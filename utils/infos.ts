enum POSITION {
  GOALKEEPER = 'Goalkeeper',
  MIDFIELDER = 'Midfielder',
  FORWARD = 'Forward',
  DEFENDER = 'Defender',
}

export interface PlayerI {
  firstName: string;
  lastName: string;
  position: POSITION;
  number: number;
  stat: {
    games: number;
    goals: number;
  };
  assets: {
    portrait: string;
    action: string;
  };
}

export const TEAM_API: Record<number, PlayerI> = {
  30: {
    firstName: 'Leo',
    lastName: 'Cittadini',
    number: 30,
    position: POSITION.MIDFIELDER,
    stat: {
      games: 9,
      goals: 5,
    },
    assets: {
      portrait:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/cittadini-retrato.png?alt=media',
      action:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/david-terans.png?alt=media',
    },
  },
  20: {
    firstName: 'Mateus',
    lastName: 'Babi',
    number: 20,
    position: POSITION.FORWARD,
    stat: {
      games: 0,
      goals: 9,
    },
    assets: {
      portrait:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/terans-retrato.png?alt=media',
      action:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/david-terans.png?alt=media',
    },
  },
  16: {
    firstName: 'David',
    lastName: 'Terans',
    number: 16,
    position: POSITION.MIDFIELDER,
    stat: {
      games: 2,
      goals: 8,
    },
    assets: {
      portrait:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/terans-retrato.png?alt=media',
      action:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/david-terans.png?alt=media',
    },
  },
  6: {
    firstName: 'Abner',
    lastName: 'Vinicius',
    number: 6,
    position: POSITION.DEFENDER,
    stat: {
      games: 6,
      goals: 4,
    },
    assets: {
      portrait:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/abner-retrato.png?alt=media',
      action:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/david-terans.png?alt=media',
    },
  },
  26: {
    firstName: 'Thiago',
    lastName: 'Heleno',
    position: POSITION.DEFENDER,
    number: 26,
    stat: {
      games: 6,
      goals: 0,
    },
    assets: {
      portrait:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/terans-retrato.png?alt=media',
      action:
        'https://firebasestorage.googleapis.com/v0/b/saidapp1.appspot.com/o/david-terans.png?alt=media',
    },
  },
  99: {
    firstName: 'Pedro',
    lastName: 'Henrique',
    position: POSITION.DEFENDER,
    number: 99,
    stat: {
      games: 6,
      goals: 4,
    },
    assets: {
      portrait: 'https://www.bscyb.ch/kader-frauen?s=264',
      action: 'https://www.bscyb.ch/kader-frauen?s=264',
    },
  },
  98: {
    firstName: 'Renato',
    lastName: 'Kayser',
    position: POSITION.FORWARD,
    number: 98,
    stat: {
      games: 6,
      goals: 4,
    },
    assets: {
      portrait: 'https://www.bscyb.ch/kader-frauen?s=264',
      action: 'https://www.bscyb.ch/kader-frauen?s=264',
    },
  },
};

export const TEAMS = {
  athletico: 'Athletico',
  coritiba: 'Coritiba',
  flamengo: 'Flamengo',
  corinthians: 'Corinthians',
  palmeiras: 'Palmeiras',
};

export const SPONSORS = {
  copel: 'Copel',
  neodent: 'Neodent',
  brahma: 'Brahma',
};

export const VIDEO_HEIGHT = 1280;
export const VIDEO_WIDTH = 720;
export const FPS = 30;
export const GOAL_VIDEO_DURATION = 265;

export const EVENT_TYPES = {
  GOAL: 'GOL',
  CHANGE: 'MUDANÇA',
};

export interface EventI {
  timestamp: number;
  type: string;
  team: string;
  minute: number;
  text: string;
  formValues: Object;
}
