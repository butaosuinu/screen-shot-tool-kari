var app = require('app');
var Window = require('browser-window');
var mainWindow = null;
app.on('ready', function() {
    // 画面を表示します。
    mainWindow = new Window({width : 500, height : 200});
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        app.quit();
    });
});