var fs = require('fs');
var async = require('async');
var name;
var data120x600;
var data160x600;
var data300x250;
var data728x90;
var data300x50;
var data320x50;
var data468x60;
var data300x600;
var data970x250;
var template;

function generateTemplate(data) {
	
	async.map(
	[	
		'utils/creatives.template.js',
		'utils/120x600.template.js',
		'utils/120x600.relational.text.and.image.module.angled.passes.component.js',
		'utils/120x600.relational.text.and.image.module.combo.tickets.portrait.component.js',
		'utils/120x600.relational.text.and.image.module.countdown.component.js',
		'utils/120x600.relational.text.and.image.module.image.area.component.js',
		'utils/120x600.relational.text.and.image.module.key.art.component.js',
		'utils/120x600.relational.text.and.image.module.ticket.component.js',
		'utils/120x600.relational.text.and.image.module.ticket.reel.component.js',
		'utils/120x600.text.and.image.module.angled.passes.component.js',
		'utils/120x600.text.and.image.module.combo.tickets.portrait.component.js',
		'utils/120x600.text.and.image.module.countdown.component.js',
		'utils/120x600.text.and.image.module.image.area.component.js',
		'utils/120x600.text.and.image.module.key.art.component.js',
		'utils/120x600.text.and.image.module.ticket.component.js',
		'utils/120x600.text.and.image.module.ticket.reel.component.js',
		'utils/120x600.text.heavy.a.module.angled.pass.and.ticket.component.js',
		'utils/120x600.text.heavy.a.module.angled.passes.component.js',
		'utils/120x600.text.heavy.a.module.image.area.component.js',
		'utils/120x600.text.heavy.a.module.ticket.component.js',
		'utils/120x600.text.heavy.a.module.ticket.reel.component.js',
		'utils/120x600.text.heavy.b.module.image.area.component.js',
		'utils/120x600.text.heavy.b.module.ticket.component.js',
		'utils/120x600.text.heavy.b.module.ticket.reel.component.js',
		'utils/120x600.text.only.module.text.and.bullet.points.with.cta.button.component.js',
		
		'utils/160x600.template.js',
		'utils/160x600.relational.text.and.image.module.angled.passes.component.js',
		'utils/160x600.relational.text.and.image.module.combo.tickets.portrait.component.js',
		'utils/160x600.relational.text.and.image.module.image.area.component.js',
		'utils/160x600.relational.text.and.image.module.key.art.component.js',
		'utils/160x600.relational.text.and.image.module.ticket.component.js',
		'utils/160x600.relational.text.and.image.module.ticket.reel.component.js',
		'utils/160x600.relational.text.and.image.module.ticket.reel.with.countdown.component.js',
		'utils/160x600.text.and.image.module.combo.tickets.portrait.component.js',
		'utils/160x600.text.and.image.module.image.area.component.js',
		'utils/160x600.text.and.image.module.key.art.component.js',
		'utils/160x600.text.and.image.module.ticket.component.js',
		'utils/160x600.text.and.image.module.ticket.reel.component.js',
		'utils/160x600.text.and.image.module.ticket.reel.with.countdown.component.js',
		'utils/160x600.text.heavy.a.module.angled.pass.and.ticket.component.js',
		'utils/160x600.text.heavy.a.module.angled.passes.component.js',
		'utils/160x600.text.heavy.a.module.image.area.component.js',
		'utils/160x600.text.heavy.a.module.ticket.component.js',
		'utils/160x600.text.heavy.a.module.ticket.reel.component.js',
		'utils/160x600.text.heavy.b.module.image.area.component.js',
		'utils/160x600.text.heavy.b.module.ticket.component.js',
		'utils/160x600.text.heavy.b.module.ticket.reel.component.js',
		'utils/160x600.text.only.module.text.with.bullet.points.and.cta.button.component.js',
		
		'utils/300x250.template.js',
		'utils/300x250.combo.relational.text.image.b.module.combo.unpacked.component.js',
		'utils/300x250.combo.relational.text.image.b.module.image.area.component.js',
		'utils/300x250.relational.text.and.image.module.image.area.component.js',
		'utils/300x250.relational.text.and.image.module.reel.with.countdown.component.js',
		'utils/300x250.relational.text.and.image.module.ticket.reel.component.js',
		'utils/300x250.text.and.image.module.image.area.component.js',
		'utils/300x250.text.and.image.module.key.art.component.js',
		'utils/300x250.text.and.image.module.reel.with.countdown.component.js',
		'utils/300x250.text.and.image.module.ticket.component.js',
		'utils/300x250.text.and.image.module.ticket.reel.component.js',
		'utils/300x250.text.heavy.a.module.2.passes.c.component.js',
		'utils/300x250.text.heavy.a.module.angled.pass.component.js',
		'utils/300x250.text.heavy.a.module.image.area.component.js',
		'utils/300x250.text.heavy.b.module.combo.unpacked.component.js',
		'utils/300x250.text.heavy.b.module.image.area.component.js',
		'utils/300x250.text.heavy.b.module.text.countdown.cta.component.js',
		'utils/300x250.text.heavy.b.module.ticket.reel.component.js',
		'utils/300x250.text.only.module.end.frame.component.js',
		'utils/300x250.text.only.module.text.frame.bullet.points.component.js',
		
		'utils/468x60.template.js',
		'utils/468x60.cta.a.module.angled.pass.component.js',
		'utils/468x60.cta.a.module.ticket.component.js',
		'utils/468x60.cta.c.module.angled.passes.component.js',
		'utils/468x60.cta.c.module.combo.tickets.component.js',
		'utils/468x60.cta.c.module.image.area.component.js',
		'utils/468x60.text.and.image.a.module.angled.passes.component.js',
		'utils/468x60.text.and.image.a.module.countdown.component.js',
		'utils/468x60.text.and.image.a.module.image.area.component.js',
		'utils/468x60.text.and.image.a.module.ticket.component.js',
		'utils/468x60.text.and.image.a.module.ticket.reel.component.js',
		
		'utils/728x90.template.js',
		'utils/728x90.cta.a.module.angled.pass.component.js',
		'utils/728x90.cta.a.module.countdown.component.js',
		'utils/728x90.cta.a.module.ticket.component.js',
		'utils/728x90.cta.b.module.text.only.component.js',
		'utils/728x90.cta.b.module.text.with.bullet.points.component.js',
		'utils/728x90.cta.c.module.angled.passes.component.js',
		'utils/728x90.cta.c.module.combo.tickets.component.js',
		'utils/728x90.cta.c.module.image.area.component.js',
		'utils/728x90.text.and.image.a.module.angled.passes.component.js',
		'utils/728x90.text.and.image.a.module.countdown.component.js',
		'utils/728x90.text.and.image.a.module.image.area.component.js',
		'utils/728x90.text.and.image.a.module.ticket.component.js',
		'utils/728x90.text.and.image.a.module.ticket.reel.component.js',
		
		'utils/300x50.template.js',
		'utils/300x50.copy.only.module.headline.component.js',
		'utils/300x50.cta.button.module.pass.with.cta.component.js',
		'utils/300x50.image.a.module.countdown.component.js',
		'utils/300x50.image.a.module.double.ticket.component.js',
		'utils/300x50.image.a.module.image.area.component.js',
		'utils/300x50.image.and.copy.module.combo.tickets.and.headline.component.js',
		'utils/300x50.image.and.copy.module.pass.with.headline.component.js',
		'utils/300x50.image.b.module.combo.tickets.component.js',
		'utils/300x50.image.b.module.image.area.component.js',
		'utils/300x50.image.b.module.reel.component.js',
		
		'utils/320x50.template.js',
		'utils/320x50.copy.only.module.headline.component.js',
		'utils/320x50.cta.button.module.pass.with.cta.component.js',
		'utils/320x50.image.a.module.countdown.component.js',
		'utils/320x50.image.a.module.double.ticket.component.js',
		'utils/320x50.image.a.module.image.area.component.js',
		'utils/320x50.image.and.copy.module.combo.tickets.and.headline.component.js',
		'utils/320x50.image.and.copy.module.pass.with.headline.component.js',
		'utils/320x50.image.b.module.combo.tickets.component.js',
		'utils/320x50.image.b.module.image.area.component.js',
		'utils/320x50.image.b.module.reel.component.js',
		
		'utils/300x600.template.js',
		'utils/300x600.content.hero.with.relational.text.module.combo.ticket.and.portrait.component.js',
		'utils/300x600.content.hero.with.relational.text.module.double.image.component.js',
		'utils/300x600.content.hero.with.relational.text.module.image.area.component.js',
		'utils/300x600.content.hero.with.relational.text.module.key.art.component.js',
		'utils/300x600.content.hero.with.relational.text.module.ticket.reel.component.js',
		'utils/300x600.double.image.module.2.passes.and.ticket.component.js',
		'utils/300x600.double.image.module.image.and.tickets.combo.component.js',
		'utils/300x600.double.image.module.image.area.component.js',
		'utils/300x600.double.image.module.pass.and.ticket.component.js',
		'utils/300x600.text.heavy.module.2.row.ticket.b.component.js',
		'utils/300x600.text.heavy.module.image.area.component.js',
		'utils/300x600.text.heavy.module.key.art.component.js',
		'utils/300x600.text.heavy.module.reel.with.countdown.component.js',
		'utils/300x600.text.heavy.module.short.combo.tickets.component.js',
		'utils/300x600.text.heavy.module.ticket.reel.component.js',
		
		'utils/970x250.template.js',
		'utils/970x250.text.and.image.a.module.2.passes.angled.component.js',
		'utils/970x250.text.and.image.a.module.combo.ticket.component.js',
		'utils/970x250.text.and.image.a.module.image.area.component.js',
		'utils/970x250.text.and.image.a.module.key.art.component.js',
		'utils/970x250.text.and.image.a.module.pass.ticket.angled.and.countdown.component.js',
		'utils/970x250.text.and.image.a.module.ticket.component.js',
		'utils/970x250.text.and.image.a.module.ticket.reel.component.js',
		'utils/970x250.text.and.image.a.module.ticket.reel.with.countdown.component.js',
		'utils/970x250.text.top.image.module.image.area.component.js',
		'utils/970x250.text.top.image.module.ticket.reel.component.js',
		'utils/970x250.top.text.image.module.combo.ticket.unpacked.component.js',
		'utils/970x250.top.text.image.module.image.area.component.js',
		'utils/970x250.top.text.image.module.ticket.reel.component.js'
				
	], readAsync, function(err, results) {
		
		var template = results[0];
		
		var file120x600 = results[1];
		var snippets120x600 = [];
		snippets120x600['120x600.relational.text.and.image.module.angled.passes.component'] = results[2];
		snippets120x600['120x600.relational.text.and.image.module.combo.tickets.portrait.component'] = results[3];
		snippets120x600['120x600.relational.text.and.image.module.countdown.component'] = results[4];
		snippets120x600['120x600.relational.text.and.image.module.image.area.component'] = results[5];
		snippets120x600['120x600.relational.text.and.image.module.key.art.component'] = results[6];
		snippets120x600['120x600.relational.text.and.image.module.ticket.component'] = results[7];
		snippets120x600['120x600.relational.text.and.image.module.ticket.reel.component'] = results[8];
		snippets120x600['120x600.text.and.image.module.angled.passes.component'] = results[9];
		snippets120x600['120x600.text.and.image.module.combo.tickets.portrait.component'] = results[10];
		snippets120x600['120x600.text.and.image.module.countdown.component'] = results[11];
		snippets120x600['120x600.text.and.image.module.image.area.component'] = results[12];
		snippets120x600['120x600.text.and.image.module.key.art.component'] = results[13];
		snippets120x600['120x600.text.and.image.module.ticket.component'] = results[14];
		snippets120x600['120x600.text.and.image.module.ticket.reel.component'] = results[15];
		snippets120x600['120x600.text.heavy.a.module.angled.pass.and.ticket.component'] = results[16];
		snippets120x600['120x600.text.heavy.a.module.angled.passes.component'] = results[17];
		snippets120x600['120x600.text.heavy.a.module.image.area.component'] = results[18];
		snippets120x600['120x600.text.heavy.a.module.ticket.component'] = results[19];
		snippets120x600['120x600.text.heavy.a.module.ticket.reel.component'] = results[20];
		snippets120x600['120x600.text.heavy.b.module.image.area.component'] = results[21];
		snippets120x600['120x600.text.heavy.b.module.ticket.component'] = results[22];
		snippets120x600['120x600.text.heavy.b.module.ticket.reel.component'] = results[23];
		snippets120x600['120x600.text.only.module.text.and.bullet.points.with.cta.button.component'] = results[24];
		
		var file160x600 = results[25];
		var snippets160x600 = [];
		snippets160x600['160x600.relational.text.and.image.module.angled.passes.component'] = results[26];
		snippets160x600['160x600.relational.text.and.image.module.combo.tickets.portrait.component'] = results[27];
		snippets160x600['160x600.relational.text.and.image.module.image.area.component'] = results[28];
		snippets160x600['160x600.relational.text.and.image.module.key.art.component'] = results[29];
		snippets160x600['160x600.relational.text.and.image.module.ticket.component'] = results[30];
		snippets160x600['160x600.relational.text.and.image.module.ticket.reel.component'] = results[31];
		snippets160x600['160x600.relational.text.and.image.module.ticket.reel.with.countdown.component'] = results[32];
		snippets160x600['160x600.text.and.image.module.combo.tickets.portrait.component'] = results[33];
		snippets160x600['160x600.text.and.image.module.image.area.component'] = results[34];
		snippets160x600['160x600.text.and.image.module.key.art.component'] = results[35];
		snippets160x600['160x600.text.and.image.module.ticket.component'] = results[36];
		snippets160x600['160x600.text.and.image.module.ticket.reel.component'] = results[37];
		snippets160x600['160x600.text.and.image.module.ticket.reel.with.countdown.component'] = results[38];
		snippets160x600['160x600.text.heavy.a.module.angled.pass.and.ticket.component'] = results[39];
		snippets160x600['160x600.text.heavy.a.module.angled.passes.component'] = results[40];
		snippets160x600['160x600.text.heavy.a.module.image.area.component'] = results[41];
		snippets160x600['160x600.text.heavy.a.module.ticket.component'] = results[42];
		snippets160x600['160x600.text.heavy.a.module.ticket.reel.component'] = results[43];
		snippets160x600['160x600.text.heavy.b.module.image.area.component'] = results[44];
		snippets160x600['160x600.text.heavy.b.module.ticket.component'] = results[45];
		snippets160x600['160x600.text.heavy.b.module.ticket.reel.component'] = results[46];
		snippets160x600['160x600.text.only.module.text.with.bullet.points.and.cta.button.component'] = results[47];
		
		var file300x250 = results[48];
		var snippets300x250 = [];
		snippets300x250['300x250.combo.relational.text.image.b.module.combo.unpacked.component'] = results[49];
		snippets300x250['300x250.combo.relational.text.image.b.module.image.area.component'] = results[50];
		snippets300x250['300x250.relational.text.and.image.module.image.area.component'] = results[51];
		snippets300x250['300x250.relational.text.and.image.module.reel.with.countdown.component'] = results[52];
		snippets300x250['300x250.relational.text.and.image.module.ticket.reel.component'] = results[53];
		snippets300x250['300x250.text.and.image.module.image.area.component'] = results[54];
		snippets300x250['300x250.text.and.image.module.key.art.component'] = results[55];
		snippets300x250['300x250.text.and.image.module.reel.with.countdown.component'] = results[56];
		snippets300x250['300x250.text.and.image.module.ticket.component'] = results[57];
		snippets300x250['300x250.text.and.image.module.ticket.reel.component'] = results[58];
		snippets300x250['300x250.text.heavy.a.module.2.passes.c.component'] = results[59];
		snippets300x250['300x250.text.heavy.a.module.angled.pass.component'] = results[60];
		snippets300x250['300x250.text.heavy.a.module.image.area.component'] = results[61];
		snippets300x250['300x250.text.heavy.b.module.combo.unpacked.component'] = results[62];
		snippets300x250['300x250.text.heavy.b.module.image.area.component'] = results[63];
		snippets300x250['300x250.text.heavy.b.module.text.countdown.cta.component'] = results[64];
		snippets300x250['300x250.text.heavy.b.module.ticket.reel.component'] = results[65];
		snippets300x250['300x250.text.only.module.end.frame.component'] = results[66];
		snippets300x250['300x250.text.only.module.text.frame.bullet.points.component'] = results[67];
		
		var file468x60 = results[68];
		var snippets468x60 = [];
		snippets468x60['468x60.cta.a.module.angled.pass.component'] = results[69];
		snippets468x60['468x60.cta.a.module.ticket.component'] = results[70];
		snippets468x60['468x60.cta.c.module.angled.passes.component'] = results[71];
		snippets468x60['468x60.cta.c.module.combo.tickets.component'] = results[72];
		snippets468x60['468x60.cta.c.module.image.area.component'] = results[73];
		snippets468x60['468x60.text.and.image.a.module.angled.passes.component'] = results[74];
		snippets468x60['468x60.text.and.image.a.module.countdown.component'] = results[75];
		snippets468x60['468x60.text.and.image.a.module.image.area.component'] = results[76];
		snippets468x60['468x60.text.and.image.a.module.ticket.component'] = results[77];
		snippets468x60['468x60.text.and.image.a.module.ticket.reel.component'] = results[78];
		
		var file728x90 = results[79];
		var snippets728x90 = [];
		snippets728x90['728x90.cta.a.module.angled.pass.component'] = results[80];
		snippets728x90['728x90.cta.a.module.countdown.component'] = results[81];
		snippets728x90['728x90.cta.a.module.ticket.component'] = results[82];
		snippets728x90['728x90.cta.b.module.text.only.component'] = results[83];
		snippets728x90['728x90.cta.b.module.text.with.bullet.points.component'] = results[84];
		snippets728x90['728x90.cta.c.module.angled.passes.component'] = results[85];
		snippets728x90['728x90.cta.c.module.combo.tickets.component'] = results[86];
		snippets728x90['728x90.cta.c.module.image.area.component'] = results[87];
		snippets728x90['728x90.text.and.image.a.module.angled.passes.component'] = results[88];
		snippets728x90['728x90.text.and.image.a.module.countdown.component'] = results[89];
		snippets728x90['728x90.text.and.image.a.module.image.area.component'] = results[90];
		snippets728x90['728x90.text.and.image.a.module.ticket.component'] = results[91];
		snippets728x90['728x90.text.and.image.a.module.ticket.reel.component'] = results[92];
		
		var file300x50 = results[93];
		var snippets300x50 = [];
		snippets300x50['300x50.copy.only.module.headline.component'] = results[94];
		snippets300x50['300x50.cta.button.module.pass.with.cta.component'] = results[95];
		snippets300x50['300x50.image.a.module.countdown.component'] = results[96];
		snippets300x50['300x50.image.a.module.double.ticket.component'] = results[97];
		snippets300x50['300x50.image.a.module.image.area.component'] = results[98];
		snippets300x50['300x50.image.and.copy.module.combo.tickets.and.headline.component'] = results[99];
		snippets300x50['300x50.image.and.copy.module.pass.with.headline.component'] = results[100];
		snippets300x50['300x50.image.b.module.combo.tickets.component'] = results[101];
		snippets300x50['300x50.image.b.module.image.area.component'] = results[102];
		snippets300x50['300x50.image.b.module.reel.component'] = results[103];
		
		var file320x50 = results[104];
		var snippets320x50 = [];
		snippets320x50['320x50.copy.only.module.headline.component'] = results[105];
		snippets320x50['320x50.cta.button.module.pass.with.cta.component'] = results[106];
		snippets320x50['320x50.image.a.module.countdown.component'] = results[107];
		snippets320x50['320x50.image.a.module.double.ticket.component'] = results[108];
		snippets320x50['320x50.image.a.module.image.area.component'] = results[109];
		snippets320x50['320x50.image.and.copy.module.combo.tickets.and.headline.component'] = results[110];
		snippets320x50['320x50.image.and.copy.module.pass.with.headline.component'] = results[111];
		snippets320x50['320x50.image.b.module.combo.tickets.component'] = results[112];
		snippets320x50['320x50.image.b.module.image.area.component'] = results[113];
		snippets320x50['320x50.image.b.module.reel.component'] = results[114];
		
		var file300x600 = results[115];
		var snippets300x600 = [];
		snippets300x600['300x600.content.hero.with.relational.text.module.combo.ticket.and.portrait.component'] = results[116];
		snippets300x600['300x600.content.hero.with.relational.text.module.double.image.component'] = results[117];
		snippets300x600['300x600.content.hero.with.relational.text.module.image.area.component'] = results[118];
		snippets300x600['300x600.content.hero.with.relational.text.module.key.art.component'] = results[119];
		snippets300x600['300x600.content.hero.with.relational.text.module.ticket.reel.component'] = results[120];
		snippets300x600['300x600.double.image.module.2.passes.and.ticket.component'] = results[121];
		snippets300x600['300x600.double.image.module.image.and.tickets.combo.component'] = results[122];
		snippets300x600['300x600.double.image.module.image.area.component'] = results[123];
		snippets300x600['300x600.double.image.module.pass.and.ticket.component'] = results[124];
		snippets300x600['300x600.text.heavy.module.2.row.ticket.b.component'] = results[125];
		snippets300x600['300x600.text.heavy.module.image.area.component'] = results[126];
		snippets300x600['300x600.text.heavy.module.key.art.component'] = results[127];
		snippets300x600['300x600.text.heavy.module.reel.with.countdown.component'] = results[128];
		snippets300x600['300x600.text.heavy.module.short.combo.tickets.component'] = results[129];
		snippets300x600['300x600.text.heavy.module.ticket.reel.component'] = results[130];
		
		var file970x250 = results[131];
		var snippets970x250 = [];
		snippets970x250['970x250.text.and.image.a.module.2.passes.angled.component'] = results[132];
		snippets970x250['970x250.text.and.image.a.module.combo.ticket.component'] = results[133];
		snippets970x250['970x250.text.and.image.a.module.image.area.component'] = results[134];
		snippets970x250['970x250.text.and.image.a.module.key.art.component'] = results[135];
		snippets970x250['970x250.text.and.image.a.module.pass.ticket.angled.and.countdown.component'] = results[136];
		snippets970x250['970x250.text.and.image.a.module.ticket.component'] = results[137];
		snippets970x250['970x250.text.and.image.a.module.ticket.reel.component'] = results[138];
		snippets970x250['970x250.text.and.image.a.module.ticket.reel.with.countdown.component'] = results[139];
		snippets970x250['970x250.text.top.image.module.image.area.component'] = results[140];
		snippets970x250['970x250.text.top.image.module.ticket.reel.component'] = results[141];
		snippets970x250['970x250.top.text.image.module.combo.ticket.unpacked.component'] = results[142];
		snippets970x250['970x250.top.text.image.module.image.area.component'] = results[143];
		snippets970x250['970x250.top.text.image.module.ticket.reel.component'] = results[144];
		
		if(data.hasOwnProperty('banner120x600')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner120x600); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file120x600.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner120x600); i++) {
				switch( data['banner120x600-frame-'+i+'-content'] ) {
					case '120x600.relational.text.and.image.module.angled.passes.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.angled.passes.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.combo.tickets.portrait.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.combo.tickets.portrait.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.countdown.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.countdown.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.image.area.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.image.area.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.key.art.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.key.art.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.ticket.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.ticket.component']);
						temp = data120x600;
						break;
					case '120x600.relational.text.and.image.module.ticket.reel.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.relational.text.and.image.module.ticket.reel.component']);
						temp = data120x600;
						break;
					case '120x600.text.and.image.module.angled.passes.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.angled.passes.component']);
						temp = data120x600;
						break;
					case '120x600.text.and.image.module.combo.tickets.portrait.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.combo.tickets.portrait.component']);
						temp = data120x600;
						break;
					case '120x600.text.and.image.module.countdown.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.countdown.component']);
						temp = data120x600;
						break;	
					case '120x600.text.and.image.module.image.area.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.image.area.component']);
						temp = data120x600;
						break;	
					case '120x600.text.and.image.module.key.art.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.key.art.component']);
						temp = data120x600;
						break;	
					case '120x600.text.and.image.module.ticket.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.ticket.component']);
						temp = data120x600;
						break;	
					case '120x600.text.and.image.module.ticket.reel.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.and.image.module.ticket.reel.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.a.module.angled.pass.and.ticket.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.a.module.angled.pass.and.ticket.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.a.module.angled.passes.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.a.module.angled.passes.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.a.module.image.area.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.a.module.image.area.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.a.module.ticket.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.a.module.ticket.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.a.module.ticket.reel.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.a.module.ticket.reel.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.b.module.image.area.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.b.module.image.area.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.b.module.ticket.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.b.module.ticket.component']);
						temp = data120x600;
						break;
					case '120x600.text.heavy.b.module.ticket.reel.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.heavy.b.module.ticket.reel.component']);
						temp = data120x600;
						break;
					case '120x600.text.only.module.text.and.bullet.points.with.cta.button.component' :
						data120x600 = temp.replace(/%content%/, snippets120x600['120x600.text.only.module.text.and.bullet.points.with.cta.button.component']);
						temp = data120x600;

						break;
					default :
						throw new Error('There was a problem generating the 120x600 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner160x600')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner160x600); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file160x600.replace(/%content%/, markers);
		
			for(var i = 1; i <= parseInt(data.banner160x600); i++) {
				switch( data['banner160x600-frame-'+i+'-content'] ) {
					case '160x600.relational.text.and.image.module.angled.passes.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.angled.passes.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.combo.tickets.portrait.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.combo.tickets.portrait.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.image.area.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.image.area.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.key.art.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.key.art.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.ticket.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.ticket.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.ticket.reel.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.ticket.reel.component']);
						temp = data160x600;
						break;
					case '160x600.relational.text.and.image.module.ticket.reel.with.countdown.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.relational.text.and.image.module.ticket.reel.with.countdown.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.combo.tickets.portrait.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.combo.tickets.portrait.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.image.area.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.image.area.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.key.art.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.key.art.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.ticket.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.ticket.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.ticket.reel.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.ticket.reel.component']);
						temp = data160x600;
						break;
					case '160x600.text.and.image.module.ticket.reel.with.countdown.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.and.image.module.ticket.reel.with.countdown.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.a.module.angled.pass.and.ticket.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.a.module.angled.pass.and.ticket.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.a.module.angled.passes.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.a.module.angled.passes.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.a.module.image.area.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.a.module.image.area.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.a.module.ticket.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.a.module.ticket.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.a.module.ticket.reel.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.a.module.ticket.reel.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.b.module.image.area.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.b.module.image.area.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.b.module.ticket.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.b.module.ticket.component']);
						temp = data160x600;
						break;
					case '160x600.text.heavy.b.module.ticket.reel.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.heavy.b.module.ticket.reel.component']);
						temp = data160x600;
						break;
					case '160x600.text.only.module.text.with.bullet.points.and.cta.button.component' :
						data160x600 = temp.replace(/%content%/, snippets160x600['160x600.text.only.module.text.with.bullet.points.and.cta.button.component']);
						temp = data160x600;
						break;
						
					default :
						throw new Error('There was a problem generating the 160x600 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner300x250')) {
		
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner300x250); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file300x250.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner300x250); i++) {
				switch( data['banner300x250-frame-'+i+'-content'] ) {
					case '300x250.combo.relational.text.image.b.module.combo.unpacked.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.combo.relational.text.image.b.module.combo.unpacked.component']);
						temp = data300x250;
						break;
					case '300x250.combo.relational.text.image.b.module.image.area.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.combo.relational.text.image.b.module.image.area.component']);
						temp = data300x250;
						break;
					case '300x250.relational.text.and.image.module.image.area.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.relational.text.and.image.module.image.area.component']);
						temp = data300x250;
						break;
					case '300x250.relational.text.and.image.module.reel.with.countdown.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.relational.text.and.image.module.reel.with.countdown.component']);
						temp = data300x250;
						break;
					case '300x250.relational.text.and.image.module.ticket.reel.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.relational.text.and.image.module.ticket.reel.component']);
						temp = data300x250;
						break;
					case '300x250.text.and.image.module.image.area.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.and.image.module.image.area.component']);
						temp = data300x250;
						break;
					case '300x250.text.and.image.module.key.art.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.and.image.module.key.art.component']);
						temp = data300x250;
						break;
					case '300x250.text.and.image.module.reel.with.countdown.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.and.image.module.reel.with.countdown.component']);
						temp = data300x250;
						break;
					case '300x250.text.and.image.module.ticket.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.and.image.module.ticket.component']);
						temp = data300x250;
						break;
					case '300x250.text.and.image.module.ticket.reel.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.and.image.module.ticket.reel.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.a.module.2.passes.c.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.a.module.2.passes.c.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.a.module.angled.pass.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.a.module.angled.pass.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.a.module.image.area.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.a.module.image.area.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.b.module.combo.unpacked.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.b.module.combo.unpacked.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.b.module.image.area.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.b.module.image.area.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.b.module.text.countdown.cta.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.b.module.text.countdown.cta.component']);
						temp = data300x250;
						break;
					case '300x250.text.heavy.b.module.ticket.reel.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.heavy.b.module.ticket.reel.component']);
						temp = data300x250;
						break;
					case '300x250.text.only.module.end.frame.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.only.module.end.frame.component']);
						temp = data300x250;
						break;
					case '300x250.text.only.module.text.frame.bullet.points.component' :
						data300x250 = temp.replace(/%content%/, snippets300x250['300x250.text.only.module.text.frame.bullet.points.component']);
						temp = data300x250;
						break;
						
					default :
						throw new Error('There was a problem generating the 300x250 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner468x60')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner468x60); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file468x60.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner468x60); i++) {				
				switch( data['banner468x60-frame-'+i+'-content'] ) {
					case '468x60.cta.a.module.angled.pass.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.cta.a.module.angled.pass.component']);
						temp = data468x60;
						break;
					case '468x60.cta.a.module.ticket.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.cta.a.module.ticket.component']);
						temp = data468x60;
						break;
					case '468x60.cta.c.module.angled.passes.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.cta.c.module.angled.passes.component']);
						temp = data468x60;
						break;
					case '468x60.cta.c.module.combo.tickets.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.cta.c.module.combo.tickets.component']);
						temp = data468x60;
						break;
					case '468x60.cta.c.module.image.area.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.cta.c.module.image.area.component']);
						temp = data468x60;
						break;
					case '468x60.text.and.image.a.module.angled.passes.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.text.and.image.a.module.angled.passes.component']);
						temp = data468x60;
						break;	
					case '468x60.text.and.image.a.module.countdown.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.text.and.image.a.module.countdown.component']);
						temp = data468x60;
						break;
					case '468x60.text.and.image.a.module.image.area.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.text.and.image.a.module.image.area.component']);
						temp = data468x60;
						break;
					case '468x60.text.and.image.a.module.ticket.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.text.and.image.a.module.ticket.component']);
						temp = data468x60;
						break;
					case '468x60.text.and.image.a.module.ticket.reel.component' :
						data468x60 = temp.replace(/%content%/, snippets468x60['468x60.text.and.image.a.module.ticket.reel.component']);
						temp = data468x60;
						break;
						
					default :
						throw new Error('There was a problem generating the 468x60 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner728x90')) {
		
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner728x90); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file728x90.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner728x90); i++) {
				switch( data['banner728x90-frame-'+i+'-content'] ) {
					case '728x90.cta.a.module.angled.pass.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.a.module.angled.pass.component']);
						temp = data728x90;
						break;
					case '728x90.cta.a.module.countdown.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.a.module.countdown.component']);
						temp = data728x90;
						break;
					case '728x90.cta.a.module.ticket.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.a.module.ticket.component']);
						temp = data728x90;
						break;
					case '728x90.cta.b.module.text.only.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.b.module.text.only.component']);
						temp = data728x90;
						break;
					case '728x90.cta.b.module.text.with.bullet.points.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.b.module.text.with.bullet.points.component']);
						temp = data728x90;
						break;
					case '728x90.cta.c.module.angled.passes.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.c.module.angled.passes.component']);
						temp = data728x90;
						break;
					case '728x90.cta.c.module.combo.tickets.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.c.module.combo.tickets.component']);
						temp = data728x90;
						break;
					case '728x90.cta.c.module.image.area.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.cta.c.module.image.area.component']);
						temp = data728x90;
						break;
					
					case '728x90.text.and.image.a.module.angled.passes.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.text.and.image.a.module.angled.passes.component']);
						temp = data728x90;
						break;
					case '728x90.text.and.image.a.module.countdown.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.text.and.image.a.module.countdown.component']);
						temp = data728x90;
						break;
					case '728x90.text.and.image.a.module.image.area.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.text.and.image.a.module.image.area.component']);
						temp = data728x90;
						break;
					case '728x90.text.and.image.a.module.ticket.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.text.and.image.a.module.ticket.component']);
						temp = data728x90;
						break;
					case '728x90.text.and.image.a.module.ticket.reel.component' :
						data728x90 = temp.replace(/%content%/, snippets728x90['728x90.text.and.image.a.module.ticket.reel.component']);
						temp = data728x90;
						break;
						
						
					default :
						throw new Error('There was a problem generating the 728x90 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner300x50')) {
				
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner300x50); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file300x50.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner300x50); i++) {
				
				switch( data['banner300x50-frame-'+i+'-content'] ) {
					case '300x50.copy.only.module.headline.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.copy.only.module.headline.component']);
						temp = data300x50;
						break;
					case '300x50.cta.button.module.pass.with.cta.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.cta.button.module.pass.with.cta.component']);
						temp = data300x50;
						break;
					case '300x50.image.a.module.countdown.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.a.module.countdown.component']);
						temp = data300x50;
						break;
					case '300x50.image.a.module.double.ticket.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.a.module.double.ticket.component']);
						temp = data300x50;
						break;
					case '300x50.image.a.module.image.area.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.a.module.image.area.component']);
						temp = data300x50;
						break;
					case '300x50.image.and.copy.module.combo.tickets.and.headline.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.and.copy.module.combo.tickets.and.headline.component']);
						temp = data300x50;
						break;
					case '300x50.image.and.copy.module.pass.with.headline.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.and.copy.module.pass.with.headline.component']);
						temp = data300x50;
						break;
					case '300x50.image.b.module.combo.tickets.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.b.module.combo.tickets.component']);
						temp = data300x50;
						break;
					case '300x50.image.b.module.image.area.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.b.module.image.area.component']);
						temp = data300x50;
						break;
					case '300x50.image.b.module.reel.component' :
						data300x50 = temp.replace(/%content%/, snippets300x50['300x50.image.b.module.reel.component']);
						temp = data300x50;
						break;
						
					default :
						throw new Error('There was a problem generating the 300x50 frame data');
				}
			}
		}

		if(data.hasOwnProperty('banner320x50')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner320x50); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file320x50.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner320x50); i++) {
				switch( data['banner320x50-frame-'+i+'-content'] ) {
					case '320x50.copy.only.module.headline.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.copy.only.module.headline.component']);
						temp = data320x50;
						break;
					case '320x50.cta.button.module.pass.with.cta.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.cta.button.module.pass.with.cta.component']);
						temp = data320x50;
						break;
					case '320x50.image.a.module.countdown.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.a.module.countdown.component']);
						temp = data320x50;
						break;
					case '320x50.image.a.module.double.ticket.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.a.module.double.ticket.component']);
						temp = data320x50;
						break;
					case '320x50.image.a.module.image.area.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.a.module.image.area.component']);
						temp = data320x50;
						break;
					case '320x50.image.and.copy.module.combo.tickets.and.headline.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.and.copy.module.combo.tickets.and.headline.component']);
						temp = data320x50;
						break;
					case '320x50.image.and.copy.module.pass.with.headline.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.and.copy.module.pass.with.headline.component']);
						temp = data320x50;
						break;
					case '320x50.image.b.module.combo.tickets.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.b.module.combo.tickets.component']);
						temp = data320x50;
						break;
					case '320x50.image.b.module.image.area.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.b.module.image.area.component']);
						temp = data320x50;
						break;
					case '320x50.image.b.module.reel.component' :
						data320x50 = temp.replace(/%content%/, snippets320x50['320x50.image.b.module.reel.component']);
						temp = data320x50;
						break;	
						
					default :
						throw new Error('There was a problem generating the 320x50 frame data');
				}
			}
		}
		
		if(data.hasOwnProperty('banner300x600')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner300x600); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file300x600.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner300x600); i++) {
				switch( data['banner300x600-frame-'+i+'-content'] ) {
					case '300x600.content.hero.with.relational.text.module.combo.ticket.and.portrait.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.content.hero.with.relational.text.module.combo.ticket.and.portrait.component']);
						temp = data300x600;
						break;
					case '300x600.content.hero.with.relational.text.module.double.image.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.content.hero.with.relational.text.module.double.image.component']);
						temp = data300x600;
						break;
					case '300x600.content.hero.with.relational.text.module.image.area.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.content.hero.with.relational.text.module.image.area.component']);
						temp = data300x600;
						break;
					case '300x600.content.hero.with.relational.text.module.key.art.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.content.hero.with.relational.text.module.key.art.component']);
						temp = data300x600;
						break;
					case '300x600.content.hero.with.relational.text.module.ticket.reel.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.content.hero.with.relational.text.module.ticket.reel.component']);
						temp = data300x600;
						break;
					case '300x600.double.image.module.2.passes.and.ticket.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.double.image.module.2.passes.and.ticket.component']);
						temp = data300x600;
						break;
					case '300x600.double.image.module.image.and.tickets.combo.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.double.image.module.image.and.tickets.combo.component']);
						temp = data300x600;
						break;
					case '300x600.double.image.module.image.area.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.double.image.module.image.area.component']);
						temp = data300x600;
						break;
					case '300x600.double.image.module.pass.and.ticket.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.double.image.module.pass.and.ticket.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.2.row.ticket.b.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.2.row.ticket.b.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.image.area.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.image.area.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.key.art.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.key.art.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.reel.with.countdown.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.reel.with.countdown.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.short.combo.tickets.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.short.combo.tickets.component']);
						temp = data300x600;
						break;
					case '300x600.text.heavy.module.ticket.reel.component' :
						data300x600 = temp.replace(/%content%/, snippets300x600['300x600.text.heavy.module.ticket.reel.component']);
						temp = data300x600;
						break;
						
					default :
						throw new Error('There was a problem generating the 300x600 frame data');
				}
			}
		}

		if(data.hasOwnProperty('banner970x250')) {
			
			var placeholder = '%content%';
			var markers = new String();
			for(var i = 0; i < parseInt(data.banner970x250); i++) {
				if(i == 0) {
					markers += placeholder;
				}
				else {
					markers += '\n\t\t\t' + placeholder;
				}
			}
			var temp = file970x250.replace(/%content%/, markers);
			
			for(var i = 1; i <= parseInt(data.banner970x250); i++) {
				switch( data['banner970x250-frame-'+i+'-content'] ) {
					case '970x250.text.and.image.a.module.2.passes.angled.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.2.passes.angled.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.combo.ticket.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.combo.ticket.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.image.area.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.image.area.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.key.art.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.key.art.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.pass.ticket.angled.and.countdown.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.pass.ticket.angled.and.countdown.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.ticket.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.ticket.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.ticket.reel.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.ticket.reel.component']);
						temp = data970x250;
						break;
					case '970x250.text.and.image.a.module.ticket.reel.with.countdown.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.and.image.a.module.ticket.reel.with.countdown.component']);
						temp = data970x250;
						break;
					case '970x250.text.top.image.module.image.area.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.top.image.module.image.area.component']);
						temp = data970x250;
						break;
					case '970x250.text.top.image.module.ticket.reel.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.text.top.image.module.ticket.reel.component']);
						temp = data970x250;
						break;
					case '970x250.top.text.image.module.combo.ticket.unpacked.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.top.text.image.module.combo.ticket.unpacked.component']);
						temp = data970x250;
						break;
					case '970x250.top.text.image.module.image.area.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.top.text.image.module.image.area.component']);
						temp = data970x250;
						break;
					case '970x250.top.text.image.module.ticket.reel.component' :
						data970x250 = temp.replace(/%content%/, snippets970x250['970x250.top.text.image.module.ticket.reel.component']);
						temp = data970x250;
						break;
						
						
					default :
						throw new Error('There was a problem generating the 970x250 frame data');
				}
			}
			
			
			
		}
		
		if(data.hasOwnProperty('banner120x600'))
		{
			var temp = template.replace(/%banner120x600%/, data120x600);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner120x600%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner160x600'))
		{
			var temp = template.replace(/%banner160x600%/, data160x600);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner160x600%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner300x250'))
		{
			var temp = template.replace(/%banner300x250%/, data300x250);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner300x250%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner468x60'))
		{
			var temp = template.replace(/%banner468x60%/, data468x60);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner468x60%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner728x90'))
		{
			var temp = template.replace(/%banner728x90%/, data728x90);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner728x90%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner300x50'))
		{
			var temp = template.replace(/%banner300x50%/, data300x50);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner300x50%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner320x50'))
		{
			var temp = template.replace(/%banner320x50%/, data320x50);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner320x50%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner300x600'))
		{
			var temp = template.replace(/%banner300x600%/, data300x600);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner300x600%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('banner970x250'))
		{
			var temp = template.replace(/%banner970x250%/, data970x250);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%banner970x250%/, '');
			template = temp;
		}
		
		if(data.hasOwnProperty('campaignName'))
		{
			var temp = template.replace(/%name%/g, data.campaignName);
			template = temp;
		}
		else
		{
			var temp = template.replace(/%name%/g, 'NAME');
			template = temp;
		}
		
		logTemplate(template);
		return template;
		
	});
}

function createFile(data) {
	name = 'export/DATA_'+new Date().getTime()+'.js';
	
	
	fs.open('public/'+name, 'a', function(err, fd){
		generateTemplate(data);
	});
}

function logTemplate(file) {
	
	fs.writeFile('public/'+name, file, 'utf8', function(err) {
		if(err) console.log(err);
	});
}

function readAsync(file, callback) {
    fs.readFile(file, 'utf8', callback);
}

exports.generate = function(data) {
	createFile(data);
}

exports.getFile = function() {
	return name;	
}