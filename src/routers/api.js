/**
 * Api 路由定义配置
 * @type {[type]}
 */
const api = require('../controller/api.controller')


const Router = require('koa-router') 
const router = new Router() 

router.prefix('/Api') 

router.get('/',(ctx,next)=>{
    ctx.body = "Api router"
})

router.get('/all',(ctx,next)=>{
    ctx.body = "hello C module router"
})

router.get('/error', api.error )

module.exports = router