import { BuildMode, BuildOptions } from '../types';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { EsbuildPlugin } from 'esbuild-loader';
import { VueLoaderPlugin } from 'vue-loader';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';

export function getPlugins(options: BuildOptions): Configuration['plugins'] {
  const { mode, paths, analyzer } = options;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
      title: 'Webpack config',
    }),
    new VueLoaderPlugin(),
    new EsbuildPlugin({
      define: {
        'process.env.NODE_ENV': JSON.stringify(mode),
      },
      treeShaking: true,
    }),
  ];

  if (mode === BuildMode.DEV) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ESLintWebpackPlugin());
    plugins.push(new StylelintPlugin());
  }

  if (mode === BuildMode.PROD) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
