import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import IpcFunctions from './IpcFunctions';
import dotenv from 'dotenv';
dotenv.config();


app.disableHardwareAcceleration();

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
const DIST_DIRECTORY = path.join(__dirname, '../dist');
const PUBLIC_DIRECTORY = app.isPackaged ? DIST_DIRECTORY : path.join(DIST_DIRECTORY, '../public');
const ipcFunctions = new IpcFunctions();

function createWindow() {
  const win = new BrowserWindow({
    icon: path.join(PUBLIC_DIRECTORY, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
    minWidth: 1280,
    minHeight: 832,
    width: 1280,
    height: 832,
  });

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(DIST_DIRECTORY, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  console.log('App is ready');
  // downloadScrcpy();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.on('list-devices', ipcFunctions.handleListDevices);
  ipcMain.on('connect', ipcFunctions.handleConnect);
  ipcMain.on('screenshot', ipcFunctions.handleScreenshot);
  ipcMain.on('start-stream', ipcFunctions.handleStartStream);
  ipcMain.on('screenrecord', ipcFunctions.handleScreenRecord);
  ipcMain.on('stop-screenrecord', ipcFunctions.handleStopScreenRecord);
  ipcMain.on('disconnect', ipcFunctions.KillServer);
});
