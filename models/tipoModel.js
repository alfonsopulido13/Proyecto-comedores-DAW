'use Strict'

var conn = require('./modeloTipoPlato'),
	precio = require('./modeloPrecioPlato'),
	facultad = require('./modeloFacultad'),
	plato = require('./modeloPlato'),
	calificacion = require('./modeloCalificacion'),
	comedor = require('./modeloComedor'),
	InicialModel =() => {}


InicialModel.ListaComedores = (cb) => {
	/*conn
		.find().sort({ id_tipo: 1 })
		.exec((err,docs) =>{
			console.log(docs);
			if (err) throw err 
			cb(docs)
		})
	*/
var id_precioPlato= [],lista_precio={}, i;
i=0
precio.find( { } , function (err, docs2) {
              if (err) throw err;
              lista_precio= docs2 
              id_precioPlato=[]
              for (var i=0 ; i<lista_precio.length ; i++ ){
                    id_precioPlato[i]=lista_precio[i].id_precio;
                }

               
          })

for (var i=0 ; i<id_precioPlato.length ; i++ ){
                    console.log(id_precioPlato[i]);
                }

/*
		var id_precioPla = precio.find({user_cre : "Grupo_Comedores"}).map(function(precioPla) { 
		  return precioPla.id_precio; 
		});

		var id_tipoPla = conn.find({user_cre : "Grupo_Comedores"}).map(function(tipoPla) { 
		  return tipoPla.id_tipo; 
		});

		var id_facultad = facultad.find({user_cre : "Grupo_Comedores"}).map(function(Listafacultad) { 
		  return Listafacultad.idfacultad; 
		});
		console.log(id_precioPla);
		console.log(id_tipoPla);
		console.log(id_facultad	);

		 db.airports.find( {
            country:response.dAirport //"United States"
          } , function (err, docs2) {
              if (err) throw err;
              aerolineas_d = docs2;
              size = docs2.length;  
              if (size == 0) {
                res.render('formulario', { origenes: origenes, destinos: destinos,tipo: "vacio" })
               }else{
                arreglo_ciudad_d=[];
                arreglo_ciudad_o=[];
                for (var i=0 ; i<aerolineas_d.length ; i++ ){
                    assert rreglo_ciudad_d[i]=aerolineas_d[i].airportID;
                }
                for (var i=0 ; i<aerolineas_s.length ; i++ ){
                    arreglo_ciudad_o[i]=aerolineas_s[i].airportID;
                }
                db.routes.aggregate([
                  // {"$match": {sAirportID:{$in:docs2.airportID},dAirportID:{$in:docs.airportID}}},
                  // {dAirportID:{$in:[3316,331]}, sAirportID:507}
                  //{"$match": {dAirportID:{$in:aerolineas_d[4].airportID}, sAirportID:507 }},
                  {"$match": {dAirportID:{$in: arreglo_ciudad_d }, sAirportID: {$in: arreglo_ciudad_o } , stops : response.stops}},
                  {"$lookup":{"from":"airlines","localField":"airlineID","foreignField":"airlineID","as":"extra"}}
                  ],function(err, items2) {
                    var tamanio = items2.length;
                      if (tamanio == 0){
                         res.render('formulario', { origenes: origenes, destinos: destinos,tipo: "vacio" }) ;
                      }else{
                        res.render('resultados', { origenes: origenes, destinos: destinos, rutas:items2, tipo: "resultados" });
                      }
                      
                  });


              }

          });
		 
*/
// db.employee.find({name : "premaseem" }).map(function(d){ var obj = db.salary.findOne({eid : d.eid }); print(obj.salary) } ) 6000
//		var books = db.books.find({_id:{$in:id_precioPla}});

}

 module.exports = InicialModel