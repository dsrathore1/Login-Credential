const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pwd: { type: String, required: true },
});

const appModel = new mongoose.model("test", appSchema);


module.exports = appModel;