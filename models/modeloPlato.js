'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  precio platos */
	platosSchema = new Schema({
			idplato 	: {type: Number,required: true},
			nombre_plat : {type: String,required: true},
			estado 		: {type: Number,default: 1 },
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now },
			precio 		: {type: Schema.Types.ObjectId, ref : 'tb_precio' },
			tipo 		: {type: Schema.Types.ObjectId, ref : 'tb_tipo' }
		},
		{
			collection :"tb_platos"
		}),
	platosModel = mongoose.model("tb_platos",platosSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = platosModel