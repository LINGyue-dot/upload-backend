/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 22:59:52
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-18 00:20:45
 * @Description:
 */

const multer = require("@koa/multer");

const CONFIG = require("../config");
const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		console.log("----------");
		// 设置文件的存储目录
		cb(null, CONFIG.UPLOAD_DIR);
	},
	filename: function (req, file, cb) {
		// 设置文件名
		cb(null, `${file.originalname}`);
	},
});

const multerUpload = multer({ storage });

module.exports = multerUpload;
