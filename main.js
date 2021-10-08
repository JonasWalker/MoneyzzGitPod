const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow, Menu, ipcMain } = electron

// SET ENVIORMENT
//process.env.NODE_ENV = 'production'

let mainWindow

// Listen for app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({});
    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
})