import { BuildMode, BuildOptions } from '../types';
import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === BuildMode.DEV;

  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
  };

  const imagesLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['vue-loader', 'vue-svg-loader-2'],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      'vue-style-loader',
      isDev
        ? {
            loader: 'style-loader',
            options: {
              esModule: false,
            },
          }
        : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
      'css-loader',
      'postcss-loader',
    ],
  };

  const tsLoader = {
    test: /\.ts$/,
    loader: 'esbuild-loader',
    exclude: /node_modules/,
    options: {
      loader: 'ts',
      target: 'es2015',
    },
  };

  return [vueLoader, imagesLoader, fontsLoader, svgLoader, cssLoader, tsLoader];
}
