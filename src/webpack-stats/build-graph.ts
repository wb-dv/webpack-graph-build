import { Edge, Graph, Vertex } from '../graph-types';
import { WebpackStat } from './webpack-stat-types';

export const buildWebpackGraph = (stat: WebpackStat): Graph | null => {
  const modules = stat.modules;

  if (!modules || !modules.length) {
    return null;
  }

  const vertexes: Vertex[] = [];
  const edges: Edge[] = [];

  for (const module of modules) {
    // count++;
    // if (count > 500 && count < 510 && count % 3 === 0) {
    //   console.log('module: ', module);
    // }
    vertexes.push({
      Id: module.id,
      Label: module.name,
      Provided: module.providedExports?.length || -1,
      Used: module.usedExports?.length || -1,
    });

    if (Array.isArray(module.reasons)) {
      for (const reason of module.reasons) {
        edges.push({
          Source: module.id,
          Target: reason.moduleId,
          Label: reason.userRequest,
          JsType: reason.type,
        });
      }
    }
  }

  return {
    vertexes,
    edges,
  };
};
