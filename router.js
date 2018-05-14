const router = new require('koa-router')({ prefix: '' })
const path = require('path')

async function upload (ctx) {
  const { file } = ctx.request.body.files

  if (!file) {
    ctx.status = 400;
  } else {
    ctx.body = {
      filepath: `/uploads/${path.basename(file.path)}`
    }
  }
}

router.post('/upload', upload)

module.exports = router
