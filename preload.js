const { contextBridge, ipcRenderer } = require('electron');

// Expose IPC (Inter-Process Communication) to the renderer process
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
