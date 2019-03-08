const { app, BrowserWindow } = require('electron')

const windows = new Set();

function createWindow(url) {
  const window = new BrowserWindow({ width: 800, height: 600 });
  window.loadURL(url);
  windows.add(window);
  window.on('closed', () => windows.delete(window));
}

app.on('ready', () => {
  createWindow('https://electronjs.org');
  createWindow('https://github.com/electron/electron-quick-start');
});
