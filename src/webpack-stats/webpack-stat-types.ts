export interface WebpackReason {
  moduleIdentifier: string;
  module: string;
  moduleName: string;
  resolvedModuleIdentifier: string;
  resolvedModule: string;
  type: string;
  active: boolean;
  explanation: string;
  userRequest: string;
  loc: string;
  moduleId: number | null;
  resolvedModuleId: string | null;
}

export interface WebpackModule {
  // Numeric Identifier used to identify the module.
  id: number;

  name: string;

  // Size in Bytes
  size: number;

  // Absolute Path
  nameForCondition: string;

  // Internal webpack identifier pointing to that module.
  identifier: string;

  // The webpack identifier of the module that imports this module.
  issuer: string;

  // Modules that import this file.
  issuerPath: WebpackIssuerPath[];

  reasons: WebpackReason[];

  providedExports: unknown[];

  usedExports: unknown[];
}

export interface WebpackIssuerPath {
  id: number | null;
  name: string;
  identifier: string;
}

export interface WebpackStat {
  modules: WebpackModule[];
  hash: any;
  assetsByChunkName: any;
  assets: any;
  chunks: any;
  entrypoints: any;
  children: any;
}

export interface StatJsonObj {
  children: WebpackStat[];
}
