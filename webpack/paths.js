const Path = require('path');

const root = Path.join(__dirname, '..');
const config = Path.join(root, 'webpack');
const source = Path.join(root, 'src');
const output = Path.join(root, 'dist');

module.exports = {
  root,
  config,
  source,
  output
};
