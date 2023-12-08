const mongoose = require("mongoose");
const { DB } = process.env;
module.exports = function () {
  mongoose.connect(DB).then(() => console.info(`connected to db successfully`));
};
