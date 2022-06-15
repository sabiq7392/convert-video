import ffmpeg from 'ffmpeg';
import path from 'path';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  try {
    const process = await new ffmpeg(path.resolve("public/videos/mp4", "city.mp4"));
    const object = process.metadata;

    res.status(200).json({ data: object  })
  } catch (error) {
    console.error({ error });
  }
}
