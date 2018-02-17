'use Strict'

var conn = require('./connection'),
	InicialModel =() => {}

InicialModel.validarLogin = (data,cb) => {
	console.log("validar ususario");
	conn
		.count({usuarios : data.usuario,
				clave 	 : data.clave})
		.exec((err,count)=> {
			if (err) throw err 
			console.log(`numero de registro: ${count}`);
			if (count == 0 ){
				cb(err)
			}else if (count == 1 ){
			conn 
				.findOne({
					usuarios : data.usuario,
					clave 	 : data.clave})
				.exec((err, docs)=> {
					if (err) throw err 
					cb(err,docs)
				})
			}
		})
}


 module.exports = InicialModel