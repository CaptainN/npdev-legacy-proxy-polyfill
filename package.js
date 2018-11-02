/* global Package Npm */
Package.describe({
  name: 'npdev:legacy-proxy-polyfill',
  summary: 'Polyfill for the Proxy object from the Google Chrome team',
  version: '0.2.0',
  git: 'https://github.com/GoogleChrome/proxy-polyfill.git'
})

Npm.depends({ 'proxy-polyfill': '0.2.0' })

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.7')
  api.addFiles('export.js', 'legacy')
})
