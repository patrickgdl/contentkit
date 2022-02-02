interface Data {
  lastName: string;
  minute: number;
  awayScore: number;
  homeScore: number;
}

const earlyWith0Message = [
  `Uma meta inicial para YB! No %minute% minutos parte %lastName% para assumir a liderança do placar. ❤️🖤`,
  `Furacão inicia o jogo melhor. %lastName% traz o Athletico em %minute%. Um minuto mais perto da vitória. ❤️🖤`,
];

const basicMessage = [
  `%minute%. %homeScore%:%awayScore%. %lastName% acerta a bola na rede! ❤️🖤`,
  `%lastName% Marca um gol para o Athletico! %minute%. Minutos %homeScore%:%awayScore%. ❤️🖤`,
];

const equalMessage = [
  `%lastName% reage Athletico! Ainda podemos ganhar o jogo!! ❤️🖤`,
  `%minute%. Gol do Athletico. Os cartões são graças a %lastName%! ❤️🖤`,
];

const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const replace = (str: string, inputProps: Data) => {
  return str
    .replaceAll('%lastName%', inputProps.lastName)
    .replaceAll('%minute%', inputProps.minute.toString())
    .replaceAll('%homeScore%', inputProps.homeScore.toString())
    .replaceAll('%awayScore%', inputProps.awayScore.toString());
};

export const buildMessage = (inputProps: Data) => {
  if (inputProps.minute < 10 && inputProps.awayScore == 0) {
    return replace(
      earlyWith0Message[randomNumber(0, earlyWith0Message.length - 1)],
      inputProps
    );
  }
  if (inputProps.awayScore === inputProps.homeScore) {
    return replace(
      equalMessage[randomNumber(0, equalMessage.length - 1)],
      inputProps
    );
  }
  return replace(
    basicMessage[randomNumber(0, basicMessage.length - 1)],
    inputProps
  );
};
