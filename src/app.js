const Koa = require('koa')
const koabody = require('koa-body')
const config = require('./config')
const env = process.env.NODE_ENV || 'development' 

const registerRouter  = require('./routers')
const app = new Koa()
app.use(registerRouter())

app.use(koabody({}));

if (env === 'development') { 

}

console.log('start port ', config.port)
app.listen(config.port)