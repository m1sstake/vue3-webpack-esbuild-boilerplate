import { BuildMode, BuildOptions } from './types';
import { paths } from './options/paths';
import { getLoaders } from './options/loaders';
import { getResolvers } from './options/resolvers';
import { getOptimizationOptions } from './options/optimization';
import { getDevtoolsOptions } from './options/devtools';
import { getPlugins } from './options/plugins';

export function build(options: BuildOptions) {
  const { mode } = options;
  const isDev = mode === BuildMode.DEV;

  return {
    mode: mode ?? BuildMode.DEV,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
      sourceMapFilename: '[file].[chunkhash].map',
    },
    module: {
      noParse: /^(vue|vue-router)$/,
      rules: getLoaders(options),
    },
    plugins: getPlugins(options),
    resolve: getResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? getDevtoolsOptions(options) : undefined,
    optimization: getOptimizationOptions(options),
  };
}
