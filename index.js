'use strict';

const electron = require('electron');
const {app, BrowserWindow} = require('electron');
var path = require('path');
var url = 'http://192.168.0.125:32400/web/index.html';
var height = 650;
var width = 1000;
var appIcon = path.join(__dirname, 'images', 'strict_logo.ico');
var appName = app.getName();

app.on('ready', () => {
    let win = createMainWindow();
})

function createMainWindow() {
  var win = new electron.BrowserWindow({
    title: appName,
    height: height,
    width: width,
    icon: appIcon,    
  });
    
    win.loadURL(url);

  return win;
}
