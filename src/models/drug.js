var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DrugSchema   = new Schema({
	cis: Number,
    name: String,
    form: String,
    adminRoute: String,
    authStatus: String,
    authType: String,
    marketState: String,
    authDate: Date,
    status: String,
    euroAuthNb: String,
    owner: String,
    enforcedMonitoring: Boolean,
    presentations: [
    {
    	name: String,
    	substanceCode: Number,
    	substanceName: String,
    	dosing: String,
    	refForDosing: String,
    	nature: String,
    	activeSubstanceToTherapeuticActions: Number
    }],
    compositions: [
    {
    	cip7: Number,
    	name: String,
    	status: String,
    	marketState: String,
    	authDate: Date,
    	cip13: Number,
    	publicAgreement: Boolean,
    	reimbursementRate: Number,
    	priceWoDistrib: Number,
    	price: Number,
    	distribPrice: Number
    }]
});

var DrugGroupSchema = new Schema({
	id: String,
    name: String,
    drugAndTypes: [{
    	drug: DrugSchema,
    	type: Number,
    	index: Number
    }]
})

DrugGroupSchema.statics.findByName = function(name, cb) {
	console.log(name);
	return this.find({ name: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('DrugGroup', DrugGroupSchema, 'genericgroups');