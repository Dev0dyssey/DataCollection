var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
    oppid: String,
    nature: String,
    businessType: String,
    vat: String,
    competitors: String,
    goods: String,
    volume: Number,
    frequency: String,
    avgWeight: Number,
    marketplaces: String,
    dimension: String
})

module.exports = mongoose.model("Client", clientSchema);