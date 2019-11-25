/* global Package Npm */
Package.describe({
  name: 'npdev:legacy-proxy-polyfill',
  summary: 'Polyfill for the Proxy object from the Google Chrome team',
  version: '0.3.0',
  git: 'https://github.com/CaptainN/npdev-legacy-proxy-polyfill'
})

Npm.depends({ 'proxy-polyfill': '0.3.0' })

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.7')
  api.use(['modules'])
  api.addFiles('export.js', 'legacy')
})
