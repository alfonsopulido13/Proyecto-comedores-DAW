'use strict'

var model = require('../models/incialModel'),
	modeloComedor = require('../models/modeloComedor'),
	modeloCalificacion = require('../models/modeloCalificacion'),
	modeloFacultad = require('../models/modeloFacultad'),
	modeloPlato = require('../models/modeloPlato'),
	modeloPrecioPlato = require('../models/modeloPrecioPlato'),
	modeloTipoPlato = require('../models/tipoModel'),
	menuController =() =>{}

menuController.index = (req,res,next) => {
	let credenciales ={
		usuario : req.body.usuario,
		clave 	: req.body.clave
	}
	console.log(credenciales.usuario)
	if ( !(credenciales.usuario == undefined )  ) {
		model.validarLogin(credenciales,function (err,docs) {
			if (err) throw res.render('login_inicial')


			if (docs.tipo_user == 1 ){ // administrador
					console.log("tipo adminsitrador")

					res.render('indexAdministrador',{
														tipo : docs.tipo_user
													})
				}else if (docs.tipo_user == 2 ) // moderador
					res.render('indexModerador',{
													tipo : docs.tipo_user,
													usuario : "Moderador"
												})
				else 
					res.render('index',docs)
			
		})
    	
	}else{
		//alert('Ingrese las Credenciales');
		res.render('login_inicial')
	} 
}




/*
menuController.indexAdministrador = (req, res) => {
    res.render('indexAdministrador');
};



menuController.indexModerador = (req, res) => {
    res.render('indexModerador');
};*/




menuController.galeria = (req, res) => {
    res.render('galeria');
};

menuController.comedores = (req, res) => {
    res.render('comedores');
};


menuController.estadisticas = (req, res) => {
    res.render('estadisticas');
};


menuController.contactanos = (req, res) => {
    res.render('contactanos');
};


menuController.login_inicial = (req, res) => {
    res.render('login_inicial');
};

menuController.comedoresAdministrador = (req, res) => {

	modeloTipoPlato.ListaComedores((tipos_Platos) => {
		let locals = {
			data 	: tipos_Platos,
			tipo : req.body.tipo_usuario
		}
		res.render('comedoresAdministrador',locals)
	})

	
   // res.render('comedoresAdministrador',);

};



module.exports = menuController