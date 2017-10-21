var express = require('express');
var router = express.Router();
var options120x600 = require('../utils/options.for.120x600');
var options160x600 = require('../utils/options.for.160x600');
var options300x250 = require('../utils/options.for.300x250');
var options468x60 = require('../utils/options.for.468x60');
var options728x90 = require('../utils/options.for.728x90');
var options300x50 = require('../utils/options.for.300x50');
var options320x50 = require('../utils/options.for.320x50');
var options728x90 = require('../utils/options.for.728x90');
var options300x600 = require('../utils/options.for.300x600');
var options970x250 = require('../utils/options.for.970x250');
var template = require('../utils/generate.template');

router.get('/', function(req, res) {
  res.render('index', { title: 'Select your creative sizes' });
});

router.post('/selected-creative-sizes', function(req, res) {
	var data = {};
	for(var i in req.body) {
		data[i] = req.body[i];	
	}
	res.render('select-number-of-frames', { title: 'Select the number of frames for your creative sizes', creatives: data });
});

router.post('/selected-number-of-frames', function(req, res) {
	var data = {};
	for(var i in req.body) {
		data[i] = req.body[i];	
	}
	res.render('select-frame-content', { 
		title: 'Select the frame content for your creative sizes',
		creatives: data,
		options120x600: options120x600(),
		options160x600: options160x600(),
		options300x250: options300x250(),
		options468x60: options468x60(),
		options728x90: options728x90(),
		options300x50: options300x50(),
		options320x50: options320x50(),
		options300x600: options300x600(),
		options970x250: options970x250()
	});
});

router.post('/selected-frame-content', function(req, res) {
	var data = {};
	for(var i in req.body) {
		data[i] = req.body[i];	
	}
	
	template.generate(data);
	
	var file = template.getFile();
	res.render('download', { title: 'Please click the link to download your JSONP file', file: file });
});

module.exports = router;
