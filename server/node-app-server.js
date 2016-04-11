const path = require('path');
const express = require('express');

/**
 * Installs routes that serve production-bundled client-side assets.
 * It is set up to allow for HTML5 mode routing (404 -> /dist/index.html).
 * This should be the last router in your express server's chain.
 */
module.exports = (app) => {
  const distPath = path.join(__dirname, '../dist');
  const indexFileName = 'index.html';
  app.use(express.static(distPath));
  app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));
};
