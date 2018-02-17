'use strict'

var express = require('express'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'),
	routes  = require('./config/routes'),
	publicDir =express.static(`${__dirname}/public`),
	viewDir =`${__dirname}/views`,
	port = (process.env.PORT || 3000),
	app = express()


app 
	.set('views',viewDir)
	.set('view engine', 'ejs')
	.set('port',port)

	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(restFul)
	.use(morgan('dev'))
	.use(publicDir)
	.use(routes)


module.exports=app