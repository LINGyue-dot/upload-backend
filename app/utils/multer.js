/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 22:59:52
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-18 16:00:41
 * @Description:
 */

const multer = require("@koa/multer");
const fse = require("fs-extra");
const path = require("path");

const CONFIG = require("../config");
const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		// 设置文件的存储目录
		cb(null, CONFIG.UPLOAD_DIR);
	},
	filename: function (req, file, cb) {
		// 设置文件名
		cb(null, `${file.originalname}`);
	},
});

const multerUpload = multer({ storage });

// 文件夹上传
const directoryStorage = multer.diskStorage({
	destination: async function (req, file, cb) {
		// 由于系统不同文件的分隔符也不同，所以前端传的时候将分隔符转成 @ 再传递
		// 将路径标识符 @ 转义回去
		// img@images-1.png ==> img/images-1.png
		// path.seq 是根据系统给出的分隔符
		let relativePath = file.originalname.replace(/@/g, path.seq);

		let index = relativePath.lastIndexOf(path.seq);

		let fileDir = path.join(CONFIG.UPLOAD_DIR, relativePath.substr(0, index));
		// 确保文件夹存在，如果不存在则创建
		await fse.ensureDir(fileDir);
		cb(null, fileDir);
	},
	filename: function (req, file, cb) {
		let parts = file.originalname.split("@");
		cb(null, parts[parts.length - 1]);
	},
});

const directoryUpload = multer({ storage: directoryStorage });

module.exports = { directoryUpload, multerUpload };
