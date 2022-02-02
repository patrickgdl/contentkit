import { SwitchVerticalIcon } from '@heroicons/react/outline';
import React from 'react';

import { EventI } from '@utils/infos';

export const UPDATE_FORM_EVENT = 'UPDATE_FORM';

const EventSingle = ({
  className = '',
  event,
  setActiveType,
  setDefaultValues,
}: {
  className?: string;
  event: EventI;
  setActiveType?: (str: string) => void;
  setDefaultValues?: (str: Object) => void;
}) => {
  const active = Object.keys(event.formValues).length !== 0;

  return (
    <li
      onClick={() => {
        if (active) {
          setActiveType(event.type);
          setDefaultValues(event.formValues);
        }
      }}
    >
      <div className="relative pb-8">
        {/* {itemIdx !== event.length - 1 ? (
            <span
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
          ) : null} */}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={
                'bg-red-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
              }
            >
              <SwitchVerticalIcon
                className="w-5 h-5 text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <p className="text-right text-sm whitespace-nowrap">
                <b>{event.type}</b>
              </p>
              {/* <time dateTime={item.datetime}>{item.date}</time> */}

              <div>
                <p className="text-sm text-gray-500">Min. {event.minute}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">{event.text}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventSingle;
