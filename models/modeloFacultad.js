'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  collection facultad */
	facultadSchema = new Schema({
			idfacultad 		: {type: Number,required: true},
			nombre_facultad : {type: String,required: true},
			Abreviatura		: {type: String,required: true},
			user_cre		: {type: String, default: "Grupo_Comedores"},
			fecha_crea		: {type: Date, default: Date.now }
		},
		{
			collection :"tb_facultad"
		}),
	facultadModel = mongoose.model("tb_facultad",facultadSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = facultadModel