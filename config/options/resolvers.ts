import { BuildOptions } from '../types';
import { Configuration } from 'webpack';

export function getResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}
