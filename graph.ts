import { Graph, ProcessGraph } from './src/graph-types';
import { madgeAdjacency, processMadgeStats } from './src/madge-stats';
import { processWebpackStats } from './src/webpack-stats';
import { writeGraph } from './src/write-graph';

type Source = 'madge' | 'webpack' | 'default';

const sourceToProcess: Record<Source, ProcessGraph> = {
  webpack: processWebpackStats,
  madge: processMadgeStats,
  default: processWebpackStats,
};

const graph = async () => {
  const source = process.argv[2] as Source;

  const graph = await (sourceToProcess[source] || sourceToProcess.default)();

  if (!graph) {
    console.log('No modules found');
    return;
  }

  await writeGraph(graph, `${source}/` || '');
};

const main = async () => {
  await madgeAdjacency();
};

main();
