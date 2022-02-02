import React, { Fragment, useImperativeHandle, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { usePasswordProtected } from '@comps/../passwordProtected/PasswordProtectedProvider';
import EventList from '@comps/Event/EventList';
import NotAuthenticated from '@comps/NotAuthenticated/NotAuthenticated';
import ShareFileModal from '@comps/ShareFileModal';

import { anyRef, Orientiation } from '@utils/hack';
import { EVENT_TYPES } from '@utils/infos';

import CreateVideoChange from './CreateVideoChange';
import CreateVideoGoal from './CreateVideoGoal';

const CreateVideo = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  const [videoFile, setVideoFile] = React.useState<string>('');
  const [tweetMessage, setTweetMessage] = React.useState<string>('');
  const [defaultValues, setDefaultValues] = React.useState<Object>({});
  const [activeType, setActiveType] = React.useState<string>(
    Object.values(EVENT_TYPES)[0]
  );
  const [orientation, setOrientation] = useState<Orientiation>('portrait');
  const { isAuthenticated, init } = usePasswordProtected();

  useImperativeHandle(anyRef, () => {
    return {
      setOrientation: setOrientation,
    };
  });

  if (!init) {
    return null;
  }

  if (!isAuthenticated) {
    return <NotAuthenticated />;
  }

  return (
    <Fragment>
      {route === '/create/event' && (
        <main className="flex-1 overflow-y-auto">
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <div className="flex-1 flex flex-col justify-center items-center">
              <h2 className="mb-1">Configurar vídeo</h2>
              <EventList
                setActiveType={setActiveType}
                setDefaultValues={setDefaultValues}
              />
            </div>
          </section>
        </main>
      )}

      {activeType === EVENT_TYPES.GOAL ? (
        <CreateVideoGoal
          setTweetMessage={setTweetMessage}
          setVideoFile={setVideoFile}
          setActiveType={setActiveType}
          orientation={orientation}
          values={defaultValues}
          hidePrimaryColumn={route === '/create/event'}
        />
      ) : activeType === EVENT_TYPES.CHANGE ? (
        <CreateVideoChange
          setTweetMessage={setTweetMessage}
          setVideoFile={setVideoFile}
          setActiveType={setActiveType}
          orientation={orientation}
          values={defaultValues}
          hidePrimaryColumn={route === '/create/event'}
        />
      ) : null}

      {videoFile && (
        <ShareFileModal
          onClose={() => setVideoFile('')}
          videoFile={videoFile}
          tweetMessage={tweetMessage}
        />
      )}
    </Fragment>
  );
};

export default CreateVideo;
