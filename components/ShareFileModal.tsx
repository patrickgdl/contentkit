import {
  ChatBubbleBottomCenterTextIcon,
  CameraIcon,
  ArrowDownTrayIcon,
  HashtagIcon,
  RssIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

import { PortalBox } from '@theme';

import Button from './Button/Button';
import ButtonGroup from './Button/ButtonGroup';
import Link from './Link/Link';

const ShareFileModal = ({
  videoFile,
  onClose,
  tweetMessage,
}: {
  videoFile: string;
  onClose: () => void;
  tweetMessage: string;
}) => {
  const [tweetMessageInput, setTweetMessageInput] =
    React.useState<boolean>(false);
  const [tweetMessageEdited, setTweetMessageEdited] =
    React.useState<string>(tweetMessage);
  const [tweetLoading, setTweetLoading] = React.useState<boolean>(false);
  const [tweetUrl, setTweetUrl] = React.useState<string>('');

  const tweetVideo = async () => {
    setTweetLoading(true);
    const body = {
      videoPath: videoFile,
      tweetMessage: tweetMessageEdited,
    };

    const resp = await fetch('/api/video/tweet', {
      body: JSON.stringify(body),
      method: 'POST',
    });
    const { url: tweetUrl } = await resp.json();

    setTweetLoading(false);
    console.log({ tweetUrl });
    setTweetUrl(tweetUrl);
  };

  return (
    <PortalBox title="Successo!" close={onClose} size="small">
      <p>Seu vídeo foi criado com sucesso.</p>
      <ButtonGroup className="mx-0 my-8">
        <Link
          className="inline-flex py-0 px-8 h-12 bg-slate-800 text-white items-center font-bold m-0 rounded-lg"
          icon={ArrowDownTrayIcon}
          href={videoFile}
          download
        >
          Download
        </Link>
        <Button
          icon={HashtagIcon}
          className="bg-sky-400 hover:bg-sky-300 focus:ring-sky-500 border-sky-400"
          onPress={() => setTweetMessageInput((open) => !open)}
        />
        <Button
          icon={CameraIcon}
          className="bg-red-400 hover:bg-red-300 focus:ring-red-500 border-red-400"
          onPress={() =>
            alert(
              'Alto lá Instagram! Esta é apenas uma demonstração por enquanto'
            )
          }
        />
        <Button
          icon={ChatBubbleBottomCenterTextIcon}
          className="bg-slate-400 hover:bg-slate-300 focus:ring-slate-500 border-slate-400"
          onPress={() =>
            alert('Alto lá TikTok! Esta é apenas uma demonstração por enquanto')
          }
        />
        <Button
          icon={RssIcon}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-blue-700 border-blue-600"
          onPress={() =>
            alert('Desculpe, o Facebook está fora do ar novamente :( (joke)')
          }
        />
      </ButtonGroup>

      {tweetMessageInput && (
        <div>
          <textarea
            className={
              'bg-transparent border border-gray-300 focus:outline-none leading-5 py-3 px-2 w-full h-24'
            }
            onChange={(e) =>
              setTweetMessageEdited((e.target as HTMLTextAreaElement).value)
            }
          >
            {tweetMessageEdited}
          </textarea>
          <ButtonGroup className="mt-4" align="right">
            {Boolean(tweetUrl) && (
              <a
                href={tweetUrl}
                rel="noreferrrer noreferrer"
                target="_blank"
                className="ml-0 text-gray-600"
              >
                Ver tweet
              </a>
            )}
            <Button
              className="justify-self-end mr-0"
              // loading={tweetLoading}
              onPress={tweetVideo}
            >
              Enviar
            </Button>
          </ButtonGroup>
        </div>
      )}
    </PortalBox>
  );
};

export default ShareFileModal;
