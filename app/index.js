/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 20:54:34
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-18 00:23:31
 * @Description:
 */
const Koa = require("koa");

const cors = require("koa-cors");

const app = new Koa();

const error = require("koa-json-error");

const parameter = require("koa-parameter");

const routing = require("./routes");

const serve = require("koa-static");

const CONFIG = require("./config");

/**
 * base response data structor
 * {
 *    code: 200 or other
 *    message: success or other
 *    data: any or {} or undefined
 * }
 */

// 统一错误处理
app.use(
	error({
		format: function (err) {
			return {
				code: err.status,
				message: err.message || "OK",
			};
		},
	})
);

app.use(cors());
// 开启 koa-static 服务
app.use(serve(CONFIG.UPLOAD_DIR));

parameter(app);

routing(app);

app.listen(CONFIG.SERVER_PORT, () => {
	console.log("app launch in port " + CONFIG.SERVER_PORT);
});
