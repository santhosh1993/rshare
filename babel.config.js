const tsconfig = require('./tsconfig.json');
const paths = tsconfig.compilerOptions.paths;

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        rootPathSuffix: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: Object.entries(paths).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key.replace(/(\/\*)$/g, '')]: `./${value[0].replace(
              /(\/\*)$/g,
              '',
            )}`,
          }),
          {},
        ),
      },
    ],
    'react-native-reanimated/plugin', //keep this last as its the requirement by reanimated as it modifies the code as per the animation logic
  ],
};
