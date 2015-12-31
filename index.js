var settings = module.exports = {
  env: {
    name: 'prd',
    mode: 'production',
    host: '127.0.0.1',
    port: 3040,
    bindIp: "0.0.0.0"
  },

  security: {
    salt: 'quick'
  },

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3040,
    domain: 'http://www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://www.wenode.org/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wx8ecd17a4beabe76a',
    appSecret: '74ad148c79ac88f844ad98b72d59de96',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_76ea74206101',
    siteName: '跟谁学西安'
  },

  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  }
};