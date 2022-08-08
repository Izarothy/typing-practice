// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const text = `All that is gold does not glitter,
Not all those who wander are lost;
The old that is strong does not wither,
Deep roots are not reached by the frost.`; // Will be replaced by a random object from DB

  res.status(200).json(text);
};

export default handler;
