import { BuildMode, BuildOptions } from '../types';
import { EsbuildPlugin } from 'esbuild-loader';
import { Configuration } from 'webpack';

export function getOptimizationOptions(
  options: BuildOptions,
): Configuration['optimization'] {
  const optimization: Configuration['optimization'] = {
    splitChunks: {},
    minimizer: [],
  };

  if (options.mode === BuildMode.PROD) {
    optimization.minimizer.push(
      new EsbuildPlugin({
        target: 'es6',
        minify: true,
        css: true,
      }),
    );

    optimization.splitChunks = {
      automaticNameDelimiter: '-',
      cacheGroups: {
        vuePackage: {
          test: /[\\/]node_modules[\\/](@vue|vue-router)[\\/]/,
          name: 'vendor_vue',
          chunks: 'all',
          priority: 10,
        },
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'app_node_modules',
          minSize: 0,
        },
      },
    };
  }
  return optimization;
}
