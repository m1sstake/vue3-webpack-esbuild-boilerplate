import { build } from './config';
import { BuildMode } from './config/types';
import { paths } from './config/options/paths';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables) => {
  return build({
    port: env.port ?? 3001,
    mode: env.mode ?? BuildMode.DEV,
    paths,
    analyzer: env.analyzer,
  });
};
