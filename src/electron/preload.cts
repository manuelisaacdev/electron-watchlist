const { contextBridge, ipcRenderer } = require('electron');

// Expor APIs seguras para o renderer
contextBridge.exposeInMainWorld('electron', {
    // CRUD operations
    persons: {
        findAll: () => ipcRenderer.invoke('persons-find-all'),
    },
    
    // Window controls
    mainWindow: {
        minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
        closeWindow: () => ipcRenderer.invoke('close-window'),
    }
});
