import { readFile } from 'fs/promises';
import { StatJsonObj, WebpackStat } from './webpack-stat-types';

export const readWebpackStats = async (
  fileName: string
): Promise<WebpackStat> => {
  const statString = await readFile(fileName, 'utf-8');

  const stat: StatJsonObj = JSON.parse(statString);

  return stat.children[1];
};
