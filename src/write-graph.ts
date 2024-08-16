import { writeFile } from 'fs/promises';
import { graphToCSV } from './graph-to-csv';
import { Graph } from './graph-types';

export const writeGraph = async (graph: Graph, fileScope = '') => {
  return Promise.all([
    writeFile(`${fileScope}edges.csv`, graphToCSV(graph, 'edges'), 'utf8'),
    writeFile(
      `${fileScope}vertexes.csv`,
      graphToCSV(graph, 'vertexes'),
      'utf8'
    ),
  ]);
};
