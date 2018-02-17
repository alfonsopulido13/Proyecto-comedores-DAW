'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  Tipo platos */
	TipoSchema = new Schema({
			id_tipo 	: {type: Number,required: true},
			nombre_tipo : {type: String,required: true},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now }
		},
		{
			collection :"tb_tipo"
		}),
	TipoModel = mongoose.model("tb_tipo",TipoSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = TipoModel