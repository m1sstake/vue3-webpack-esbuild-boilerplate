export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}
export enum BuildMode {
  PROD = 'production',
  DEV = 'development',
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
}
