import { writeFile } from 'fs/promises';
import { adjToCsv } from '../adjacency-to-csv';
import { AdjacencyList } from '../graph-types';

export const writeAdjacency = async (
  list: AdjacencyList,
  fileScope = ''
): Promise<void> => {
  const adjacency = adjToCsv(list);

  return await writeFile(`${fileScope}adjacency.csv`, adjacency, 'utf8');
};
