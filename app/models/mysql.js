const mysql = require("mysql");
const { MYSQLCONFIG } = require("../config");

const connection = mysql.createPool({
	charset: "utf8mb4", // 使其能够存储特殊字符
	connectionLimit: 10,
	...MYSQLCONFIG,
});

function wrapQuery(sql) {
	return new Promise((resolve, reject) => {
		connection.query(sql, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}

module.exports = {
	connection,
	wrapQuery,
};
