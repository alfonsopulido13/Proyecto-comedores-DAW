'use Strict'

var conn = require('./comedorModel'),
	ComedorAdministrador =() => {}

ComedorAdministrador.cargarDatos = (data,cb) => {
	console.log("hola mundo");
	/*conn
		.count({usuarios : data.usuario,
				clave 	 : data.clave})
		.exec((err,count)=> {
			if (err) throw err 
			console.log(`numero de registro: ${count}`);
			if (count == 0 ){
				cb("Usuario no encontrado")
			}else if (count == 1 ){
				cb()
			}
		})*/
}


 module.exports = ComedorAdministrador