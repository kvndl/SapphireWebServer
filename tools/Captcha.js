// DB Depends
const connection = require('../services/sql');

class Captcha {

	// query mariadb instance for contents
	static async getDictionary(callback) {

		console.log('--- in the getDictionary tool ---');

		connection.query(`SELECT question, answer FROM ductTapeCaptcha;`,

			function(error, results) {
				if (error) throw error;

				console.log('--- Query Result ---');
				console.log(results);
				callback(results);
			}
		);
	}
}

module.exports = Captcha;