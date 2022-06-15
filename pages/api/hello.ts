import ffmpeg from 'ffmpeg';
import path from 'path';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  // res: NextApiResponse<Data>
) {
    
  try {
    const process = new ffmpeg(path.resolve("public/videos/mp4", "city.mp4"));

    process.then(function (video) {
      // Callback mode
      video.fnExtractFrameToJPG('C:/xampp/htdocs/__coding__/convert-video/public/', {
        frame_rate : 1,
        number : 5,
        file_name : 'my_frame_%t_%s'
      }, function (error, files) {
        if (!error)
          console.log('Frames: ' + files);
      });
    }, function (err) {
      console.log('Error: ' + err);
    });
    
    // process.then(video => {
    //   video
    //     .save('C:\\xampp\\htdocs\\__coding__\\convert-video\\public\\', (error, file) => {
    //       if (error) {
    //         console.log(error);
    //       } else {
    //         console.log(file)
    //       }
    //     })
    // })
      // .setVideoSize('640x?', true, true, '#fff')
      // .setAudioCodec('libfaac')
      // .setAudioChannels(2)
      // .setVideoFormat('webm')
      // .setVideoFrameRate(30)
      
    

    return res.status(200).json({ data: (await process).metadata  })
  } catch (error) {
    console.error({ error });
  }
}
