import { readFile } from 'fs/promises';
import { MadgeStat } from './madge-stat-types';

export const readMadgeStats = async (fileName: string): Promise<MadgeStat> => {
  const statString = await readFile(fileName, 'utf-8');

  const stat: MadgeStat = JSON.parse(statString);

  return stat;
};
