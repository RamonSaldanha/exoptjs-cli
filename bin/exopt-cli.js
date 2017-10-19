#! /usr/bin/env node
var https = require('https')
var mkdirp = require('mkdirp');
var path = require('path');
var program = require('commander');

program
  .version('1.0.0')
  .option('-s, --start', 'create a project')
  .option('-c, --createcontroller [name]', 'create a controller')
  .parse(process.argv);


if (program.createcontroller) {

	var dirname = program.createcontroller;

	mkdirp(program.createcontroller, function(err) { 
    console.log("criado");
	});

};


