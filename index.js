var settings = module.exports = {
  env: {
    name: 'gsx',
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
    domain: 'tools.baijiabao.com',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://tools.baijiabao.com/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'ERROR'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wx23f1709f7727051f',
    appSecret: '977f6080e128d465b673deb79e3d31b8',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_afc333104d2a',
    siteName: '错题本'
  },

  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  }
};
