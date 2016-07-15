var mongoose     = require('mongoose');
var _ = require('underscore');
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
    	drug: {
			DrugSchema
		},
    	type: {type: Number},
    	index: Number
    }]
})

DrugGroupSchema.statics.findByName = function(name, cb) {
	console.log(name);
	return this.find({ name: new RegExp(name, 'i') }, cb);
};

DrugGroupSchema.statics.findDrugByName = function(name, cb){
    var pattern = new RegExp(name, 'i');
	var matchingGroups = this.find({ 'drugAndTypes.drug.name': pattern}, 'drugAndTypes.drug.name', function(err, docs){
        if(err){
            cb(err, docs);
        }

        console.log('%s matching groups', docs.length)
        /*for(var i = 0; i < docs.length; i++){
            console.log(JSON.stringify(docs[i]))
        }*/
        /*var obj = docs[0].drugAndTypes[0].drug;
        console.log(obj.toJSON().name);
        var keys = Object.keys(obj);
        console.log(JSON.stringify(keys))*/
        var matchingNames = _.chain(docs)
            //.filter(function(grp){ return grp.drugAndTypes; })
            .map(function(grp){
                return grp.drugAndTypes;
            })
            .flatten()
            .filter(function(o){ return o && o.drug; })
            .map(function(o){ return o.drug.toJSON().name; })
            .filter(function(drugName){ return pattern.test(drugName)})
            .value();
        //console.log('matching names: %s', JSON.stringify(matchingNames))
        //return matchingNames;*/
        return cb(err, matchingNames);
    });
}

module.exports = mongoose.model('DrugGroup', DrugGroupSchema, 'genericgroups');