import { Graph } from './graph-types';

export const graphToCSV = (graph: Graph, key: keyof Graph): string => {
  const items = graph[key];

  const replacer = (key: string, value: unknown) =>
    value === null ? '' : value;

  const header = Object.keys(items[0]) as Array<keyof (typeof items)[0]>;

  const csv = [
    header.join(','), // header row first
    ...items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    ),
  ].join('\r\n');

  return csv;
};
