/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 20:54:34
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-17 23:41:25
 * @Description:
 */

const path = require("path");

const CONFIG = {
	SERVER_PORT: 3100,
	RESOURCE_URL: "http://localhost:" + this.SERVER_PORT,
	UPLOAD_DIR: path.join(__dirname, "/public/upload"), // 上传需要用 koa-static 代理保留的路径
	MYSQLCONFIG: {
		host: "120.27.242.14",
		user: "vze",
		password: "csz51628@+",
		database: "vze_db",
	},
};

//
module.exports = CONFIG;
