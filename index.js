var settings = module.exports = {
  env: {
    name: 'qa',
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
    domain: 'qa.www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://qa.www.wenode.org/api'
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
    appKey: 'wx7adbe82cd874fa2c',
    appSecret: '17a4cdedb84ad88b22ab98d992a22640',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_9ed53c8d30c4',
    siteName: '百加宝服务'
  },


  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  }
};
