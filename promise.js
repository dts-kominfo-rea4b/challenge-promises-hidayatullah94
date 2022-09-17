const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (rasa) => {
	return new Promise((resolve, reject) => {
		if (rasa === null) {
			reject("Perasaan tidak ada");
		}
		let marah = 0;
		let tdkMarah = 0;

		promiseTheaterIXX().then((data) => {
			for (let i = 0; i < data.length; i++) {
				if (data[i].hasil === "marah") {
					marah += 1;
				} else {
					tdkMarah += 1;
				}
				promiseTheaterVGC().then((data) => {
					for (let i = 0; i < data.length; i++) {
						if (data[i].hasil === "marah") {
							marah += 1;
						} else {
							tdkMarah += 1;
						}
						if (rasa === "marah") {
							resolve(marah + 1);
						} else {
							resolve(tdkMarah + 1);
						}
					}
				});
			}
		});
	});
};

module.exports = {
	promiseOutput,
};
