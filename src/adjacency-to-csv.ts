import { AdjacencyList } from './graph-types';

export const adjToCsv = (list: AdjacencyList): string => {
  const rows: string[][] = [];

  for (const [key, value] of Object.entries(list)) {
    rows.push([key, ...value]);
  }

  return rows.map((row) => row.join(',')).join('\r\n');
};
