const { validBody } = require("../utils/validate");
const { wrapQuery } = require("./mysql");

module.exports = {
	async getHomeListModel(name) {
		validBody(name);
		// sql 中的变量需要 validate
		const data = await wrapQuery(`select * from home`);
		return data;
	},
};
