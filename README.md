# news

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


部署方式 
  1、npm run build 
  2、只上传.nuxt目录到服务器


pm2守护
  pm2 start npm --name "nuxt-vip" -- run start


pm2常用命令
  pm2 start nuxt-vip 
  pm2 stop nuxt-vip
  pm2 reload nuxt-vip
