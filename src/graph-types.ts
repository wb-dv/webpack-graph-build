export type Vertex = {
  Id: number | string;
  Label: string;
  Provided?: number;
  Used?: number;
};

export type Edge = {
  Source: number | string;
  Target: number | string | null;
  Label: string;
  JsType?: string;
};

export type Graph = {
  vertexes: Vertex[];
  edges: Edge[];
};

export type ProcessGraph = () => Promise<Graph | null>;

export type AdjacencyList = Record<string, string[]>;
