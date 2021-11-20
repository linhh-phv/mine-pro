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
          '@navigations': './src/navigations',
          '@reduxApp': './src/reduxApp',
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
