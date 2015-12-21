'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var $ = require('nodobjc')

$.import('Foundation')
$.import('Cocoa')

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
		app.quit();
});

app.on('ready', function() {
	// ブラウザ(Chromium)の起動, 初期画面のロード
	mainWindow = new BrowserWindow({
		width      : 10000,
		height     : 10000,
		transparent: true,
		frame      : false,
		"always-on-top": true
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	mainWindow.webContents.on('did-finish-load', function(){
        $.NSApplication('sharedApplication')('windows')('objectAtIndex', 0)('setIgnoresMouseEvents', $.YES);
    });
});
