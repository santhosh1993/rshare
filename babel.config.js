const tsconfig = require('./tsconfig.json');
const paths = tsconfig.compilerOptions.paths;

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
  ],
};
