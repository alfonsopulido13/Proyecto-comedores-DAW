'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  precio platos */
	PrecioSchema = new Schema({
			id_precio 	: {type: Number,required: true},
			precio_plat : {type: Number,required: true},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now }
		},
		{
			collection :"tb_precio"
		}
	),
	PrecioModel = mongoose.model("tb_precio",PrecioSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = PrecioModel