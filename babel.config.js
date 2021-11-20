module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@modules': './src/modules',
          '@scenes': './src/scenes',
          '@services': './src/services',
          '@utils': './src/utils',
          '@styles': './src/styles'
        }
      }
    ]
  ]
};
