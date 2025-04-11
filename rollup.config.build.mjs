import baseConfig, { typescriptPlugin } from './rollup.config.mjs';

export default {
  ...baseConfig,
  plugins: baseConfig.plugins.map((plugin) =>
    plugin?.name === 'rpt2'
      ? typescriptPlugin({
          tsconfig: 'tsconfig.build.json',
          useTsconfigDeclarationDir: true,
        })
      : plugin
  ),
};
