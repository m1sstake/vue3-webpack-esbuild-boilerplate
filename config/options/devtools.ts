import { BuildOptions } from '../types';

export function getDevtoolsOptions(options: BuildOptions) {
  return {
    port: options.port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
