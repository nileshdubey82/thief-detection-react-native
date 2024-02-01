const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    // Add any custom resolver configurations here
    resolverMainFields: ['browser', 'main'],
    assetExts: ['mp3', 'wav', 'png', 'jpg', 'jpeg', 'gif'],
  },
  transformer: {
    // Add any custom transformer configurations here
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});
