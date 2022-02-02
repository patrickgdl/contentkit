import { checkCookieLogin } from '@pwp/utils';
import Twit from 'twit';

import type { NextApiRequest, NextApiResponse } from 'next';

const twitterVideo = require('twitter-video');

const fs = require('fs');

const oauth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

var T = new Twit({
  ...oauth,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

type Data = {
  url: string;
};

type RequestData = {
  videoPath: string;
  tweetMessage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!checkCookieLogin(req)) {
    res.status(401).end();
    return;
  }
  try {
    const body = JSON.parse(req.body) as RequestData;
    const videoPathSplitted = body.videoPath.split('/');
    const id = videoPathSplitted[videoPathSplitted.length - 2];
    const videoRes = await fetch(body.videoPath);
    const fileStream = fs.createWriteStream(`${id}.mp4`);
    await new Promise((resolve, reject) => {
      // @ts-expect-error
      videoRes.body.pipe(fileStream);
      // @ts-expect-error
      videoRes.body.on('error', reject);
      fileStream.on('finish', resolve);
    });
    twitterVideo.fromFile(`${id}.mp4`, oauth, function (err, media_id) {
      if (err) {
        throw new Error();
      }
      fs.unlink(`${id}.mp4`, () => {});
      var params = { status: body.tweetMessage, media_ids: [media_id] };
      T.post('statuses/update', params, function (err, data, response) {
        if (err) {
          throw new Error();
        }
        res
          .status(200)

          .json({
            // @ts-ignore
            url: `https://twitter.com/opatrickgdl/status/${data.id_str}`,
          });
      });
    });
  } catch (e) {
    res.status(500).end();
  }
}
