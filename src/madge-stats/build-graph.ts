import { Edge, Graph, Vertex } from '../graph-types';

import { MadgeStat } from './madge-stat-types';

export const buildMadgeGraph = (stat: MadgeStat): Graph => {
  const vertexes: Vertex[] = [];
  const edges: Edge[] = [];

  for (const [key, value] of Object.entries(stat)) {
    vertexes.push({
      Id: key,
      Label: key,
    });

    value.forEach((item) => {
      edges.push({
        Source: key,
        Target: item,
        Label: item,
      });
    });
  }

  return {
    vertexes,
    edges,
  };
};
