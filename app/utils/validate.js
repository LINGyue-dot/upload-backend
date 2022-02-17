module.exports = {
  // 验证 body 中必须字段是否为空
	validBody(...arg) {
		// arg : []
		if (!arg) {
			return true;
		}
		for (let i = 0; i < arg.length; i++) {
			if (typeof arg[i] === undefined) {
				let err = new Error(`${arg[i]} is undefined`);
				err.status = 400;
				throw err;
			}
		}
		return true;
	},
};
