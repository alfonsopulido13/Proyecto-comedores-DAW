'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  Persona Administrados/cliente */
	UsuarioSchema = new Schema({
			id_persona 	: {type: Number,required: true},
			nombre 		: {type: String,required: true},
			apellido 	: {type: String,required: true},
			edad 		: {type: Number},
			correo 		: {type: String},
			fecha_nac	: {type: Date},
			Usuarios	: {type: String,required: true},
			clave  		: {type: String,required: true},		
			estado 		: {type: Number,default: 1 },
			tipo_user	: {type: Number,default: 1 }
		},
		{
			collection :"tb_persona"
		}
	),
	PersonaAdmModel = mongoose.model("tb_persona",UsuarioSchema)
	

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = PersonaAdmModel