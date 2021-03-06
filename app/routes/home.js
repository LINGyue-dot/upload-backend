/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 20:54:34
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-18 21:52:57
 * @Description:
 */
const Router = require("koa-router");

const router = new Router({ prefix: "/upload" }); // prefix

const home = require("../controllers/home");
const { multerUpload, directoryUpload } = require("../utils/multer");

router.get("/", home.getHome);

// 单文件上传/拖拽上传

router.post("/single", home.singleFile, multerUpload.single("file"));

router.post(
	"/multiple",
	home.multipleFile,
	multerUpload.fields([{ name: "file" }])
);

router.post(
	"/directory",
	home.directoryFile,
	directoryUpload.fields([{ name: "file" }])
);

module.exports = router;
