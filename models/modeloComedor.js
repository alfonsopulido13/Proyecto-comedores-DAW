'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*comedor*/
	comedorSchema = new Schema({
			idcomedor 		: {type: Number,required: true},
			nombre_comedor 	: {type: String},
			estado 			: {type: Number},
			latitud  		: {type: Number},
			longitud 		: {type: Number},
			fecha_creac		: {type: Date, default: Date.now },
			administrador	: {type: Schema.Types.ObjectId, ref : 'tb_persona' },
			facultad 		: {type: Schema.Types.ObjectId, ref : 'tb_facultad' },
			plato 			: {type: Schema.Types.ObjectId, ref : 'tb_platos' }
		},
		{
			collection :"tb_comedor"
		}),
	comedorModel = mongoose.model("tb_comedor",comedorSchema)
	
mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = comedorModel