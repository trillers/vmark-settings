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
    appKey: 'wxf0148efdc11268f5',
    appSecret: '70ea4630c8f0d02eeae8740a900f8910',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_7055580c1505',
    siteName: '百加宝微网站'
  },

  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  }
};
