import { adjToCsv } from '../adjacency-to-csv';
import { writeAdjacency } from '../webpack-stats/write-adjacency';
import { readMadgeStats } from './read';

export const madgeAdjacency = async () => {
  const stats = await readMadgeStats('./madge/graph.json');

  writeAdjacency(stats, 'madge/');
};
