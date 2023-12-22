import { BuildPaths } from '../types';
import path from 'node:path';

const absoluteDirName = process.cwd();
export const paths: BuildPaths = {
  entry: path.resolve(absoluteDirName, './src/main.ts'),
  output: path.resolve(absoluteDirName, './dist'),
  html: path.resolve(absoluteDirName, './public/index.html'),
  public: path.resolve(absoluteDirName, './public'),
  src: path.resolve(absoluteDirName, './src'),
};
