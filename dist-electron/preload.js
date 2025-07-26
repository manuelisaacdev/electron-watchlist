const { contextBridge, ipcRenderer } = require('electron');
// Expor APIs seguras para o renderer
contextBridge.exposeInMainWorld('electron', {
    // CRUD operations
    // persons: {
    // create: (person) => ipcRenderer.invoke('create-person', person),
    // findAll: () => ipcRenderer.invoke('persons-find-all'),
    // readById: (id) => ipcRenderer.invoke('read-person-by-id', id),
    // update: (person) => ipcRenderer.invoke('update-person', person),
    // delete: (id) => ipcRenderer.invoke('delete-person', id)
    // },
    // Window controls
    minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
    closeWindow: () => ipcRenderer.invoke('close-window')
});
export {};
