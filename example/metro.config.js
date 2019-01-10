const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

function createRootProjectRegexpBlacklist(packageName) {
  return new RegExp(
    `^${escape(
      path.resolve(__dirname, '..', 'node_modules', packageName)
    )}\\/.*$`
  );
}

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, '..')], 
  resolver: {
    blacklistRE: blacklist([
      createRootProjectRegexpBlacklist('react'),
      createRootProjectRegexpBlacklist('react-native')
    ]),
    providesModuleNodeModules: [
      'react-native',
      'react',
    ],
  }
  
};
