const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 350,
        height: 420,
        resizable: false,
        frame: false,
        transparent: true,
        skipTaskbar: false,
        hasShadow: true,
        backgroundColor: '#00000000',
        titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : undefined,
        maximizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: false,
        }
    });

    mainWindow.loadFile('index.html');
    // mainWindow.webContents.openDevTools();
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    
    return mainWindow;
}

function setupIpcHandlers() {
    ipcMain.on('window:minimize', (e) => BrowserWindow.fromWebContents(e.sender)?.minimize());
    ipcMain.on('window:close', (e) => BrowserWindow.fromWebContents(e.sender)?.close());
}

app.whenReady()
    .then(() => {
        createWindow()
        autoUpdater.checkForUpdatesAndNotify();
    })
    .catch((err) => {
        console.error('[boot] failed to create window:', err);
        app.quit();
    });

setupIpcHandlers();

app.on('window-all-closed', () => {if (process.platform !== 'darwin') {app.quit();}});
app.on('activate', () => { if (mainWindow === null) createWindow(); });