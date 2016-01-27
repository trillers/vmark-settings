var settings = module.exports = {
  env: {
    name: 'nprd',
    mode: 'production',
    host: '127.0.0.1',
    port: 3050,
    bindIp: "0.0.0.0"
  },

  security: {
    salt: 'quick'
  },

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3050,
    domain: 'note.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://note.wenode.org/api'
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
    appKey: 'wx8cde5c1f9665ac96',
    appSecret: 'd7351d2afedb62ef0daae78cf1a6fb30',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_cd89432d0321',
    siteName: '友趣笔记'
  },

  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  },

  resources: {
    app: {
      title: '友趣笔记',
      desc: '友趣笔记'
    }
  }
};