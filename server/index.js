const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host } = nuxt.options.server

  let port = 3003

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(function (req, res, next) {

    let cacheList={
      }

    /*if(req.path.indexOf('details/vip')==-1 && req.path.indexOf('details')>-1){
        
      //console.log(req.path);
      //
      let news_details_id=req.path.match(/(\d+)/)  && req.path.match(/(\d+)/)[0] || 0;
      //consola.log(news_details_id);
      if(news_details_id>50000){
        let resetDetailsCacheTime=60;
        cacheList['^/details']=resetDetailsCacheTime;
        //consola.log(`重设新闻id:${news_details_id}>50000缓存时间:${resetDetailsCacheTime}秒`);
      }
    }*/
    //const cacheList = ['^/', '^/details', '^/tag']
    for (let key in cacheList) {
      if (new RegExp(key, 'gmi').test(req.path)) {
        console.log(key+',cache on next time:'+cacheList[key],req.path)
        res.setHeader('Cache-Control', 'max-age='+cacheList[key])
        break
      }
    }
    next()
  })
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
