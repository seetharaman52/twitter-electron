const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false, // Disabled Node.js integration in the renderer process for security reasons
      contextIsolation: true, // Enabled context isolation for renderers
      preload: __dirname + '/preload.js' // Preload script to provide access to Node.js APIs in the renderer process
    }
  });

  mainWindow.loadURL('https://twitter.com');
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
