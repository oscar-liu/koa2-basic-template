/**
 * Api 控制器
 */

class ApiController {

	/**
	 * Erro 错误
	 * @param  {[type]} ctx [description]
	 * @return {[type]}     [description]
	 */
    static async error ( ctx ) {
        ctx.body = 'Api Service Error Index';
    }


}

module.exports =  ApiController;