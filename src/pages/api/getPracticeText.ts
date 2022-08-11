// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const texts = await prisma.text.findMany();

  const randomText = texts[Math.floor(Math.random() * texts.length)];

  if (randomText) return res.status(200).json(randomText.content);

  res.status(500).send('Internal error');
};

export default handler;
