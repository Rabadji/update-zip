console.time('Time to start the app');

const PORT = 8080;

const app = new (require('koa'))();
// const logger = require('koa-logger');
const koa_body = require('koa-body');
const koa_static = require('koa-static');
const router = require('./router');

app
  // .use(logger())
   .use(koa_body({
     formidable: {
       uploadDir: `${__dirname}/public/uploads`,
       keepExtensions: true
     },

     multipart: true,
     urlencoded: true,
     formLimit: (10 * 1024) * 1024,
   }))
   .use(router.routes())
   .use(router.allowedMethods());

app.use(koa_static('./public'));

app.listen(PORT);

console.timeEnd('Time to start the app');
console.log(`Listening on :${PORT}`);
