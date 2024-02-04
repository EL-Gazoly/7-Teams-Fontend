import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import IpcFunctions from './IpcFunctions';
const ipcFunctions = new IpcFunctions();

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
    maximizable: false,
    maxWidth: 1280,
    maxHeight: 832,
    minWidth: 1280,
    minHeight: 832,
    width: 1280,
    height: 832,
  })
  win.setMenu(null)
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

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