'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/* Calificacion */
	calificacionSchema = new Schema({
			idcalificacion 	: {type: Number,required: true},
			calificacion 	: {type: Number,required: true},
			user_cre		: {type: String, default: "Grupo_Comedores"},
			fecha_crea		: {type: Date, default: Date.now },
			cliente 		: {type: Schema.Types.ObjectId, ref : 'tb_persona' },
			platos 			: {type: Schema.Types.ObjectId, ref : 'tb_platos' }
		},
		{
			collection :"tb_calificacion"
		}),
	calificacionModel = mongoose.model("tb_calificacion",calificacionSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = calificacionModel