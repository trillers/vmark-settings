var settings = module.exports = {
  env: {
    name: 'ndev',
    mode: 'development',
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
    domain: 'dev.note.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://dev.note.wenode.org/api'
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
    appKey: 'wxa51b0be8694ba7b5',
    appSecret: '23c92d23482f991426894c40dcf07452',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_efb5d7c9539e',
    siteName: '错题本测试号'
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