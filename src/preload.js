const { contextBridge, ipcRenderer } = require('electron')

const path = require('path')

contextBridge.exposeInMainWorld("desmondWASM", {
    getWASM: () => ipcRenderer.send("getWASM")
})