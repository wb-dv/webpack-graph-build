import { Graph } from '../graph-types';

import { readMadgeStats } from './read';
import { buildMadgeGraph } from './build-graph';

export const processMadgeStats = async (): Promise<Graph> => {
  const stat = await readMadgeStats('./madge/graph.json');

  const graph = buildMadgeGraph(stat);

  return graph;
};
