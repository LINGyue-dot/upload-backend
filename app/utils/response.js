class Response {
	constructor(code, message, data) {
		this.code = code;
		this.message = message ? message : "success";
		this.data = data;
	}
}

class SuccessResponse extends Response {
	constructor(data) {
		super(200, "", data);
	}
}

class FailResponse extends Response {
	constructor(code, message) {
		super(code, message);
	}
}

module.exports = {
	SuccessResponse,
	FailResponse,
};
