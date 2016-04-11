import requireHacker from 'require-hacker';

[ 'png',
  'jpg',
  'jpeg',
  'gif',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'css',
  'svg',
].forEach((type) => {
  requireHacker.hook(type, () => 'module.exports = ""');
});
