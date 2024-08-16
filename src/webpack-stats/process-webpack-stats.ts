import { Graph } from '../graph-types';
import { writeGraph } from '../write-graph';
import { buildWebpackGraph } from './build-graph';
import { readWebpackStats } from './read';

export const processWebpackStats = async (): Promise<Graph | null> => {
  const stat = await readWebpackStats('./stats/stats.json');

  const graph = buildWebpackGraph(stat);

  return graph;
};
