/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 20:54:34
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-18 00:49:04
 * @Description:
 */
// const { getHomeListModel } = require("../models/homeModel");
const { SuccessResponse } = require("../utils/Response");
const CONFIG = require("../config");
class Home {
	async getHome(ctx) {
		// ctx.verifyParams({
		// 	name: string,
		// });
		// ctx.request.query.name
		// const userName = ctx.request.body.name; //
		// const data = await getHomeListModel(userName);
		ctx.body = new SuccessResponse({
			data: "欢迎使用 sandsea 文件上传服务，详细可见：https://github.com/LINGyue-dot/upload-frontend",
		});
	}

	// 单文件
	async singleFile(ctx, next) {
		await next();
		ctx.body = new SuccessResponse({
			url: `${CONFIG.RESOURCE_URL}/${ctx.file.originalname}`,
		});
	}
}

module.exports = new Home();