# Conteúdo Dinâmico para Mídias Sociais de Futebol

Project inspired by [YB Hackaton](https://hackathon.bscyb.ch/) winner of 2021 by [Jonny Burger](https://github.com/JonnyBurger), [Simon Messerli](https://github.com/simonmesserli), [Jonas Niestroj](https://github.com/JonasNiestroj) and [Nico Martin](https://github.com/nico-martin/).

> Formato de conteúdo ao vivo dinâmico e inteligente para usar em dias de jogos, que é empolgante para os fãs do time por um lado, e pode ser usado pelo time como uma plataforma de publicidade digital para seus parceiros.
>
> O formato é baseado em dados de ticket ao vivo de partidas (lance-a-lance) que são disponibilizadas (gol, escanteios, impedimentos, substituições, etc.). O objetivo é combinar estes dados do evento numa nova apresentação, e de forma automática, mas também dinâmica, com atrativos espaços publicitários e parceiros adequados em cada caso.
>
> A integração de outros recursos e dados não relacionados (por exemplo, clima) é possível.

## O Problema

Se você realmente deseja transportar emoções através das redes sociais, não existe uma maneira melhor que vídeos. Mas é muito difícil criar vídeos instantâneos para eventos ao vivo. No momento, não há como evitar softwares caros, não-imediatos que oferecem modelos complexos.
Com essa solução, queremos ajudar os gerentes de conteúdo (social medias) a criar vídeos como respostas imediatas aos eventos que acontecem durante o jogo.

## A solução

Para a interface do usuário, usamos [NextJS](https://nextjs.org/) junto com [TypeScript](https://www.typescriptlang.org/) e [PostCSS](https://postcss.org). No core, integramos o [Remotion](https://remotion.dev/) e criamos dois modelos que podem ser personalizados usando um conjunto de parâmetros exibidos com um formulário fácil de usar. Todas as alterações são exibidas imediatamente em um [Remotion Player](https://remotion.dev/docs/player) ao lado do formulário.

Posteriormente, os vídeos de Remotion podem ser implantados em uma infraestrutura AWS Lambda, onde podemos renderizar os vídeos de uma forma superperformante usando apenas uma simples chamada de API.

Esses vídeos podem então ser compartilhados no Twitter, mas seria muito bem possível adicionar mais integrações às plataformas de mídia social.
