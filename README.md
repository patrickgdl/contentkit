# Conteúdo Dinâmico para Mídias Sociais de Futebol

Project inspired by [YB Hackaton](https://hackathon.bscyb.ch/) winner of 2021.

> Gerador de conteúdo dinâmico em formato de vídeo para uso em dias de jogos.
> Esse projeto é para ser usado por social medias como uma plataforma de publicidade digital.
>
> Baseado em dados ao vivo de partidas que são disponibilizados (gol, escanteios, impedimentos, substituições, etc.), o objetivo é combinar estes dados do evento e um novo formato de apresentação, e de forma automática, mas também dinâmica, com atrativos espaços publicitários e parceiros adequados em cada caso.
>
> A integração de outros recursos e dados não relacionados (por exemplo, clima) é possível.

## O Problema

Se você realmente deseja transportar emoções através das redes sociais, não existe uma maneira melhor que via vídeos. Mas é muito difícil criar vídeos instantâneos para eventos ao vivo. No momento, não há como evitar softwares caros e que oferecem modelos complexos.
Com essa solução, queremos ajudar os social medias a criar vídeos como respostas imediatas aos eventos que acontecem durante o jogo.

## A solução

Para a interface do usuário, usamos [NextJS](https://nextjs.org/) junto com [TypeScript](https://www.typescriptlang.org/) e [PostCSS](https://postcss.org). No core, integramos o [Remotion](https://remotion.dev/) e criamos dois modelos que podem ser personalizados usando um conjunto de parâmetros exibidos com um formulário fácil de usar. Todas as alterações são exibidas imediatamente em um [Remotion Player](https://remotion.dev/docs/player) ao lado do formulário.

Posteriormente, os vídeos de Remotion podem ser implantados em uma infraestrutura AWS Lambda, onde podemos renderizar os vídeos de uma forma superperformática usando apenas uma simples chamada de API.

Esses vídeos podem então ser compartilhados em diferentes redes sociais.
