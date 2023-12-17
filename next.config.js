const yamlImporter = require('node-sass-yaml-importer')
const path = require('path')

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    importer: yamlImporter,
    includePaths: [
      path.join(__dirname, '.stylite'),
      path.join(__dirname, 'src/styles'),
    ],
    logger: {
      warn: function (message) {
        console.warn(message)
      },
      debug: function (message) {
        console.log(message)
      },
    },
  },
}

module.exports = nextConfig
